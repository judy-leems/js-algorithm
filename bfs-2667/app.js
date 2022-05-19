const fs = require("fs");
const readFileSyncAddress =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
const N = input.shift();
const arr = input.map((item) => item.split('').map(Number))

function bfs(x, y) {
    const queue = [[x,y]];
    const visited = {};
    visited[[x,y]] = true;
    visitedCoords[[x,y]] = true;
    let dx = [0, 0, 1, -1];
    let dy = [-1, 1, 0, 0];
    let cnt = 1;

    while(queue.length) {
        for(let i=0; i<queue.length; i++) {
            let X = queue.shift();
            for(let j = 0; j < 4; j++) {
                let nx = X[0] + dx[j];
                let ny = X[1] + dy[j];
                if(( nx >= 0 &&
                    ny >= 0 &&
                    nx < arr.length &&
                    ny < arr.length ) &&
                    (arr[nx][ny] === 1) &&
                    (!visited[[nx,ny]])
                    )
                {   
                    visited[[nx,ny]] = true;
                    visitedCoords[[nx,ny]] = true;
                    cnt++;
                    queue.push([nx,ny]);
                }
            }
        }
    }
    return cnt;
}

const visitedCoords = {};
const answer = [];
for(let i=0; i<N; i++) {
    for(let j=0; j<N; j++) {
        if(arr[i][j] === 1 && !visitedCoords[[i,j]]) answer.push(bfs(i,j));
    }
}

console.log(answer.length);
answer.sort((a,b) => a-b)
answer.forEach((item) => console.log(item));