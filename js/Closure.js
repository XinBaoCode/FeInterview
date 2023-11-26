/**1.实现块级作用域 */
function foo() {
  const result = [];
  for (var i = 0; i < 10; i++) {
    result[i] = function () {
      console.log(i);
    };
  }
  return result;
}
const result = foo();
result[0](); // 10
result[1](); // 10

function fooWithClourse() {
  const result = [];
  for (var i = 0; i < 10; i++) {
    (function (i) {
      result[i] = function () {
        console.log(i);
      };
    })(i);
  }
  return result;
}
var resultWithClourse = fooWithClourse();
resultWithClourse[0](); // 0
resultWithClourse[1](); // 1

/**2.实现函数的柯里化 */
function add(x) {
  return function (y) {
    return x + y;
  };
}

/**3.模块模式.
 * 这里我们调用了 create 函数创建了一个模块实例，实例中含有对内部函数的引用，
 * 这样保证了内部数据变量是隐藏和私有状态，而返回值则可以看做是模块暴露出的 API*/
function create() {
  const name = "snail",
    hobby = ["eat", "sleep", "codeing"];
  function say() {
    console.log("my name is " + name + ".");
  }
  function showHobby() {
    console.log(name + " like " + hobby.join(",") + "!");
  }
  return {
    say,
    showHobby,
  };
}

const instance = create();
instance.say(); // my name is snail.
instance.showHobby(); // snail like eat,sleep,codeing!
