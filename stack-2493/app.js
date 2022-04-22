const fs = require('fs');
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(readFileSyncAddress).toString().trim();
input = input.split('\n');

const c = Number(input[0]);
const testCases = input[1].split(' ').map(Number);

function solution(c, testCases) {
  const stack = [];
  let result = '';

  for (let i = 0; i < testCases.length; i++) {
    const height = testCases[i];
    while (stack.length) {
      const top = stack.pop();
      if (height < top.height) {
        result += top.idx + ' ';
        stack.push(top);
        break;
      }
    }
    if (stack.length === 0) {
      result += '0 ';
    }
    stack.push({ height, idx: i + 1 });
  }
  return result.trim();
  
}
console.log(solution(c, testCases))