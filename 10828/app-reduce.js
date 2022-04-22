const fs = require('fs');
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(readFileSyncAddress).toString();
input = input.split('\n');

const [c, ...testCases] = input;

function solution(c, testCases) {
  const stack = [];
  const func = {
    pop: () => stack.pop() || -1,
    size: () => stack.length, 
    empty: () => stack[stack.length - 1] || -1,
    push: (item) => {
      stack.push(item.split(" ")[1]);
      return ' ';
    }
  }
  const result = input.recuce((acc, v) => acc + (func[v] ? `${func[v]()}\n` : func.push(v)), '');
}
solution(c, testCases)