export default {
  // 忽略某些提交信息，提交信息包含了 init，则不进行检查
  ignores: [(commit) => commit.includes('init')],
  // 集成了其他的规则集
  extends: ['@commitlint/config-conventional'],
  // 指定输出格式化器
  formatter: '@commitlint/format',
  /***
   * 规则配置
   * 0：禁用规则 1：警告 2：错误
   * always：某项规则必须满足，不满足则会触发错误或警告
   * never：某些规则不能被满足，满足则会触发错误或警告
   */
  rules: {
    // 正文以空行开头
    'body-leading-blank': [2, 'always'],
    // 页脚以空行开头
    'footer-leading-blank': [1, 'always'],
    // 标头字符最大长度
    'header-max-length': [2, 'always', 108],
    // 主题不能为空
    'subject-empty': [2, 'never'],
    // 类型不能为空
    'type-empty': [2, 'never'],
    // 忽略提交信息主体的大小写
    'subject-case': [0],
    // 允许提交的类型
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能
        'fix', // 修复 bug
        'perf', // 性能优化
        'style', // 代码格式
        'docs', // 文档变更
        'test', // 添加或修改测试
        'refactor', // 代码重构
        'build', // 构建流程、外部依赖变更 (如升级 npm 包、修改打包配置等)
        'ci', // 修改 CI 配置、脚本
        'chore', // 对构建过程或辅助工具和库的更改 (不影响源文件、测试用例)
        'revert', // 回滚 commit
        'wip', // 正在开发中
        'workflow', // 工作流程变更
        'types', // 类型定义文件修改
      ],
    ],
  },
  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?',
    },
    types: [
      { value: 'feat', name: 'feat:     ✨  新增功能', emoji: ':sparkles:' },
      { value: 'fix', name: 'fix:      🐛  修复bug', emoji: ':bug:' },
      { value: 'docs', name: 'docs:     📝  文档变更', emoji: ':memo:' },
      { value: 'style', name: 'style:    💄  代码格式', emoji: ':lipstick:' },
      {
        value: 'refactor',
        name: 'refactor: ♻️   代码重构',
        emoji: ':recycle:',
      },
      { value: 'perf', name: 'perf:     ⚡️  性能提升', emoji: ':zap:' },
      {
        value: 'test',
        name: 'test:     ✅  测试相关',
        emoji: ':white_check_mark:',
      },
      {
        value: 'build',
        name: 'build:    📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）',
        emoji: ':package:',
      },
      {
        value: 'ci',
        name: 'ci:       🎡  修改 CI 配置、脚本',
        emoji: ':ferris_wheel:',
      },
      {
        value: 'chore',
        name: 'chore:    🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
        emoji: ':hammer:',
      },
      { value: 'revert', name: 'revert:   ⏪️  回退代码', emoji: ':rewind:' },
      {
        value: 'wip',
        name: 'wip:      🚧  正在开发中',
        emoji: ':construction:',
      },
      {
        value: 'workflow',
        name: 'workflow: 👷  工作流程改进',
        emoji: ':construction_worker:',
      },
      {
        value: 'types',
        name: 'types:    🏷️   类型定义文件修改',
        emoji: ':label:',
      },
    ],
    useEmoji: true,
  },
}
