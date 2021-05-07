export function adjacentElementsProduct(inputArray: number[]): number {
  const length = inputArray.length;
  let leftSide =
    inputArray[length - (length - 1)] * inputArray[length - length];
  let rightSide =
    inputArray[inputArray.length - 1] * inputArray[inputArray.length - 2];

  console.log(leftSide);
  console.log(rightSide);

  if (leftSide < rightSide) {
    return rightSide;
  } else {
    return leftSide;
  }
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, , 8, 69, 3, 3]));
