const Queue = require("./queue");

describe("Queue", () => {
  it("should push item", () => {
    let queue = new Queue();

    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
  });

  it("should delete item", () => {
    let queue = new Queue();

    queue.enqueue(1);
    queue.dequeue();

    expect(queue.isEmpty()).toBe(true);
  });

  it("should check if its empty", () => {
    let queue = new Queue();

    expect(queue.isEmpty()).toBe(true);
  });

  it("should check the size of the queue", () => {
    let queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size()).toBe(3);
  });
});
