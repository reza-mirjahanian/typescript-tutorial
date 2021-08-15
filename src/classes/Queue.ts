class Queue < T > {
  private storage: T[] = []
  pop() {
    return this.storage.pop();
  }
  push(item: T) {
    this.storage.push(item);
  }
}
