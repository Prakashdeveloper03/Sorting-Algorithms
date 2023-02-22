export function quickSort(
  arr: number[],
  left = 0,
  right = arr.length - 1
): number[] {
  if (left >= right) {
    return arr;
  }
  let pivotIndex = partition(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
  return arr;
}

function partition(arr: number[], left: number, right: number): number {
  let pivotValue = arr[right];
  let partitionIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr: number[], firstIndex: number, secondIndex: number): void {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

export function quickSortCheatMode(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = arr.filter((x) => x < pivot);
  let right = arr.filter((x) => x > pivot);
  return [...quickSortCheatMode(left), pivot, ...quickSortCheatMode(right)];
}
