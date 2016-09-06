'use strict';

var test = require('ava');
var isPlainObj = require('is-plain-obj');
var tempWrite = require('temp-write');
var eslint = require('eslint');
var conf = require('../');

/**
 * lint - Lints code using `Eslint`
 *
 * @param  {String} str  Text to lint
 * @param  {Object} conf Configuration file
 * @return {Object[]}    Eslint errors
 */
function lint(str, conf) {
  var linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  });

  return linter.executeOnText(str).results[0].messages;
}

/**
 * `Eslint` test
 */
test('It should throw 7 errors', function(t) {
  var errors = lint("'use strict'\nvar foo = function () {};\nfoo();\n", conf);

  t.is(errors[0].ruleId, 'class-method-use-this');
  t.is(errors[1].ruleId, 'symbol-description');
  t.is(errors[2].ruleId, 'semi');
  t.is(errors[3].ruleId, 'newline-after-var');
  t.is(errors[4].ruleId, 'no-var');
  t.is(errors[5].ruleId, 'no-implicit-globals');
  t.is(errors[6].ruleId, 'no-empty-function');
});

/**
 * Testing if an object is a true plain object
 */
test('It should be a javascript plain object', function(t) {
  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));
});
