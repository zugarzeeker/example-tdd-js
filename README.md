# example-tdd-js
[![Build status][travis-svg]][travis]
[![Code coverage][codecov-svg]][codecov]
[![License][license-svg]][license]

[travis]: https://travis-ci.org/zugarzeeker/example-tdd-js
[travis-svg]: https://img.shields.io/travis/zugarzeeker/example-tdd-js.svg?style=flat
[codecov]: https://codecov.io/gh/zugarzeeker/example-tdd-js
[codecov-svg]: https://img.shields.io/codecov/c/github/zugarzeeker/example-tdd-js.svg
[license]: https://opensource.org/licenses/MIT
[license-svg]: https://img.shields.io/badge/license-MIT-blue.svg

Learning tdd in javascript resources for starter

## Usage
- `npm install`
- `npm test`
- `npm run test:watch`

## TDD
Test Driven Development

![Red Green Refactor](http://goodheads.io/wp-content/uploads/2016/01/redgreenrefacor.png)

Image source: https://manojjaggavarapu.files.wordpress.com/2012/07/redgreenrefacor.png
### Red -> Green -> Refactor -> Repeat
- `Red` write a fail test case
- `Green` write a simple code to make test case pass
- `Refactor` eliminate redundancy
- `Repeat`

### Why TDD ?
- Refactor code with confidence because you have the tests.
- Have a goal to do something that will be a test case.
- Test first is more easier than test last because you will be fun that is same playing game.


### How to start learning TDD in JS ?
- [JavaScript Testing - Udacity](https://www.udacity.com/course/javascript-testing--ud549)
- [5 Common Misconceptions About TDD & Unit Tests - Eric Elliott](https://medium.com/javascript-scene/5-common-misconceptions-about-tdd-unit-tests-863d5beb3ce9#.wdp9umdh8)
- [5 Questions Every Unit Test Must Answer - Eric Elliott](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d#.ir5pmzgg1)
- [Practical Full-Stack JavaScript Web Application Test Driven Development](https://github.com/nelsonic/practical-js-tdd/blob/master/manuscript/03-tdd-with-mocha.md)

## Tools
- [JavaScript unit test tools for TDD](http://stackoverflow.com/questions/300855/javascript-unit-test-tools-for-tdd)
- [Chai](http://chaijs.com)
- [Power Assert](https://github.com/power-assert-js/power-assert)

## Setup ES6 Complier
Use babeljs to complie ES6 Code. https://babeljs.io

### Installation
- `npm install --save babel-cli`
- `npm install --save babel-preset-es2015`
- `npm install --save babel-preset-stage-0`
- `npm install --save babel-register`
- `npm install --save babel-plugin-istanbul` for using `nyc`

### `.babelrc`
```json
{
  "presets": ["es2015", "stage-0"],
  "env": {
    "test": {
      "plugins": ["istanbul"]
    }
  }
}
```

## Code Coverage
> Code Coverage is a measurement of how many lines/blocks/arcs of your code are executed while the automated tests are running.

> source: http://stackoverflow.com/questions/195008/what-is-code-coverage-and-how-do-you-measure-it

Config `nyc` to handle test coverage.
https://github.com/istanbuljs/nyc

### `.nycrc`
```json
{
  "include": [
    "src"
  ],
  "exclude": [
    "src/**/*.spec.js"
  ],
  "reporter": [
    "lcov",
    "text"
  ],
  "require": [
    "babel-register"
  ],
  "cache": true,
  "sourceMap": false,
  "instrument": false
}
```

### Setup Scripts in `package.json`
Don't forget to install `cross-env` (`npm install --save-dev cross-env`) before run `npm test`.
```json
{
  "scripts": {
    "test": "cross-env NODE_ENV=test nyc --all mocha ./src/**/*.spec.js --compilers js:babel-register",
    "test:watch": "mocha --watch ./src/**/*.spec.js --compilers js:babel-register"
  }
}
```

## Example
Find gcd (greatest common divisor)

### Red
```js
// gcd.spec.js
import { gcd } from './gcd'
import assert from 'power-assert'

describe('gcd', () => {
  it('should find gcd(2, 2) = 2', () => {
    assert(gcd(2, 2) === 2)
  })
})
```

#### Green
```js
// gcd.js
export const gcd = () => 2
```

#### Red
```js
// gcd.spec.js
import { gcd } from './gcd'
import assert from 'power-assert'

describe('gcd', () => {
  it('should find gcd(5, 15) = 5', () => {
    assert(gcd(5, 15) === 5)
  })
})
```

#### Green
```js
// gcd.js
export const gcd = (a, b) => {
  if (a === 2 && b === 2) return 2
  return 5
}
```

#### Red
```js
// gcd.spec.js
import { gcd } from './gcd'
import assert from 'power-assert'

describe('gcd', () => {
  it('should find gcd(120, 72) = 24', () => {
    assert(gcd(120, 72) === 24)
  })
})
```

#### Green
```js
// gcd.js
export const gcd = (a, b) => {
  if (a === 2 && b === 2) return 2
  else if (a === 5 && b === 15) return 5
  return 24
}
```

#### Refactor
```js
// gcd.js
export const gcd = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a !== 0) a = b % a
    if (b !== 0) b = a % b
  }
  return a + b
}
```

#### Refactor
```js
// gcd.js
export const gcd = (a, b) => {
  if (a === 0) return b
  return gcd(b, a % b)
}
```

#### Refactor
```js
// gcd.js
export const gcd = (a, b) => (
  a === 0 ? b : gcd(b, a % b)
)
```

## CI
Continuous Integration (Build -> Test -> Deploy)
- `Travis CI` https://travis-ci.org
- `Circle CI` https://circleci.com

### Flow
- Push code to github
- CI build & test your code
- If test pass, it will run command to deploy.
- If test fail, it will send notification (e.g slack).

## Github
some useful tricks

### Integration
- `codecov.io` https://codecov.io
- `coverall` https://coveralls.io

### Status Badges
See how to add badges in https://shields.io.

- Travis CI Build Status [![Build status][travis-svg]][travis]

- codecov.io Test Coverage [![Code coverage][codecov-svg]][codecov]

- License MIT [![License][license-svg]][license]

## Learn More
- [Clean JavaScript: Using use-case interactors - @dtinth](https://medium.com/@dtinth/clean-javascript-using-use-case-interactors-f3a50c138154#.jv6e73yoj)
