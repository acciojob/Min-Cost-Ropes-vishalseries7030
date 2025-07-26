function mincost(arr) {
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    insert(val) {
      this.heap.push(val);
      this._heapifyUp();
    }

    extractMin() {
      if (this.heap.length === 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this._heapifyDown();
      return min;
    }

    size() {
      return this.heap.length;
    }

    _heapifyUp() {
      let index = this.heap.length - 1;
      const current = this.heap[index];
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex] <= current) break;
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      }
      this.heap[index] = current;
    }

    _heapifyDown() {
      let index = 0;
      const length = this.heap.length;
      const current = this.heap[0];
      while (true) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;

        if (left < length && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }
        if (right < length && this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }

        if (smallest === index) break;

        this.heap[index] = this.heap[smallest];
        index = smallest;
      }
      this.heap[index] = current;
    }
  }

  const heap = new MinHeap();
  arr.forEach(val => heap.insert(val));

  let totalCost = 0;

  while (heap.size() > 1) {
    let first = heap.extractMin();
    let second = heap.extractMin();
    let cost = first + second;
    totalCost += cost;
    heap.insert(cost);
  }

  return totalCost;
}

module.exports = mincost;
