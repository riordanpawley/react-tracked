// -------------------------------------------------------
// deep proxy
// -------------------------------------------------------
global.Reflect = function(undefined) {
  Object.defineProperty(self, "Reflect", {
    value: self.Reflect || {},
    writable: !0,
    configurable: !0
  }),
    Object.defineProperty(self, "Reflect", {
      value: self.Reflect || {},
      enumerable: !1
    });
}.call(
  ("object" === typeof window && window) ||
    ("object" === typeof self && self) ||
    ("object" === typeof global && global) ||
    {}
);
const OWN_KEYS_SYMBOL = Symbol();
const TRACK_MEMO_SYMBOL = Symbol();
const GET_ORIGINAL_SYMBOL = Symbol();

const TRACK_OBJECT_PROPERTY = "t";
const AFFECTED_PROPERTY = "a";
const RECORD_USAGE_PROPERTY = "r";
const RECORD_OBJECT_AS_USED_PROPERTY = "u";
const ORIGINAL_OBJECT_PROPERTY = "o";
const PROXY_PROPERTY = "p";
const PROXY_CACHE_PROPERTY = "c";
const NEXT_OBJECT_PROPERTY = "n";
const CHANGED_PROPERTY = "g";

const GLOBAL_OBJECT = Object;
const GLOBAL_ARRAY = Array;
const GLOBAL_REFLECT = Reflect;

// check if obj is a plain object or an array
const isPlainObject = obj => {
  try {
    const proto = GLOBAL_OBJECT.getPrototypeOf(obj);
    return (
      proto === GLOBAL_OBJECT.prototype || proto === GLOBAL_ARRAY.prototype
    );
  } catch (e) {
    return false;
  }
};

// copy obj if frozen
const unfreeze = obj => {
  if (!GLOBAL_OBJECT.isFrozen(obj)) return obj;
  if (GLOBAL_ARRAY.isArray(obj)) {
    return GLOBAL_ARRAY.from(obj);
  }
  return GLOBAL_OBJECT.assign({}, obj);
};

const createProxyHandler = () => ({
  [RECORD_USAGE_PROPERTY](key) {
    if (this[TRACK_OBJECT_PROPERTY]) return;
    let used = this[AFFECTED_PROPERTY].get(this[ORIGINAL_OBJECT_PROPERTY]);
    if (!used) {
      used = new Set();
      this[AFFECTED_PROPERTY].set(this[ORIGINAL_OBJECT_PROPERTY], used);
    }
    used.add(key);
  },
  [RECORD_OBJECT_AS_USED_PROPERTY]() {
    this[TRACK_OBJECT_PROPERTY] = true;
    this[AFFECTED_PROPERTY].delete(this[ORIGINAL_OBJECT_PROPERTY]);
  },
  get(target, key) {
    if (key === GET_ORIGINAL_SYMBOL) {
      return this[ORIGINAL_OBJECT_PROPERTY];
    }
    this[RECORD_USAGE_PROPERTY](key);
    // eslint-disable-next-line no-use-before-define, @typescript-eslint/no-use-before-define
    return createDeepProxy(
      target[key],
      this[AFFECTED_PROPERTY],
      this[PROXY_CACHE_PROPERTY]
    );
  },
  has(target, key) {
    if (key === TRACK_MEMO_SYMBOL) {
      this[RECORD_OBJECT_AS_USED_PROPERTY]();
      return true;
    }
    // LIMITATION:
    // We simply record the same as get.
    // This means { a: {} } and { a: {} } is detected as changed,
    // if 'a' in obj is handled.
    this[RECORD_USAGE_PROPERTY](key);
    return key in target;
  },
  ownKeys(target) {
    this[RECORD_USAGE_PROPERTY](OWN_KEYS_SYMBOL);
    return GLOBAL_REFLECT.ownKeys(target);
  }
});

export const createDeepProxy = (obj, affected, proxyCache) => {
  if (!isPlainObject(obj)) return obj;
  let proxyHandler = proxyCache && proxyCache.get(obj);
  if (!proxyHandler) {
    proxyHandler = createProxyHandler();
    proxyHandler[PROXY_PROPERTY] = new Proxy(unfreeze(obj), proxyHandler);
    proxyHandler[ORIGINAL_OBJECT_PROPERTY] = obj;
    proxyHandler[TRACK_OBJECT_PROPERTY] = false; // for trackMemo
    if (proxyCache) {
      proxyCache.set(obj, proxyHandler);
    }
  }
  proxyHandler[AFFECTED_PROPERTY] = affected;
  proxyHandler[PROXY_CACHE_PROPERTY] = proxyCache;
  return proxyHandler[PROXY_PROPERTY];
};

const isOwnKeysChanged = (origObj, nextObj) => {
  const origKeys = GLOBAL_REFLECT.ownKeys(origObj);
  const nextKeys = GLOBAL_REFLECT.ownKeys(nextObj);
  return (
    origKeys.length !== nextKeys.length ||
    origKeys.some((k, i) => k !== nextKeys[i])
  );
};

export const MODE_ASSUME_UNCHANGED_IF_UNAFFECTED = /*   */ 0b00001;
export const MODE_IGNORE_REF_EQUALITY = /*              */ 0b00010;

const IN_DEEP_SHIFT = 2;
export const MODE_ASSUME_UNCHANGED_IF_UNAFFECTED_IN_DEEP =
  MODE_ASSUME_UNCHANGED_IF_UNAFFECTED << IN_DEEP_SHIFT;
export const MODE_IGNORE_REF_EQUALITY_IN_DEEP =
  MODE_IGNORE_REF_EQUALITY << IN_DEEP_SHIFT;

export const isDeepChanged = (origObj, nextObj, affected, cache, mode) => {
  if (origObj === nextObj && (mode & MODE_IGNORE_REF_EQUALITY) === 0)
    return false;
  if (typeof origObj !== "object" || origObj === null) return true;
  if (typeof nextObj !== "object" || nextObj === null) return true;
  const used = affected.get(origObj);
  if (!used) return (mode & MODE_ASSUME_UNCHANGED_IF_UNAFFECTED) === 0;
  if (cache && (mode & MODE_IGNORE_REF_EQUALITY) === 0) {
    const hit = cache.get(origObj);
    if (hit && hit[NEXT_OBJECT_PROPERTY] === nextObj) {
      return hit[CHANGED_PROPERTY];
    }
    // for object with cycles (CHANGED_PROPERTY is `undefined`)
    cache.set(origObj, { [NEXT_OBJECT_PROPERTY]: nextObj });
  }
  let changed = null;
  // eslint-disable-next-line no-restricted-syntax
  for (const key of used) {
    const c =
      key === OWN_KEYS_SYMBOL
        ? isOwnKeysChanged(origObj, nextObj)
        : isDeepChanged(
            origObj[key],
            nextObj[key],
            affected,
            cache,
            ((mode >>> IN_DEEP_SHIFT) << IN_DEEP_SHIFT) |
              (mode >>> IN_DEEP_SHIFT)
          );
    if (c === true || c === false) changed = c;
    if (changed) break;
  }
  if (changed === null)
    changed = (mode & MODE_ASSUME_UNCHANGED_IF_UNAFFECTED) === 0;
  if (cache && (mode & MODE_IGNORE_REF_EQUALITY) === 0) {
    cache.set(origObj, {
      [NEXT_OBJECT_PROPERTY]: nextObj,
      [CHANGED_PROPERTY]: changed
    });
  }
  return changed;
};

// explicitly track object with memo
export const trackMemo = obj => {
  if (isPlainObject(obj)) {
    return TRACK_MEMO_SYMBOL in obj;
  }
  return false;
};

// get original object from proxy
export const getUntrackedObject = obj => {
  if (isPlainObject(obj)) {
    return obj[GET_ORIGINAL_SYMBOL] || null;
  }
  return null;
};
