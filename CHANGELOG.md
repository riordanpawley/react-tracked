# Change Log

## [Unreleased]

## [1.0.6] - 2020-02-11
### Changed
- Betect SSR beter by checking userAgent

## [1.0.5] - 2020-02-03
### Changed
- Ignore thrown error/promise in useTrackedState callback (for Suspense)

## [1.0.4] - 2020-02-02
### Changed
- Improve internal mode for deepProxy behavior
  - This doesn't change the default behavior

## [1.0.3] - 2020-02-01
### Changed
- Fix typing of a readonly tuple in 1.0.2
- Fix typing of useValue in createContainer

## [1.0.2] - 2020-01-19
### Changed
- Change useValue type to accept a readonly tuple

## [1.0.1] - 2020-01-05
### Changed
- Possibly reduce bundle size

## [1.0.0] - 2019-12-05
### Changed
- Fix API and release v1

## [0.11.0] - 2019-10-12
### Added
- A new API getUntrackedObject as an escape hatch (#24)

## [0.10.0] - 2019-10-08
### Added
- A new API trackMemo as an escape hatch for React.memo (#22)

## [0.9.0] - 2019-10-05
### Changed
- Inline useForceUpdate to remove unnecessary deps

## [0.8.0] - 2019-09-05
### Changed
- Only provide container API (breaking change) (#16)

## [0.7.0] - 2019-07-20
### Changed
- No useLayoutEffect for invoking listeners (which leads de-opt sync mode)

## [0.6.0] - 2019-07-15
### Changed
- Prefer createContainer to default context (#5)

## [0.5.0] - 2019-07-13
### Changed
- Warn if useValue is not statically defined

## [0.4.0] - 2019-06-14
### Added
- Add createContainer
### Changed
- Rename to simple provider (breaking change)

## [0.3.0] - 2019-06-13
### Changed
- Add customContext support
- Fix useDispatch
- Remove unnecessary batchedUpdates
- Split useTrackedState and useTracked

## [0.2.0] - 2019-06-13
### Changed
- Properly useEffect in TrackedProvider

## [0.1.0] - 2019-06-12
### Added
- Initial experimental release
