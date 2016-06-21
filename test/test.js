'use strict';

import test from 'ava';
import isPlainObj from 'is-plain-obj';
import tempWrite from 'temp-write';
import eslint from 'eslint';
import conf from '../';

/**
 * lint - Lints code using `Eslint`
 *
 * @param  {String} str  Text to lint
 * @param  {Object} conf Configuration file
 * @return {Array}       Eslint errors
 */
function lint(str, conf) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  });

  return linter.executeOnText(str).results[0].messages;
}

/**
 * Ava unit test using `Eslint`
 */
test('It should throw linting errors', t => {
  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = lint(`'use strict'\nvar foo = function () {};\nfoo();\n`, conf);
  t.is(errors[0].ruleId, 'semi');
  t.is(errors[1].ruleId, 'newline-after-var');
  t.is(errors[2].ruleId, 'no-implicit-globals');
  t.is(errors[3].ruleId, 'no-empty-function');
});
