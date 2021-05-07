export function absoluteValuesSumMinimization(a: number[]): number {
  const isEven = a.length % 2 === 0;

  //   console.log(a[a.length / 2 - 1] );

  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 0, 99, 6]));
console.log(absoluteValuesSumMinimization([2805, 4, 115, 9, 6, 8, 52, 63]));
