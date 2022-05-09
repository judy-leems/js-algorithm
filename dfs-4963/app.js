const fs = require("fs");
const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const iterator = input[Symbol.iterator]();
const dfs = (w, h, arr, visited, start) => {
  const offsetX = [-1, 0, 1, -1, 1, -1, 0, 1];
  const offsetY = [-1, -1, -1, 0, 0, 1, 1, 1];
  const stack = [start];
  while (stack.length) {
    const node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      const [ x, y ] = [ node%w, Math.floor(node/w) ];
      offsetX.forEach((_, i) => {
        const [ dx, dy ] = [ x + offsetX[i], y + offsetY[i] ];
        const newNode = dx + dy*w;
        if (dx >= 0 && dx < w && dy >= 0 && dy < h && !visited[newNode] && arr[dy][dx]) {
          stack.push(newNode);
        }
      });
    }
  }
};

while (true) {
  const iterResult = iterator.next();
  if (iterResult.value === '0 0') break;
  const [ w, h ] = iterResult.value.split(' ').map(v => +v);
  const arr = [];
  const visited = new Array(w*h).fill(false);
  let count = 0;
  for (let i=0; i<h; i++) {
    arr.push(iterator.next().value.split(' ').map(v => +v));
  }
  for (let i=0; i<w*h; i++) {
    if (!visited[i] && arr[Math.floor(i/w)][i%w]) {
      dfs(w, h, arr, visited, i);
      count++;
    }
  }
  console.log(count);
}