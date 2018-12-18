// esprima 把源码转化为抽象语法树

let esprima = require('esprima');
let jsOrigin = 'function eat() {};'; // 定义一个js源码

let AST = esprima.parse(jsOrigin); // 通过esprima.parse将js源码转化为一个抽象语法树
	
console.log(AST); // 打印生成的抽象语法树
// Script {
//   type: 'Program',
//   body:
//    [ FunctionDeclaration {
//        type: 'FunctionDeclaration',
//        id: [Object],
//        params: [],
//        body: [Object],
//        generator: false,
//        expression: false,
//        async: false },
//      EmptyStatement { type: 'EmptyStatement' } ],
//   sourceType: 'script' }

let estraverse = require('estraverse');
	

estraverse.traverse(AST, {
    enter(node){
        console.log('enter', node.type)
        if(node.type === 'Identifier') {
            node.name += '_enter'
        }
    },
    leave(node){
        console.log('leave', node.type)
        if(node.type === 'Identifier') {
            node.name += '_leave'
        }
    }
});

let escodegen = require('escodegen');
	
let originReback = escodegen.generate(AST);
console.log(originReback);