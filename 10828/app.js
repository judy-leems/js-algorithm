const fs = require('fs');
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(readFileSyncAddress).toString().trim();
input = input.split('\n');

const [c, ...testCases] = input;

function solution(c, testCases) {
  const stack = [];
  let answer = [];
  

  for (let i = 0; i < c; i += 1) {
    const testCase = testCases[i].split(' ')[0];
    
    switch(testCase) {
      case 'push':
        stack.push(testCases[i].split(" ")[1]);
        break;
      case 'pop':
        answer.push(stack.pop() || -1);
        break;
      case 'top':
        answer.push(stack[stack.length - 1] || -1);
        break;
      case 'empty':
        answer.push(stack[0] ? 0 : 1);
        break;
      case 'size':
        answer.push(stack.length);
        break;
      default:
        break;      
    }
    console.log(answer.join('\n'))
  }
}
solution(c, testCases)