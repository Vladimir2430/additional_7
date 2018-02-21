function solveSudoku(matrix) {
  var arr1=[], arr2=[], arr3=[], arr4=[], arr5=[], arr6=[], arr7=[], arr8=[], arr9=[];
  var arr=[arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];
  var array=matrix;

  for (let k=0; k<9; k++) {
    arr1.length=0;
    arr2.length=0;
    arr3.length=0;
    arr4.length=0;
    arr5.length=0;
    arr6.length=0;
    arr7.length=0;
    arr8.length=0;
    arr9.length=0;

    for (let j=0; j<9; j++) {
      arr1.push(array[j][0]);
      arr2.push(array[j][1]);
      arr3.push(array[j][2]);
      arr4.push(array[j][3]);
      arr5.push(array[j][4]);
      arr6.push(array[j][5]);
      arr7.push(array[j][6]);
      arr8.push(array[j][7]);
      arr9.push(array[j][8]);
    }

    for (let i=0; i<9; i++) {
      if (array[k][i]==0) {
        if (array[k].indexOf(1)==-1 && arr[i].indexOf(1)==-1) {array[k][i]=1;}
        if (array[k].indexOf(2)==-1 && arr[i].indexOf(2)==-1) {array[k][i]=2;}
        if (array[k].indexOf(3)==-1 && arr[i].indexOf(3)==-1) {array[k][i]=3;}
        if (array[k].indexOf(4)==-1 && arr[i].indexOf(4)==-1) {array[k][i]=4;}
        if (array[k].indexOf(5)==-1 && arr[i].indexOf(5)==-1) {array[k][i]=5;}
        if (array[k].indexOf(6)==-1 && arr[i].indexOf(6)==-1) {array[k][i]=6;}
        if (array[k].indexOf(7)==-1 && arr[i].indexOf(7)==-1) {array[k][i]=7;}
        if (array[k].indexOf(8)==-1 && arr[i].indexOf(8)==-1) {array[k][i]=8;}
        if (array[k].indexOf(9)==-1 && arr[i].indexOf(9)==-1) {array[k][i]=9;}
      }
    }
  }
  return array;
}
