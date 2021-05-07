export function addTwoDigits(n: any): any {
  let nums = n.toString().split("");
  const y = nums.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b);
  });
  return y;
}

console.log(addTwoDigits(7396678358));
