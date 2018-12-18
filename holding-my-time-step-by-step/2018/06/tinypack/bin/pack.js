var fs = require('fs')
var path = require('path')
var chalk = require('chalk')
var tildify = require('tildify')
var ora = require('ora')
var projectPath = process.cwd()
var bundleFile = require('../lib/index')

var configPath = path.join(projectPath, 'tinypack.config.js')

function init() {
  var spinner = ora('正在打包配置文件...')
  spinner.start()

  if (!fs.existsSync(configPath)) {
    spinner.stop()
    console.log(chalk.red('找不到 "tinypack.config.js" 配置文件.'));
  }

  var config = require(configPath)

  const result = bundleFile(config)
  try {
    fs.writeFileSync(path.join(projectPath, config.output), result)
  } catch (e) {
    fs.mkdirSync(path.dirname(config.output))
    fs.writeFileSync(path.join(projectPath, config.output), result)
  }
  spinner.stop()
  console.log(chalk.yellow('已生成对应文件.'));
}

init()