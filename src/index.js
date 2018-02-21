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

  var array=matrix;

  for (let i=0; i<9; i++) {
    if (matrix[0][i]==0) {
      if (matrix[0].indexOf(1)==-1 && arr[i].indexOf(1)==-1) {array[0][i]=1;}
      if (matrix[0].indexOf(2)==-1 && arr[i].indexOf(2)==-1) {array[0][i]=2;}
      if (matrix[0].indexOf(3)==-1 && arr[i].indexOf(3)==-1) {array[0][i]=3;}
      if (matrix[0].indexOf(4)==-1 && arr[i].indexOf(4)==-1) {array[0][i]=4;}
      if (matrix[0].indexOf(5)==-1 && arr[i].indexOf(5)==-1) {array[0][i]=5;}
      if (matrix[0].indexOf(6)==-1 && arr[i].indexOf(6)==-1) {array[0][i]=6;}
      if (matrix[0].indexOf(7)==-1 && arr[i].indexOf(7)==-1) {array[0][i]=7;}
      if (matrix[0].indexOf(8)==-1 && arr[i].indexOf(8)==-1) {array[0][i]=8;}
      if (matrix[0].indexOf(9)==-1 && arr[i].indexOf(9)==-1) {array[0][i]=9;}
    }
  }
  return array;
}
