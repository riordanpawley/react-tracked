import {
  useContext,
  useMemo,
  useRef,
  useReducer,
} from 'react';

import { useIsomorphicLayoutEffect } from './utils';
import {
  STATE_CONTEXT_PROPERTY,
  SUBSCRIBE_CONTEXT_PROPERTY,
} from './createProvider';
import {
  createDeepProxy,
  isDeepChanged,
  MODE_ASSUME_UNCHANGED_IF_UNAFFECTED,
  MODE_IGNORE_REF_EQUALITY,
  MODE_ASSUME_UNCHANGED_IF_UNAFFECTED_IN_DEEP,
} from './deepProxy';
import { createUseUpdate } from './createUseUpdate';

const MODE_ALWAYS_ASSUME_CHANGED_IF_UNAFFECTED = 0;
const MODE_ALWAYS_ASSUME_UNCHANGED_IF_UNAFFECTED = (
  MODE_ASSUME_UNCHANGED_IF_UNAFFECTED | MODE_ASSUME_UNCHANGED_IF_UNAFFECTED_IN_DEEP
);
const MODE_MUTABLE_ROOT_STATE = MODE_IGNORE_REF_EQUALITY; // only for root
const MODE_DEFAULT = MODE_ASSUME_UNCHANGED_IF_UNAFFECTED; // only for root

const STATE_PROPERTY = 's';
const AFFECTED_PROPERTY = 'a';
const CACHE_PROPERTY = 'c';
const DEEP_PROXY_MODE_PROPERTY = 'd';

export const createUseTrackedState = (context) => (opts = {}) => {
  const [, forceUpdate] = useReducer((c) => c + 1, 0);
  const {
    [STATE_CONTEXT_PROPERTY]: state,
    [SUBSCRIBE_CONTEXT_PROPERTY]: subscribe,
  } = useContext(context);
  const affected = new WeakMap();
  const lastTracked = useRef();
  useIsomorphicLayoutEffect(() => {
    lastTracked.current = {
      [STATE_PROPERTY]: state,
      [AFFECTED_PROPERTY]: affected,
      [CACHE_PROPERTY]: new WeakMap(),
      /* eslint-disable no-nested-ternary, indent */
      [DEEP_PROXY_MODE_PROPERTY]:
        opts.unstable_forceUpdateForStateChange ? MODE_ALWAYS_ASSUME_CHANGED_IF_UNAFFECTED
      : opts.unstable_ignoreIntermediateObjectUsage ? MODE_ALWAYS_ASSUME_UNCHANGED_IF_UNAFFECTED
      : opts.unstable_ignoreStateEquality ? MODE_MUTABLE_ROOT_STATE
      : /* default */ MODE_DEFAULT,
      /* eslint-enable no-nested-ternary, indent */
    };
  });
  useIsomorphicLayoutEffect(() => {
    const callback = (nextState) => {
      try {
        const lastTrackedCurrent = lastTracked.current;
        if (lastTrackedCurrent[STATE_PROPERTY] === nextState
          || !isDeepChanged(
            lastTrackedCurrent[STATE_PROPERTY],
            nextState,
            lastTrackedCurrent[AFFECTED_PROPERTY],
            lastTrackedCurrent[CACHE_PROPERTY],
            lastTrackedCurrent[DEEP_PROXY_MODE_PROPERTY],
          )) {
          // not changed
          return;
        }
      } catch (e) {
        // ignored (thrown promise or some other reason)
      }
      forceUpdate();
    };
    const unsubscribe = subscribe(callback);
    return unsubscribe;
  }, [subscribe]);
  const proxyCache = useRef(new WeakMap()); // per-hook proxyCache
  return createDeepProxy(state, affected, proxyCache.current);
};

export const createUseTracked = (context) => {
  const useTrackedState = createUseTrackedState(context);
  const useUpdate = createUseUpdate(context);
  return (opts) => {
    const state = useTrackedState(opts);
    const update = useUpdate();
    return useMemo(() => [state, update], [state, update]);
  };
};
