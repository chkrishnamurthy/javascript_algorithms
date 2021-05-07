export function alphabeticShift(inputString: string): string {
  let letters: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // Scenario 1 :
  // let alphabets: object = {
  //   a: "b",
  //   b: "c",
  //   c: "d",
  //   d: "e",
  //   e: "f",
  //   f: "g",
  //   g: "h",
  //   h: "i",
  //   i: "j",
  //   j: "k",
  //   k: "l",
  //   l: "m",
  //   m: "n",
  //   n: "o",
  //   o: "p",
  //   p: "q",
  //   q: "r",
  //   r: "s",
  //   s: "t",
  //   t: "u",
  //   u: "v",
  //   v: "w",
  //   w: "x",
  //   x: "y",
  //   y: "z",
  //   z: "a",
  // };

  // let inputs = inputString.split("");
  // console.log(inputs);
  // for (let i = 0; i < inputs.length; i++) {
  //   inputs[i] = alphabets[inputs[i]];
  // }
  // return inputs.join("");

  // Scenario 1 : END

  ////////////////////////////////////////////////////////////////////////////

  // Scenario 2 :

  // let letterss = "abcdefghijklmnopqrstuvwxyz";

  let inputs = inputString.split("");
  for (let i = 0; i < inputs.length; i++) {
    let index = 0;
    if (inputs[i] !== "z") {
      index = letters.indexOf(inputs[i]) + 1;
    }

    inputs[i] = letters[index];
  }
  return inputs.join("");
}

console.log(alphabeticShift("crazy"));
