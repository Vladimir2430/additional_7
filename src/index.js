module.exports = function solveSudoku(matrix) {
  var arr1=[], arr2=[], arr3=[], arr4=[], arr5=[], arr6=[], arr7=[], arr8=[], arr9=[];
  for (let j=0; j<9; j++) {
    arr1.push(matrix[j][0]);
    arr2.push(matrix[j][1]);
    arr3.push(matrix[j][2]);
    arr4.push(matrix[j][3]);
    arr5.push(matrix[j][4]);
    arr6.push(matrix[j][5]);
    arr7.push(matrix[j][6]);
    arr8.push(matrix[j][7]);
    arr9.push(matrix[j][8]);
  }
  var arr=[arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];

  for (let i=0; i<9; ++i) {
    for (let k=0; k<9;k++) {
      if (matrix[0][i]==0) {
        if (matrix[k].indexOf(1)==-1 && arr[i].indexOf(1)==-1) {martix[k][i]=1;}
        if (matrix[k].indexOf(2)==-1 && arr[i].indexOf(2)==-1) {martix[k][i]=2;}
        if (matrix[k].indexOf(3)==-1 && arr[i].indexOf(3)==-1) {martix[k][i]=3;}
        if (matrix[k].indexOf(4)==-1 && arr[i].indexOf(4)==-1) {martix[k][i]=4;}
        if (matrix[k].indexOf(5)==-1 && arr[i].indexOf(5)==-1) {martix[k][i]=5;}
        if (matrix[k].indexOf(6)==-1 && arr[i].indexOf(6)==-1) {martix[k][i]=6;}
        if (matrix[k].indexOf(7)==-1 && arr[i].indexOf(7)==-1) {martix[k][i]=7;}
        if (matrix[k].indexOf(8)==-1 && arr[i].indexOf(8)==-1) {martix[k][i]=8;}
        if (matrix[k].indexOf(9)==-1 && arr[i].indexOf(9)==-1) {martix[k][i]=9;}
      }
    }
  }
  return matrix;
}
