class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    build(arr) {
      this.heap = arr;
      for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        this.heapifyDown(i);
      }
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    remove() {
      if (this.heap.length === 0) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const maxValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
  
      return maxValue;
    }
  
    heapifyUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (index > 0 && this.heap[index] > this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        this.heapifyUp(parentIndex);
      }
    }
  
    heapifyDown(index) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let largestIndex = index;
  
      if (leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[largestIndex]) {
        largestIndex = leftIndex;
      }
  
      if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[largestIndex]) {
        largestIndex = rightIndex;
      }
  
      if (largestIndex !== index) {
        [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
        this.heapifyDown(largestIndex);
      }
    }
  }
  function heapSort(arr) {
    // Create a new instance of MinHeap
    const heap = new MaxHeap();
  
    // Build the heap from the input array
    heap.build(arr);
  
    const sortedArray = [];
    while (heap.heap.length > 0) {
      // Remove the minimum value from the heap and add it to the sortedArray
      sortedArray.push(heap.remove());
    }
  
    return sortedArray;
  }
  
  const heap = new MaxHeap();
  
  // Build the heap
  const arr = [9, 5, 2, 10, 15, 3];
  heap.build(arr);
  console.log(heap.heap); // [15, 10, 3, 9, 5, 2]
  
  // Insert an element
  heap.insert(12);
  console.log(heap.heap); // [15, 12, 3, 9, 5, 2, 10]
  
  // Remove the maximum value
  const maxValue = heap.remove();
  console.log(maxValue); // 15
  console.log(heap.heap); // [12, 10, 3, 9, 5, 2]
  console.log('sorted Array:')
  console.log(heapSort([9, 5, 2, 10, 15, 3]));