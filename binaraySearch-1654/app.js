const fs = require("fs");
const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(readFileSyncAddress).toString().trim();
input = input.split("\n");

const [K, N] = 
      input
        .shift()
        .split(" ")
        .map((v) => Number(v))

let sortedInput = 
    input
      .map((v) => Number(v))
      .sort((a, b) => a - b); 


let min = 1;
let max = Math.max(...sortedInput)

while(min <= max) {
  let mid = Math.floor((min + max) / 2);
  let pieces = 
      sortedInput
        .map((line) => parseInt(line / mid))
        .reduce((a, b) => a + b, 0);

  if(pieces >= N) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max)

