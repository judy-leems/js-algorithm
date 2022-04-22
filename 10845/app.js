const fs = require("fs");
const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(readFileSyncAddress).toString().trim();
input = input.split("\n");

const [c, ...testCases] = input;

function solution(c, testCases) {
  const queue = [];
  const result = [];

  for (let i = 0; i < c; i += 1) {
    const testCase = testCases[i].split(" ")[0];
    switch (testCase) {
      case "pop":
        result.push(queue.length === 0 ? -1 : queue.shift());
        break;

      case "size":
        result.push(queue.length);
        break;

      case "empty":
        result.push(queue.length === 0 ? 1 : 0);
        break;

      case "front":
        result.push(queue[0] ? queue[0] : -1);
        break;

      case "back":
        result.push(queue[queue.length - 1] ? queue[queue.length - 1] : -1);
        break;

      default:
        queue.push(testCases[i].split(" ")[1]);
        break;
    }
  }
  console.log(result.join("\n"));
}
solution(c, testCases);
