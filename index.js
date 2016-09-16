/**
 *    EPIC COVEO TEAM LINTER
 *        made with <3
 *    This is the ESLINT shareable
 *      rules configuration
 *
 *    ESLINT RULES DOCUMENTATION API
 *      http://eslint.org/docs/rules/
 *
 *    ESLINT ANNOUNCEMENTS
 *      http://eslint.org/blog/
 *      https://github.com/eslint/eslint
 */
module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    // Possible Errors
    'comma-dangle': 2,
    'no-cond-assign': 0,
    'no-console': [2, {
      allow: ['warn', 'error']
    }],
    'no-constant-condition': 0,
    'no-control-regex': 0,
    'no-debugger': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 1,
    'no-empty-character-class': 1,
    'no-ex-assign': 0,
    'no-extra-boolean-cast': 0,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 0,
    'no-invalid-regexp': 0,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 0,
    'no-obj-calls': 2,
    'no-prototype-builtins': 2,
    'no-regex-spaces': 0,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'use-isnan': 2,
    'valid-jsdoc': [2, {
      prefer: {
        arg: 'param',
        argument: 'param',
        class: 'contructor',
        virtual: 'abstract'
      },
      requireReturn: false,
      requireReturnType: true,
      matchDescription: '.+',
      requireParamDescription: true,
      requireReturnDescription: false
    }],
    'valid-typeof': 2,

    // Best Pratices
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'complexity': [2, 20],
    'consistent-return': 0,
    'curly': 2,
    'default-case': 2,
    'dot-location': 0,
    'dot-notation': 2,
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-function': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-empty-label': 0,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implied-coercion': 0,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 0,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': 0,
    'no-multi-spaces': 2,
    'no-multi-str': 0,
    'no-native-reassign': 2,
    'no-new': 0,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 0,
    'no-unused-labels': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-void': 2,
    'no-warning-comments': 2,
    'no-with': 2,
    'radix': 2,
    'vars-on-top': 0,
    'wrap-iife': 0,
    'yoda': 0,

    // Strict Mode
    'strict': [2, 'global'],

    // Variables
    'init-declarations': 0,
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-unused-vars': 2,
    'no-use-before-define': 2,

    // Node.js and CommonJS
    'callback-return': 2,
    'global-require': 2,
    'handle-callback-err': 2,
    'no-mixed-requires': 0,
    'no-new-require': 2,
    'no-path-concat': 0,
    'no-process-env': 0,
    'no-process-exit': 0,
    'no-restricted-modules': 0,
    'no-sync': 0,

    // Stylistic Issues
    'array-bracket-spacing': 0,
    'block-spacing': 2,
    'brace-style': 2,
    'camelcase': 2,
    'comma-spacing': 0,
    'comma-style': 2,
    'computed-property-spacing': 2,
    'consistent-this': 2,
    'eol-last': 2,
    'func-names': 0,
    'func-style': 2,
    'id-blacklist': [2, 'error', 'cb'],
    'id-length': [2, {
      min: 2,
      max: 30,
      properties: 'never'
    }],
    'id-match': [2, '^[a-z]+([A-Z][a-z]+)*$'],
    'indent': [2, 2, {
      SwitchCase: 1
    }],
    'jsx-quotes': 0,
    'key-spacing': 2,
    'keyword-spacing': 2,
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': [2, {
      beforeBlockComment: true,
      allowBlockStart: true,
      allowObjectStart: true,
      allowArrayStart: true
    }],
    'max-depth': [2, 4],
    'max-len': [2, 120, 2, {
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTrailingComments: true
    }],
    'max-nested-callbacks': [2, 5],
    'max-params': [2, 6],
    'max-statements': [2, 30],
    'max-statements-per-line': [2, {
      max: 1
    }],
    'new-cap': 0,
    'new-parens': 2,
    'newline-after-var': 2,
    'newline-before-return': 2,
    'newline-per-chained-call': [2, {
      ignoreChainWithDepth: 2
    }],
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-continue': 2,
    'no-inline-comments': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': 2,
    'no-negated-condition': 0,
    'no-nested-ternary': 0,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': [2, 'WithStatement'],
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': 2,
    'object-property-newline': 2,
    'one-var': 0,
    'one-var-declaration-per-line': 2,
    'operator-assignment': 2,
    'operator-linebreak': [2, 'after'],
    'padded-blocks': 0,
    'quote-props': 0,
    'quotes': [2, 'single'],
    'require-jsdoc': [2, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true
      }
    }],
    'semi': 2,
    'semi-spacing': 2,
    'sort-vars': 0,
    'space-before-blocks': 2,
    'space-before-function-paren': 0,
    'space-in-parens': 0,
    'space-infix-ops': 2,
    'space-unary-ops': 0,
    'spaced-comment': 2,
    'unicode-bom': 0,
    'wrap-regex': 0,

    // ECMAScript 6
    'arrow-body-style': [2, 'never'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [2, {
      before: true,
      after: true
    }],
    'constructor-super': 2,
    'generator-star-spacing': [2, {
      before: false,
      after: true
    }],
    'no-class-assign': 2,
    'no-confusing-arrow': [2, {
      allowParens: true
    }],
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-new-symbol': 1,
    'no-restricted-imports': 0,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 0,
    'prefer-const': 2,
    'prefer-reflect': 0,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 1,
    'require-yield': 0,
    'sort-imports': 0,
    'template-curly-spacing': 0,
    'yield-star-spacing': [2, 'before'],
    'class-methods-use-this': 2,
    'symbol-description': 2,
    'prefer-numeric-literals': 2,
    'no-restricted-properties': 0,
    'line-comment-position': [2, {
      position: 'above'
    }],
    'lines-around-directive': [2, 'never']
  }
};
