const Stack = require("./stack");

describe("Stack", () => {
  let stack;

  //tentar com before all e ver tudo quebrando :D
  //fazer pop de uma stack vazia
  //exceção no jest (pesquisar)

  beforeEach(() => {
    stack = new Stack();
  });

  it("should push item", () => {
    stack.push(1);

    expect(stack.isEmpty()).toBeFalsy();
  });

  it("should pop item", () => {
    stack.push(1);
    stack.pop();

    expect(stack.isEmpty()).toBeTruthy();
  });

  it("should peek stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
  });

  //refatorar
  it("should check if stack is empty", () => {
    stack.push(1);

    expect(stack.isEmpty()).toBeFalsy();
  });

  it("should clear the stack", () => {
    stack.push(1);

    stack.clear();

    expect(stack.isEmpty()).toBeTruthy();
  });

  it("should return the size of the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size()).toBe(3);
  });
});
