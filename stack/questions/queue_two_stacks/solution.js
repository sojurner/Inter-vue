class TwoStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        const newItem = this.inStack.pop();
        this.outStack.push(newItem);
      }
    }

    if (this.outStack.length === 0) {
      throw new Error('cant dequeue from empty queue');
    }

    return this.outStack.pop();
  }
}
