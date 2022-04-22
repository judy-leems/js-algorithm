const fs = require("fs");
const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(readFileSyncAddress).toString().trim();
input = input.split("\n");

const [c, testCases] = input[0].split(" ");

function solution(c, testCases) {
  const queue = [];
  const result = [];
  for(let i = 0; i < c; i += 1) queue.push(i + 1)
  
  let count = 1;
  while(queue.length) {
    const shiftItem = queue.shift();
    if(count % testCases === 0) {
      result.push(shiftItem)
    } else {
      queue.push(shiftItem)
    }
    count += 1;
  }
  console.log(`<${result.join(", ")}>`);
}
solution(c, testCases);
