/*
 * @Author: [shangze]
 * @Date: 2023-10-23 17:33:21
 * @LastEditors: [shangze]
 * @LastEditTime: 2023-11-03 09:44:19
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended', 'eslint:recommended'],
  plugins: ['prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-template-curly-in-string': 0,
    'no-lonely-if': 0,
    'vue/no-v-text-v-html-on-component': 0,
    'import/no-named-as-default': 0,
    'no-loop-func': 0,
    'no-await-in-loop': 0,
    'vuejs-accessibility/label-has-for': 0,
    'vuejs-accessibility/form-control-has-label': 0,
    'vuejs-accessibility/form': 0,
    'no-nested-ternary': 0,
    'global-require': 0,
    'vue/multi-word-component-names': 0,
    // 以上规则因为各种原因被禁用
    'import/no-named-as-default-member': 0,
    'import/prefer-default-export': 0,
    'no-continue': 0,
    'import/no-dynamic-require': 0,
    'consistent-return': 0,
    'no-use-before-define': 0,
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    'import/order': 0,
    'prefer-destructuring': 0,
    'no-plusplus': 0,
    'vuejs-accessibility/click-events-have-key-events': 0,
    'no-param-reassign': 0,
    'no-prototype-builtins': 0,
    'import/no-cycle': 0,
    'import/extensions': [0, { 'js,vue': 'alawys' }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [0, { endOfLine: 'auto' }],
    'prefer-rest-params': 0,
    'vue/no-mutating-props': 'off',
    // 'no-shadow': ["error", { "allow": ["state", "getters"] }],
    'func-names': 0,
    'no-shadow': 0,
  },
};

// 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
// 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
// // 末尾不添加分号
// 'semi': [0],
// // 'semi-spacing': [2, {
// //   'before': false,
// //   'after': true
// // }],
// // 缩进
// 'indent': [2, 2, {
//   'SwitchCase': 1
// }],
// // 使用单引号
// 'quotes': [2, 'single', {
//   'avoidEscape': true,
//   'allowTemplateLiterals': true
// }],
// // 禁止修改const声明的变量
// 'no-const-assign': 2,
// // 在创建对象字面量时不允许键重复 {a:1,a:1}
// 'no-dupe-keys': 2,
// // 函数参数不能重复
// 'no-dupe-args': 2,
// // switch中的case标签不能重复
// 'no-duplicate-case': 2,
// // 正则表达式中的[]内容不能为空
// 'no-empty-character-class': 2,
// 'no-empty-pattern': 2,
// // 禁止使用未申明的变量
// 'no-undef': 2,
// // 禁止将变量初始化为 undefined
// 'no-undef-init': 2,
// // 禁止多余的空格
// 'no-multi-spaces': 2,
// // 字符串不能用\换行
// 'no-multi-str': 2,
// // 禁止多余的空行
// 'no-multiple-empty-lines': [2, {
//   'max': 1
// }],
// // 禁止未使用过的变量
// 'no-unused-vars': [2, {
//   'vars': 'all',
//   'args': 'none'
// }],
// // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
// 'no-unreachable': 2,
// // 禁止在 finally 语句块中出现控制流语句
// 'no-unsafe-finally': 2,
// // 强制在块之前使用一致的空格
// 'space-before-blocks': [2, 'always'],
// // 强制在 function的左括号之前使用一致的空格
// 'space-before-function-paren': [2, 'never'],
// // 强制在圆括号内使用一致的空格
// 'space-in-parens': [2, 'never'],
// // 要求操作符周围有空格
// 'space-infix-ops': 2,
// // 强制在一元操作符前后使用一致的空格
// 'space-unary-ops': [2, {
//   'words': true,
//   'nonwords': false
// }],
// // 强制在注释中 // 或 /* 使用一致的空格
// 'spaced-comment': [2, 'always', {
//   'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
// }],
// // 禁止在模板字符串和它们的字面量之间有空格
// 'template-curly-spacing': [2, 'never'],
// // 强制在大括号中使用一致的空格
// 'object-curly-spacing': [2, 'always', {
//   objectsInObjects: false
// }],
// // 强制数组方括号中使用一致的空格
// 'array-bracket-spacing': [2, 'never'],
// // 禁止块语句和类的开始或末尾有空行
// 'padded-blocks': [2, 'never'],
// // 强制函数中的变量要么一起声明要么分开声明
// 'one-var': [2, {
//   'initialized': 'never'
// }],
// // 强制操作符使用一致的换行符
// 'operator-linebreak': [2, 'after', {
//   'overrides': {
//     '?': 'before',
//     ':': 'before'
//   }
// }],
// // 禁止属性前有空白
// 'no-whitespace-before-property': 2,
// // 强制 getter 和 setter 在对象中成对出现
// 'accessor-pairs': 2,
// // 强制箭头函数的箭头前后使用一致的空格
// 'arrow-spacing': [2, {
//   'before': true,
//   'after': true
// }],
// // 强制在代码块中开括号前和闭括号后有空格
// 'block-spacing': [2, 'always'],
// // 强制在代码块中使用一致的大括号风格
// 'brace-style': [2, '1tbs', {
//   'allowSingleLine': true
// }],
// // 驼峰命名
// 'camelcase': [0, {
//   'properties': 'always'
// }],
// // 禁止使用拖尾逗号
// 'comma-dangle': [2, 'never'],
// // 强制在逗号前后使用一致的空格
// 'comma-spacing': [2, {
//   'before': false,
//   'after': true
// }],
// // 强制使用一致的逗号风格
// 'comma-style': [2, 'last'],
// // 要求或禁止文件末尾存在空行
// 'eol-last': 2,
// // 强制在点号之前和之后一致的换行
// 'dot-location': [2, 'property'],
// // 要求使用 === 和 !==
// // 'eqeqeq': [2, 'allow-null'],
// // 强制在对象字面量的属性中键和值之间使用一致的间距
// 'key-spacing': [2, {
//   'beforeColon': false,
//   'afterColon': true
// }],
// // 强制在关键字前后使用一致的空格
// 'keyword-spacing': [2, {
//   'before': true,
//   'after': true
// }],
// // 强制第一个属性的位置(属性换行)
// 'vue/first-attribute-linebreak': [2, {
//   // 单行时，第一属性前不允许使用换行符
//   singleline: 'beside',
//   // 多行时，第一属性前必须使用换行符
//   multiline: 'below'
// }],
// // 强制每行的最大属性数
// 'vue/max-attributes-per-line': [2, {
//   // 单行时可以接收最大数量
//   singleline: 6,
//   // 多行时可以接收最大数量
//   multiline: {
//     max: 1
//   }
// }],
// // 在单行元素的内容之前和之后不需要换行符
// 'vue/singleline-html-element-content-newline': 0,
// // 关闭组件命名规则校验
// 'vue/multi-word-component-names': 0,
// // 在computed properties中禁用异步actions
// 'vue/no-async-in-computed-properties': 'error',
// // 不允许重复的keys
// 'vue/no-dupe-keys': 'error',
// // 不允许重复的attributes
// 'vue/no-duplicate-attributes': 'warn',
// // 在 <template> 标签下不允许解析错误
// 'vue/no-parsing-error': ['error', {
//   'x-invalid-end-tag': false
// }],
// // 不允许覆盖保留关键字
// 'vue/no-reserved-keys': 'error',
// // 强制data必须是一个带返回值的函数
// // 'vue/no-shared-component-data': 'error',
// // 不允许在computed properties中出现副作用。
// 'vue/no-side-effects-in-computed-properties': 'error',
// // <template>不允许key属性
// 'vue/no-template-key': 'warn',
// // 在 <textarea> 中不允许mustaches
// 'vue/no-textarea-mustache': 'error',
// // 不允许在v-for或者范围内的属性出现未使用的变量定义
// 'vue/no-unused-vars': 'warn',
// // <component>标签需要v-bind:is属性
// 'vue/require-component-is': 'error',
// // render 函数必须有一个返回值
// 'vue/require-render-return': 'error',
// // 保证 v-bind:key 和 v-for 指令成对出现
// 'vue/require-v-for-key': 'error',
// // 检查默认的prop值是否有效
// 'vue/require-valid-default-prop': 'error',
// // 保证computed属性中有return语句 
// 'vue/return-in-computed-property': 'error',
// // 强制校验 template 根节点
// 'vue/valid-template-root': 'error',
// // 强制校验 v-bind 指令
// 'vue/valid-v-bind': 'error',
// // 强制校验 v-cloak 指令
// 'vue/valid-v-cloak': 'error',
// // 强制校验 v-else-if 指令
// 'vue/valid-v-else-if': 'error',
// // 强制校验 v-else 指令 
// 'vue/valid-v-else': 'error',
// // 强制校验 v-for 指令
// 'vue/valid-v-for': 'error',
// // 强制校验 v-html 指令
// 'vue/valid-v-html': 'error',
// // 强制校验 v-if 指令
// 'vue/valid-v-if': 'error',
// // 强制校验 v-model 指令
// 'vue/valid-v-model': 'error',
// // 强制校验 v-on 指令
// 'vue/valid-v-on': 'error',
// // 强制校验 v-once 指令
// 'vue/valid-v-once': 'error',
// // 强制校验 v-pre 指令
// 'vue/valid-v-pre': 'error',
// // 强制校验 v-show 指令
// 'vue/valid-v-show': 'error',
// // 强制校验 v-text 指令
// 'vue/valid-v-text': 'error',
// 'vue/comment-directive': 0
