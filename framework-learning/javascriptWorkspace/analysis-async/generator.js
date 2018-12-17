var fetch = require('node-fetch');

// function* gen() {
//     var url = 'https://api.github.com/users/github';
//     var result = yield fetch(url);
//     console.log(result.bio);
// }

// var g = gen();
// // 第一步执行到 fetch 为止，并把结果赋值给 result
// var result = g.next();

// result.value.then(function(data){
//     return data.json();
// }).then(function(data){
//     g.next(data);
// });

/**
 * 上面的代码是最简单的异步任务代码，现在有多个任务是异步
 * 那么我们该怎么做呢
 */
function* gen() {
    var r1 = yield fetch('https://api.github.com/users/github');
    var r2 = yield fetch('https://api.github.com/users/github/followers');
    var r3 = yield fetch('https://api.github.com/users/github/repos');

    console.log([r1.bio, r2[0].login, r3[0].full_name].join('\n'));
}
// var g = gen();
// var result = g.next();
// result.value.then(function(data) {
//     return data.json();
// }).then(function(data) {
//     return g.next(data).value;
// }).then(function(data) => {
//     return data,json()
// }).then(function(data) {
//     return g.next(data).value;
// }).then(function(data) => {
//     return data,json()
// }).then(function(data) {
//     return g.next(data);
// })

/**
 * 上面的代码比较重复，我们可以利用递归的思想
 */
function run(gen) {
    var g = gen();

    function next(data) {
        var result = g.next(data);
        if (result.done) return;
        result.value.then(function(data) {
            return data.json();
        }).then(function(data) {
            next(data)
        })
    }

    next();
}
run(gen);