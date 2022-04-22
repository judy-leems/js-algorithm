const fs = require('fs');
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(readFileSyncAddress).toString().trim();
input = input.split('\n');

const [c, ...testCases] = input;

function solution(c, testCases) {
  const stack = [];
  let top = 0;
  let answer = '';
  

  for (let i = 0; i < c; i += 1) {
    const testCase = testCases[i].split(' ')[0];
    let result = '';
    switch(testCase) {
      case 'push':
        const pushItem = testCases[i].split(' ')[1];
        stack[top++] = pushItem;
        break;
      case 'pop':
        if(top) {
          top -= 1;
          result = stack.splice(-1);
          answer += result + ' ';
        } else {
          result = -1;
          answer += result + ' ';
        }
        break;
      case 'top':
        result = top ? stack[top - 1] : -1;
        answer += result + ' ';
        break;
      case 'empty':
        result = top ? 0 : 1;
        answer += result + ' ';
        break;
      case 'size':
        result = top;
        answer += result + ' ';
        break;
      default:
        break;      
    }
  }
  //console.log(answer.split(' ').join('\n'))
}
solution(c, testCases)