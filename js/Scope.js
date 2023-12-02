var a = 0;
var b = 0;
var c = 0;
function fn(a) {
  console.log(a++, c);
  function fn2(b) {
    console.log(a, b, c);
  }
  var c = 4;
  fn = fn2;
}
fn(1);
fn(2);

/**
 * Answer is below:
 * 1 undefined
 * 2 2 4
 * 
 * Reasion is below:
 * 1.作用域是编译时确定的(函数赋值会包括自身作用域链)，this指向时运行时确定的
 * 2.var声明的变量不具有暂时性死区，会有变量提升
 */
