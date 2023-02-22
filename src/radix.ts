export function radixSort(arr: number[]): number[] {
  let maxDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, getNumberOfDigits(arr[i]));
  }

  for (let i = 0; i < maxDigits; i++) {
    let buckets: number[][] = new Array(10).fill(null).map(() => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = ([] as number[]).concat(...buckets);
  }

  return arr;
}

function getDigit(num: number, place: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function getNumberOfDigits(num: number): number {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
