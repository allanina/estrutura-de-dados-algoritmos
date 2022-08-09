function Stack() {
  let stack = [];

  this.push = function (item) {
    stack.push(item);
  };

  this.pop = function () {
    return stack.pop();
  };

  this.peek = function () {
    return stack[stack.length - 1];
  };

  this.isEmpty = function () {
    return stack.length === 0;
  };

  this.clear = function () {
    stack = [];
  };

  //fazer um clear usando um for

  this.size = function () {
    return stack.length;
  };
}

module.exports = Stack;
