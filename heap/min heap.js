class MinHeap {
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
  
      const minValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
  
      return minValue;
    }
  
    heapifyUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        this.heapifyUp(parentIndex);
      }
    }
  
    heapifyDown(index) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let smallestIndex = index;
  
      if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftIndex;
      }
  
      if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightIndex;
      }
  
      if (smallestIndex !== index) {
        [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
        this.heapifyDown(smallestIndex);
      }
    }
  }

  function heapSort(arr) {
    // Create a new instance of MinHeap
    const heap = new MinHeap();
  
    // Build the heap from the input array
    heap.build(arr);
  
    const sortedArray = [];
    while (heap.heap.length > 0) {
      // Remove the minimum value from the heap and add it to the sortedArray
      sortedArray.push(heap.remove());
    }
  
    return sortedArray;
  }
  const heap = new MinHeap();

// Build the heap
const arr = [9, 5, 2, 10, 15, 3];
heap.build(arr);
console.log(heap.heap); // [2, 5, 3, 10, 15, 9]

// Insert an element
heap.insert(1);
console.log(heap.heap); // [1, 5, 2, 10, 15, 9, 3]

// Remove the minimum value
const minValue = heap.remove();
console.log(minValue); // 1
console.log(heap.heap); // [2, 5, 3, 10, 15, 9]
console.log("sorted Array:")
console.log(heapSort([9, 5, 2, 10, 15, 3]));