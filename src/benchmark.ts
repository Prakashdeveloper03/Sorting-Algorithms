import { bubbleSort } from "./bubble";
import { quickSort } from "./quick";
import { selectionSort } from "./selection";
import { insertionSort } from "./insertion";
import { mergeSort } from "./merge";
import { heapSort } from "./heap";
import { radixSort } from "./radix";
import { cocktailShakerSort } from "./cocktail";
import { shellSort } from "./shell";
import { gnomeSort } from "./gnome";
import { tsSort } from "./tssort";

import Chance from "chance";
const chance = new Chance();

function isSorted(arr: number[]): boolean {
  let sorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      sorted = false;
      break;
    }
  }
  return sorted;
}

function runIt(algo: (arr: number[]) => number[]): void {
  const cp = [...testData];
  const start = performance.now();
  const result = algo(cp);
  results.push({ name: algo.name, time: performance.now() - start });
  !isSorted(result) && console.log(algo.name, "sorting failed!");
  result.length !== testData.length &&
    console.log(algo.name, "length mismatch!");
}

const testData = chance.n(chance.hammertime, 10000);
const results: { name: string; time: number }[] = [];

runIt(selectionSort);
runIt(bubbleSort);
runIt(quickSort);
runIt(insertionSort);
runIt(mergeSort);
runIt(heapSort);
runIt(cocktailShakerSort);
runIt(shellSort);
runIt(gnomeSort);
runIt(radixSort);
runIt(tsSort);

console.table(results.sort((a, b) => a.time - b.time));
