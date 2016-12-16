<a name="1.3.0"></a>
# [1.3.0](https://github.com/coveo/eslint-config-coveo/compare/v1.2.1...v1.3.0) (2016-12-16)


### Features

* **rules:** config now fronts new eslint rules ([e3777ab](https://github.com/coveo/eslint-config-coveo/commit/e3777ab))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/coveo/eslint-config-coveo/compare/v1.2.0...v1.2.1) (2016-11-04)


### Features

* **rules:** consistent-this option ([404e704](https://github.com/coveo/eslint-config-coveo/commit/404e704))


### BREAKING CHANGES

* rules: `consistent-this` rule now has the `self` option OOTB



<a name="1.2.0"></a>
# [1.2.0](https://github.com/coveo/eslint-config-coveo/compare/v1.1.1...v1.2.0) (2016-10-31)


### Features

* **rule:** no-useless-return to support eslint 3.9.0 api ([848425c](https://github.com/coveo/eslint-config-coveo/commit/848425c))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/coveo/eslint-config-coveo/compare/v1.1.0...v1.1.1) (2016-10-18)


### Bug Fixes

* **rule:** object-curcly-spacing ([d3b12f5](https://github.com/coveo/eslint-config-coveo/commit/d3b12f5))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/coveo/eslint-config-coveo/compare/v1.0.2...v1.1.0) (2016-10-18)


### Bug Fixes

* **rules:** deprecated rules ([edccb09](https://github.com/coveo/eslint-config-coveo/commit/edccb09))


### Features

* **rule: func-name-matching:** add a new supported rule: `func-name-matching` by eslint ([3b544c6](https://github.com/coveo/eslint-config-coveo/commit/3b544c6))


### BREAKING CHANGES

* rules: no-native-reassign became no-global-assign.
no-negated-in-lhs became
no-unsafe-negation.
no-spaced-func became func-call-spacing



<a name="1.0.2"></a>
## [1.0.2](https://github.com/coveo/eslint-config-coveo/compare/v1.0.1...v1.0.2) (2016-09-16)



<a name="1.0.1"></a>
## [1.0.1](https://github.com/coveo/eslint-config-coveo/compare/v1.0.0...v1.0.1) (2016-09-16)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/coveo/eslint-config-coveo/compare/v0.1.10...v1.0.0) (2016-09-16)


### Bug Fixes

* **gulpfile:** fix release task ([f1b9561](https://github.com/coveo/eslint-config-coveo/commit/f1b9561))
* **gulpfile:** fix release task ([1c088cf](https://github.com/coveo/eslint-config-coveo/commit/1c088cf))
* **npm:** package version ([01c114b](https://github.com/coveo/eslint-config-coveo/commit/01c114b))
* **rules:** new params for `arrow-body-style` and `object-curly-spacing` ([544edbe](https://github.com/coveo/eslint-config-coveo/commit/544edbe))


### Chores

* **npm:** package.json new commands for release ([6a282e4](https://github.com/coveo/eslint-config-coveo/commit/6a282e4))


### Reverts

* **package:** revert version ([af5e59e](https://github.com/coveo/eslint-config-coveo/commit/af5e59e))


### BREAKING CHANGES

* rules: `object-curly-spacing`: objects require spaces when
declared.

`arrow-body-style`: no curly braces when needed
* npm: 2 new commands were added in `package.json`:

`npm run release-major`

`npm
run release-minor`

`npm run release` became `npm run release-patch`



<a name="0.1.10"></a>
## [0.1.10](https://github.com/coveo/eslint-config-coveo/compare/v0.1.9...v0.1.10) (2016-09-16)


### Bug Fixes

* **rule:** arrow-body-style ([a27c4dd](https://github.com/coveo/eslint-config-coveo/commit/a27c4dd))


### BREAKING CHANGES

* rule: correct declaration of a function:
```let foo = () => 0;```
```let foo = () => ({
foo: 0 });```



<a name="0.1.9"></a>
## [0.1.9](https://github.com/coveo/eslint-config-coveo/compare/v0.1.8...v0.1.9) (2016-09-13)


### Bug Fixes

* **test:** travis is failing because a rule is missing ([2a30182](https://github.com/coveo/eslint-config-coveo/commit/2a30182))
* **travis:** build is failing because of a missing rule ([cb57c69](https://github.com/coveo/eslint-config-coveo/commit/cb57c69))
* **travis:** missing rule... let's fix the build ([ac94229](https://github.com/coveo/eslint-config-coveo/commit/ac94229))
* **travis:** rule missing ([14ae58e](https://github.com/coveo/eslint-config-coveo/commit/14ae58e))


### Features

* **rules:** eslint v.3.5.0 released with 4 new rules ([f5a509f](https://github.com/coveo/eslint-config-coveo/commit/f5a509f))


### BREAKING CHANGES

* rules: max-len rule ignores trailing comments now.
BEFORE: 'max-len: [2, 120, 2, {
ignoreComments: true, ignoreUrls: true }]'.
AFTER: 'max-len: [2, 120, 2, { ignoreComments: true,
ignoreUrls: true, ignoreTrailingComments: true  }]'



<a name="0.1.8"></a>
## [0.1.8](https://github.com/coveo/eslint-config-coveo/compare/v0.1.7...v0.1.8) (2016-09-08)


### Bug Fixes

* **rule:** complexity ([a3dc724](https://github.com/coveo/eslint-config-coveo/commit/a3dc724))
* **rule:** no-console wrong argument passed ([be3c2f5](https://github.com/coveo/eslint-config-coveo/commit/be3c2f5))
* **rules:** remove no-mixed-requires ([3fcc12b](https://github.com/coveo/eslint-config-coveo/commit/3fcc12b))



<a name="0.1.7"></a>
## [0.1.7](https://github.com/coveo/eslint-config-coveo/compare/v0.1.6...v0.1.7) (2016-09-08)


### Bug Fixes

* **travis:** fix build deployment ([dc7abe4](https://github.com/coveo/eslint-config-coveo/commit/dc7abe4))



<a name="0.1.6"></a>
## [0.1.6](https://github.com/coveo/eslint-config-coveo/compare/v0.1.5...v0.1.6) (2016-09-08)


### Bug Fixes

* **gulpfile:** fix task commit-changes ([356c2be](https://github.com/coveo/eslint-config-coveo/commit/356c2be))



<a name="0.1.5"></a>
## [0.1.5](https://github.com/coveo/eslint-config-coveo/compare/v0.1.3...v0.1.5) (2016-09-08)


### Bug Fixes

* **rule:** arrow-body-style ([1ab97e7](https://github.com/coveo/eslint-config-coveo/commit/1ab97e7))
* **rules:** typo with a new rule ([2567f55](https://github.com/coveo/eslint-config-coveo/commit/2567f55))


### BREAKING CHANGES

* rules: the rule name has been fixed from
BEFORE:
`class-method-use-this`
AFTER:`class-methods-use-this`



<a name="0.1.4"></a>
## [0.1.4](https://github.com/coveo/eslint-config-coveo/compare/v0.1.3...v0.1.4) (2016-09-08)


### Bug Fixes

* **rules:** typo with a new rule ([2567f55](https://github.com/coveo/eslint-config-coveo/commit/2567f55))


### BREAKING CHANGES

* rules: the rule name has been fixed from
BEFORE:
`class-method-use-this`
AFTER:`class-methods-use-this`



<a name="0.1.3"></a>
## [0.1.3](https://github.com/coveo/eslint-config-coveo/compare/v0.1.2...v0.1.3) (2016-09-06)


### Features

* **rules:** add 2 rules to the configuration ([2390aec](https://github.com/coveo/eslint-config-coveo/commit/2390aec))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/coveo/eslint-config-coveo/compare/v0.1.0...v0.1.2) (2016-08-17)



<a name="0.1.0"></a>
# [0.1.0](https://github.com/coveo/eslint-config-coveo/compare/v0.0.9...v0.1.0) (2016-08-16)


### Bug Fixes

* **travis:** fix UT ([98d58d3](https://github.com/coveo/eslint-config-coveo/commit/98d58d3))


### Features

* **rules:** enables no-var ([166aacb](https://github.com/coveo/eslint-config-coveo/commit/166aacb))
* **test:** enables more options on some rules ([466b48f](https://github.com/coveo/eslint-config-coveo/commit/466b48f))


### BREAKING CHANGES

* test: test were separated into 2 tests AFTER CHANGE: 2 tests



<a name="0.0.9"></a>
## [0.0.9](https://github.com/coveo/eslint-config-coveo/compare/v0.0.8...v0.0.9) (2016-06-22)



<a name="0.0.8"></a>
## [0.0.8](https://github.com/coveo/eslint-config-coveo/compare/v0.0.7...v0.0.8) (2016-06-21)



<a name="0.0.7"></a>
## [0.0.7](https://github.com/coveo/eslint-config-coveo/compare/v0.0.5...v0.0.7) (2016-06-20)



<a name="0.0.5"></a>
## [0.0.5](https://github.com/coveo/eslint-config-coveo/compare/v0.0.4...v0.0.5) (2016-06-07)



<a name="0.0.4"></a>
## [0.0.4](https://github.com/coveo/eslint-config-coveo/compare/v0.0.3...v0.0.4) (2016-06-07)



<a name="0.0.3"></a>
## [0.0.3](https://github.com/coveo/eslint-config-coveo/compare/v0.0.1...v0.0.3) (2016-06-07)



<a name="0.0.1"></a>
## 0.0.1 (2016-06-07)
