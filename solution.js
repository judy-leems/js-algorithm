const fs = require('fs');
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(readFileSyncAddress).toString();
input = input.split('\n');

const [c, ...testCases] = input;

function solution(c, testCases) {

}
solution(c, testCases)