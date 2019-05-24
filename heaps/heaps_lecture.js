// Complete Tree:
// 1. Tree where all levels are full with nodes, except the bottom level
// 2. The bottom level has children filled to the left as much as possible
// Sift-up operation
// Heap deletion (deleteMax)

class MaxHeap {
  constructor(){
    this.array = [null];
  }

  insert(val){
    this.array.push(val);
    this.siftUp(this.array.length-1);
  }

  siftUp(idx) {
    if (idx === 1) return;

    let parentIdx = Math.floor(idx/2);
    if (this.array[idx] > this.array[parentIdx]) {
      [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
      this.siftUp(parentIdx);
    }
  }

  deleteMax(){
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);

    return max;
  }

  siftDown(idx){
    let leftIdx = idx * 2;
    let rightIdx = idx * 2 + 1;
    let arr = this.array;
    let leftVal = arr[leftIdx];
    let rightVal = arr[rightIdx];
    let val = arr[idx];

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;

    if(val > leftVal && val > rightVal) return;

    let swapIdx;
    if (leftVal > rightVal) {
      swapIdx = leftIdx;
    } else {
      swapIdx = rightIdx;
    }
    [arr[swapIdx], arr[idx]] = [arr[idx], arr[swapIdx]];
    this.siftDown(swapIdx);
  }
}