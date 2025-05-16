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
}
