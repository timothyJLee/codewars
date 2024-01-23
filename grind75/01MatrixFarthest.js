/*
542. 01 Matrix
Given an m x n binary matrix mat, return the distance of the farthest 0 for each cell.
The distance between two adjacent cells is 1.

Example 1:
Input: mat = [[0,0,0],[0,1,0],[0,0,0]]

Example 2:
Input: mat = [[0,0,0],[0,1,0],[1,1,1]]

Constraints:
m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
There is at least one 0 in mat.
*/

const updateMatrix = function (mat) {
  let zeroes = [];
  let ones = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] == 0) {
        zeroes.push([i, j]);
        ones.forEach((one) => {
          mat[one[0]][one[1]] = Math.max(
            mat[one[0]][one[1]],
            dist(one, [i, j])
          );
        });
      } else {
        ones.push([i, j]);
         // mat[i][j] = Infinity;
        zeroes.forEach((zero) => {
          mat[i][j] = Math.max(
            mat[i][j],
            dist([i, j], zero)
          );
        });
      }
    }
  }
  return mat;
};

function dist(cell1, cell2){
    return Math.abs(cell2[0] - cell1[0]) + Math.abs(cell2[1] - cell1[1]);
}

updateMatrix([
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
]);