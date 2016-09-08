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

  assert.is(errors[0].ruleId, 'strict');
  assert.is(errors[1].ruleId, 'class-methods-use-this');
  assert.is(errors[2].ruleId, 'symbol-description');
  assert.is(errors[3].ruleId, 'semi');
  assert.is(errors[4].ruleId, 'newline-after-var');
  assert.is(errors[5].ruleId, 'no-var');
  assert.is(errors[6].ruleId, 'no-empty-function');
});

/**
 * Testing if an object is a true plain object
 */
test('It should be a javascript plain object', assert => {
  assert.true(isPlainObj(conf));
  assert.true(isPlainObj(conf.rules));
});
