/*
542. 01 Matrix
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
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
  // Dynamic Programming 2 pass solution
  // first pass calcs dist based on cells to left and up, second pass in reverse right and down
  // set to smallest dist

  for(let i = 0; i < mat.length; i++){
    for(let j = 0; j < mat[0].length; j++){
        if(mat[i][j] !== 0){
            if(i > 0) mat[i][j] = mat[i-1][j] +1; else mat[i][j] = Infinity;
            if(j > 0) mat[i][j] = Math.min(mat[i][j], mat[i][j-1] + 1);
        }
    }
  }

  for(let i = mat.length - 1; i >= 0; i--){
    for(let j = mat[0].length - 1; j >= 0; j--){
        if (mat[i][j] !== 0) {
          if (i < mat.length - 1) mat[i][j] = Math.min(mat[i][j], mat[i + 1][j] + 1);
          if (j < mat[0].length - 1) mat[i][j] = Math.min(mat[i][j], mat[i][j + 1] + 1);
        }
    }
  }

  return mat;
};