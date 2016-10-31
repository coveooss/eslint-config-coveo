import test from 'ava';
import isPlainObj from 'is-plain-obj';
import tempWrite from 'temp-write';
import eslint from 'eslint';
import conf from '../';

/**
 * lint - Lints code using `Eslint`
 *
 * @param  {String} str  Text to lint
 * @param  {Object} configuration Configuration file
 * @return {Object[]}    Eslint errors
 */
const lint = (str, configuration) => {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(configuration))
  });

  return linter.executeOnText(str).results[0].messages;
};

/**
 * `Eslint` test
 */
test('It should throw errors', assert => {
  const errors = lint(`'use strict'\nvar foo = function () {};\nfoo();\n`, conf);
  const rules = [
    'strict', 'semi', 'newline-after-var', 'no-var', 'no-empty-function', 'class-methods-use-this',
    'symbol-description', 'prefer-numeric-literals', 'line-comment-position',
    'lines-around-directive', 'no-useless-return'
  ];

  errors.forEach(err => {
    const id = rules.find(rule => rule === err.ruleId);

    assert.is(err.ruleId, id);
  });
});

/**
 * Testing if an object is a true plain object
 */
test('It should be a javascript plain object', assert => {
  assert.true(isPlainObj(conf));
  assert.true(isPlainObj(conf.rules));
});
