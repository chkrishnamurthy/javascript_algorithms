export function allLongestStrings(inputArray: string[]): string[] {
  const { length } = inputArray;
  let wordsArray = [];

  for (let i = 0; i <= length; i++) {
    for (let j = i; j <= length; j++) {}
  }

  let longestLength = 0;
  inputArray.forEach((word) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  inputArray.forEach((word) => {
    if (word.length == longestLength) {
      wordsArray.push(word);
    }
  });

  console.log(wordsArray);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
