function Queue() {
  let queue = [];

  this.enqueue = function (item) {
    queue.push(item);
  };

  this.dequeue = function () {
    return queue.shift();
  };

  this.isEmpty = function () {
    return queue.length === 0;
  };

  this.size = function () {
    return queue.length;
  };
}

module.exports = Queue;
