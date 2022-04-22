// 4344 기준으로 작성 
const fs = require('fs');
const readFileSyncAddress = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(readFileSyncAddress).toString();
input = input.split('\n');

const inputC = +input[0]; 
const inputTestCase = [];

for (let i = 1; i <= inputC; ++i) {
  const arr = input[i].split(' ').map((item) => +item);
  const newArr = [];
  for (let i = 1; i <= arr[0]; ++i) {
    newArr.push(arr[i])
  }
  const testCase = {
    N: arr[0],
    arr: newArr
  }
  inputTestCase.push(testCase)
  console.log(testCase)
}


function solution(C, testCate) {
  console.log('C : ', C);
  console.log('testCate : ', testCate);
}
solution(inputC, inputTestCase)