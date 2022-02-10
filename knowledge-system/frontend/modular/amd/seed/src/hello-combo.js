// 循环引用类似 commonjs 处理
define('hello5', ['hello4'], function (hello) {
  console.log('hello5', hello);
  return 5;
});
// define('hello6', { foo: 'bar' });
define('hello4', ['hello5'], function (hello) {
  console.log('hello4', hello);
  return 4;
});
// define('hello1', function () {
//   console.log('hello1');
// });
// define('hello2', ['hello5'], function () {
//   console.log('hello2');
// });
// define('hello3', ['hello4'], function () {
//   console.log('hello3');
// });
// define( 'hello', ['hello4'], function(){
//   console.log( 'hello' );      
// });
seed.use('testmod/hello', function () {
  console.log('use hello done');
});