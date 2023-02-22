export function mergeSort(arr: number[]): number[] {
  const mid = arr.length / 2;
  if (arr.length < 2) return arr;
  const left = arr.splice(0, mid);
  return merge(mergeSort(left), mergeSort(arr));
}

function merge(left: number[], right: number[]): number[] {
  let arr: number[] = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift()!);
    } else {
      arr.push(right.shift()!);
    }
  }
  return [...arr, ...left, ...right];
}
