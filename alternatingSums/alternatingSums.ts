export function alternatingSums(a: number[]): number[] {
  let evenSum = 0;
  let oddSum = 0;

  a.map((x, index) => {
    if (index % 2 == 0) {
      evenSum += x;
    } else {
      oddSum += x;
    }
  });

  return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
