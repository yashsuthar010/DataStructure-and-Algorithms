// very similar to a binary search tree, but with some different rules!
// In a MaxBinaryHeap, parent node are always larger than child nodes
// In a MinBinaryHeap, parent nodes are always smaller than child nodes
// Binary heaps are used to implement priority queues, which are very
// commonly used data structure
// could be used with Graph Traversal algorithm
// 2n + 1 for L child
// 2n + 2 for R child
// finding parent of child => (n-1)/2

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      // console.log(parentIdx);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;

      // sinkDown
      this.sinkDown();
    }
    console.log(max);
    return max;
  }
  sinkDown() {
    let idx = 0;
    let element = this.values[0];
    let length = this.values.length;
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(59);
heap.extractMax();
heap.extractMax();
console.log(heap);
