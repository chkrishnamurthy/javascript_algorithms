export function areSimilar(a: number[], b: number[]): boolean {
  let A = a.toString();
  let B = b.toString();

  let c: number[] = [];
  let d: number[] = [];

  if (A == B) {
    return true;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }
  d.reverse();
  if (c.toString() == d.toString()) {
    return true;
  }
  return false;
}

console.log(areSimilar([1, 2, 3], [3, 2, 1]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));
