用于管理多个包的 JavaScript 项目的工具，优化我们开发的工作流

使用 independent 模式进行开发在进行发布的时候，往往会往 `github` 提交很多冗余 的 `tag`

解决办法是
* 使用 `lerna publish --no-push` 禁止自动提交 `tag`
* 手动部署 `tag`