export function heapSort(arr: number[]): number[] {
  let len = arr.length;
  let end = len - 1;
  heapify(arr, len);
  while (end > 0) {
    swap(arr, end--, 0);
    siftDown(arr, 0, end);
  }
  return arr;
}

function heapify(arr: number[], len: number) {
  let mid = Math.floor((len - 2) / 2);
  while (mid >= 0) {
    siftDown(arr, mid--, len - 1);
  }
}

function siftDown(arr: number[], start: number, end: number) {
  let root = start,
    child: number,
    toSwap: number;
  while (root * 2 + 1 <= end) {
    child = root * 2 + 1;
    toSwap = root;
    if (arr[toSwap] < arr[child]) {
      toSwap = child;
    }
    if (child + 1 <= end && arr[toSwap] < arr[child + 1]) {
      toSwap = child + 1;
    }
    if (toSwap === root) {
      return;
    } else {
      swap(arr, root, toSwap);
      root = toSwap;
    }
  }
}

function swap(arr: number[], i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
