var inquirer = require('inquirer');
var chalk = require('chalk');
var spawn = require('cross-spawn');
var _ = require('lodash');

let configs = [{
    type : 'list',
    name : 'name',
    message : '请选择您需要的配置名称 - ',
    choices: [{
            name: '演示',
            value: 'demo',
        }, {
            name: '温州',
            value: 'wenzhou',
        }, {
            name: '浙一',
            value: 'zheyi',
        }, new inquirer.Separator(), {
            name: '大宁',
            value: 'daning',
        }, {
            name: '134机器',
            value: 'c134',
        },
    ]}
];

inquirer.prompt(configs).then(function (answers) {
    var _index = _.findIndex(configs[0].choices, {
        value: answers.name
    })
    var showName = configs[0].choices[_index].name;
    console.log(chalk.green(`现在正在创建${showName}的配置...`));
    const ls = spawn('node', ['build.js'], {
        env: {
            ...process.env,
            configName: answers.name,
        },
    });
    ls.stdout.on('data', (data) => {
        console.log(data.toString());
    });
    ls.stderr.on('data', (data) => {
        console.log(chalk.red(`创建${showName}的配置失败`));
    });
      
    ls.on('close', (code) => {
        console.log(chalk.green(`创建${showName}的配置成功`));
    }); 
});