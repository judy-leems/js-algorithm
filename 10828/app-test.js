const fs = require("fs");
const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(readFileSyncAddress).toString().trim();
input = input.split("\n");

const [c, ...testCases] = input;

function solution(c, testCases) {
  const stack = [];
  const result = [];

  for (let i = 0; i < c; i += 1) {
    const testCase = testCases[i].split(" ")[0];
    switch (testCase) {
      case "pop":
        result.push(stack.pop() || -1);
        break;

      case "size":
        result.push(stack.length);
        break;

      case "empty":
        result.push(stack[0] ? 0 : 1);
        break;

      case "top":
        result.push(stack[stack.length - 1] || -1);
        break;

      default:
        stack.push(testCases[i].split(" ")[1]);
        break;
    }
  }
  console.log(result.join("\n"));
}
solution(c, testCases);
