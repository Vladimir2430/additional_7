module.exports = function solveSudoku(matrix) {
  var arr1=[], arr2=[], arr3=[], arr4=[], arr5=[], arr6=[], arr7=[], arr8=[], arr9=[];
  var arr=[arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9];
  var array=matrix;
  var box1=[], box2=[], box3=[], box4=[], box5=[], box6=[], box7=[], box8=[], box9=[];

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

    box1.length=0;
    box2.length=0;
    box3.length=0;
    box4.length=0;
    box5.length=0;
    box6.length=0;
    box7.length=0;
    box8.length=0;
    box9.length=0;

    for (let b=0; b<3; b++) {
      box1.push(array[b][0]);
      box1.push(array[b][1]);
      box1.push(array[b][2]);
      box2.push(array[b][3]);
      box2.push(array[b][4]);
      box2.push(array[b][5]);
      box3.push(array[b][6]);
      box3.push(array[b][7]);
      box3.push(array[b][8]);
      box4.push(array[b+3][0]);
      box4.push(array[b+3][1]);
      box4.push(array[b+3][2]);
      box5.push(array[b+3][3]);
      box5.push(array[b+3][4]);
      box5.push(array[b+3][5]);
      box6.push(array[b+3][6]);
      box6.push(array[b+3][7]);
      box6.push(array[b+3][8]);
      box7.push(array[b+6][0]);
      box7.push(array[b+6][1]);
      box7.push(array[b+6][2]);
      box8.push(array[b+6][3]);
      box8.push(array[b+6][4]);
      box8.push(array[b+6][5]);
      box9.push(array[b+6][6]);
      box9.push(array[b+6][7]);
      box9.push(array[b+6][8]);
    }

    for (let i=0; i<9; i++) {
      if (array[k][i]==0) {
        if (k<3 && i<3) {
          if (array[k].indexOf(1)==-1 && arr[i].indexOf(1)==-1 && box1.indexOf(1)==-1) {array[k][i]=1;}
          if (array[k].indexOf(2)==-1 && arr[i].indexOf(2)==-1 && box1.indexOf(2)==-1) {array[k][i]=2;}
          if (array[k].indexOf(3)==-1 && arr[i].indexOf(3)==-1 && box1.indexOf(3)==-1) {array[k][i]=3;}
          if (array[k].indexOf(4)==-1 && arr[i].indexOf(4)==-1 && box1.indexOf(4)==-1) {array[k][i]=4;}
          if (array[k].indexOf(5)==-1 && arr[i].indexOf(5)==-1 && box1.indexOf(5)==-1) {array[k][i]=5;}
          if (array[k].indexOf(6)==-1 && arr[i].indexOf(6)==-1 && box1.indexOf(6)==-1) {array[k][i]=6;}
          if (array[k].indexOf(7)==-1 && arr[i].indexOf(7)==-1 && box1.indexOf(7)==-1) {array[k][i]=7;}
          if (array[k].indexOf(8)==-1 && arr[i].indexOf(8)==-1 && box1.indexOf(8)==-1) {array[k][i]=8;}
          if (array[k].indexOf(9)==-1 && arr[i].indexOf(9)==-1 && box1.indexOf(9)==-1) {array[k][i]=9;}
        } else if (k<3 && (i==3 || i==4 || i==5)) {
          if (array[k].indexOf(1)==-1 && arr[i].indexOf(1)==-1 && box2.indexOf(1)==-1) {array[k][i]=1;}
          if (array[k].indexOf(2)==-1 && arr[i].indexOf(2)==-1 && box2.indexOf(2)==-1) {array[k][i]=2;}
          if (array[k].indexOf(3)==-1 && arr[i].indexOf(3)==-1 && box2.indexOf(3)==-1) {array[k][i]=3;}
          if (array[k].indexOf(4)==-1 && arr[i].indexOf(4)==-1 && box2.indexOf(4)==-1) {array[k][i]=4;}
          if (array[k].indexOf(5)==-1 && arr[i].indexOf(5)==-1 && box2.indexOf(5)==-1) {array[k][i]=5;}
          if (array[k].indexOf(6)==-1 && arr[i].indexOf(6)==-1 && box2.indexOf(6)==-1) {array[k][i]=6;}
          if (array[k].indexOf(7)==-1 && arr[i].indexOf(7)==-1 && box2.indexOf(7)==-1) {array[k][i]=7;}
          if (array[k].indexOf(8)==-1 && arr[i].indexOf(8)==-1 && box2.indexOf(8)==-1) {array[k][i]=8;}
          if (array[k].indexOf(9)==-1 && arr[i].indexOf(9)==-1 && box2.indexOf(9)==-1) {array[k][i]=9;}
        } else if (k<3 && i>5) {
          if (array[k].indexOf(1)==-1 && arr[i].indexOf(1)==-1 && box3.indexOf(1)==-1) {array[k][i]=1;}
          if (array[k].indexOf(2)==-1 && arr[i].indexOf(2)==-1 && box3.indexOf(2)==-1) {array[k][i]=2;}
          if (array[k].indexOf(3)==-1 && arr[i].indexOf(3)==-1 && box3.indexOf(3)==-1) {array[k][i]=3;}
          if (array[k].indexOf(4)==-1 && arr[i].indexOf(4)==-1 && box3.indexOf(4)==-1) {array[k][i]=4;}
          if (array[k].indexOf(5)==-1 && arr[i].indexOf(5)==-1 && box3.indexOf(5)==-1) {array[k][i]=5;}
          if (array[k].indexOf(6)==-1 && arr[i].indexOf(6)==-1 && box3.indexOf(6)==-1) {array[k][i]=6;}
          if (array[k].indexOf(7)==-1 && arr[i].indexOf(7)==-1 && box3.indexOf(7)==-1) {array[k][i]=7;}
          if (array[k].indexOf(8)==-1 && arr[i].indexOf(8)==-1 && box3.indexOf(8)==-1) {array[k][i]=8;}
          if (array[k].indexOf(9)==-1 && arr[i].indexOf(9)==-1 && box3.indexOf(9)==-1) {array[k][i]=9;}
        } else if ((k==3 || k==4 || k==5) && i<3) {
          if (array[k].indexOf(1)==-1 && arr[i].indexOf(1)==-1 && box4.indexOf(1)==-1) {array[k][i]=1;}
          if (array[k].indexOf(2)==-1 && arr[i].indexOf(2)==-1 && box4.indexOf(2)==-1) {array[k][i]=2;}
          if (array[k].indexOf(3)==-1 && arr[i].indexOf(3)==-1 && box4.indexOf(3)==-1) {array[k][i]=3;}
          if (array[k].indexOf(4)==-1 && arr[i].indexOf(4)==-1 && box4.indexOf(4)==-1) {array[k][i]=4;}
          if (array[k].indexOf(5)==-1 && arr[i].indexOf(5)==-1 && box4.indexOf(5)==-1) {array[k][i]=5;}
          if (array[k].indexOf(6)==-1 && arr[i].indexOf(6)==-1 && box4.indexOf(6)==-1) {array[k][i]=6;}
          if (array[k].indexOf(7)==-1 && arr[i].indexOf(7)==-1 && box4.indexOf(7)==-1) {array[k][i]=7;}
          if (array[k].indexOf(8)==-1 && arr[i].indexOf(8)==-1 && box4.indexOf(8)==-1) {array[k][i]=8;}
          if (array[k].indexOf(9)==-1 && arr[i].indexOf(9)==-1 && box4.indexOf(9)==-1) {array[k][i]=9;}
        } else if ((k==3 || k==4 || k==5) && (i==3 || i==4 || i==5)) {
          if (array[k].indexOf(1)==-1 && arr[i].indexOf(1)==-1 && box5.indexOf(1)==-1) {array[k][i]=1;}
          if (array[k].indexOf(2)==-1 && arr[i].indexOf(2)==-1 && box5.indexOf(2)==-1) {array[k][i]=2;}
          if (array[k].indexOf(3)==-1 && arr[i].indexOf(3)==-1 && box5.indexOf(3)==-1) {array[k][i]=3;}
          if (array[k].indexOf(4)==-1 && arr[i].indexOf(4)==-1 && box5.indexOf(4)==-1) {array[k][i]=4;}
          if (array[k].indexOf(5)==-1 && arr[i].indexOf(5)==-1 && box5.indexOf(5)==-1) {array[k][i]=5;}
          if (array[k].indexOf(6)==-1 && arr[i].indexOf(6)==-1 && box5.indexOf(6)==-1) {array[k][i]=6;}
          if (array[k].indexOf(7)==-1 && arr[i].indexOf(7)==-1 && box5.indexOf(7)==-1) {array[k][i]=7;}
          if (array[k].indexOf(8)==-1 && arr[i].indexOf(8)==-1 && box5.indexOf(8)==-1) {array[k][i]=8;}
          if (array[k].indexOf(9)==-1 && arr[i].indexOf(9)==-1 && box5.indexOf(9)==-1) {array[k][i]=9;}
        } else if ((k==3 || k==4 || k==5) && i>5) {
          if (array[k].indexOf(1)==-1 && arr[i].indexOf(1)==-1 && box6.indexOf(1)==-1) {array[k][i]=1;}
          if (array[k].indexOf(2)==-1 && arr[i].indexOf(2)==-1 && box6.indexOf(2)==-1) {array[k][i]=2;}
          if (array[k].indexOf(3)==-1 && arr[i].indexOf(3)==-1 && box6.indexOf(3)==-1) {array[k][i]=3;}
          if (array[k].indexOf(4)==-1 && arr[i].indexOf(4)==-1 && box6.indexOf(4)==-1) {array[k][i]=4;}
          if (array[k].indexOf(5)==-1 && arr[i].indexOf(5)==-1 && box6.indexOf(5)==-1) {array[k][i]=5;}
          if (array[k].indexOf(6)==-1 && arr[i].indexOf(6)==-1 && box6.indexOf(6)==-1) {array[k][i]=6;}
          if (array[k].indexOf(7)==-1 && arr[i].indexOf(7)==-1 && box6.indexOf(7)==-1) {array[k][i]=7;}
          if (array[k].indexOf(8)==-1 && arr[i].indexOf(8)==-1 && box6.indexOf(8)==-1) {array[k][i]=8;}
          if (array[k].indexOf(9)==-1 && arr[i].indexOf(9)==-1 && box6.indexOf(9)==-1) {array[k][i]=9;}
        } else if (k>5 && i<3) {
          if (array[k].indexOf(1)==-1 && arr[i].indexOf(1)==-1 && box7.indexOf(1)==-1) {array[k][i]=1;}
          if (array[k].indexOf(2)==-1 && arr[i].indexOf(2)==-1 && box7.indexOf(2)==-1) {array[k][i]=2;}
          if (array[k].indexOf(3)==-1 && arr[i].indexOf(3)==-1 && box7.indexOf(3)==-1) {array[k][i]=3;}
          if (array[k].indexOf(4)==-1 && arr[i].indexOf(4)==-1 && box7.indexOf(4)==-1) {array[k][i]=4;}
          if (array[k].indexOf(5)==-1 && arr[i].indexOf(5)==-1 && box7.indexOf(5)==-1) {array[k][i]=5;}
          if (array[k].indexOf(6)==-1 && arr[i].indexOf(6)==-1 && box7.indexOf(6)==-1) {array[k][i]=6;}
          if (array[k].indexOf(7)==-1 && arr[i].indexOf(7)==-1 && box7.indexOf(7)==-1) {array[k][i]=7;}
          if (array[k].indexOf(8)==-1 && arr[i].indexOf(8)==-1 && box7.indexOf(8)==-1) {array[k][i]=8;}
          if (array[k].indexOf(9)==-1 && arr[i].indexOf(9)==-1 && box7.indexOf(9)==-1) {array[k][i]=9;}
        } else if (k>5 && (i==3 || i==4 || i==5)) {
          if (array[k].indexOf(1)==-1 && arr[i].indexOf(1)==-1 && box8.indexOf(1)==-1) {array[k][i]=1;}
          if (array[k].indexOf(2)==-1 && arr[i].indexOf(2)==-1 && box8.indexOf(2)==-1) {array[k][i]=2;}
          if (array[k].indexOf(3)==-1 && arr[i].indexOf(3)==-1 && box8.indexOf(3)==-1) {array[k][i]=3;}
          if (array[k].indexOf(4)==-1 && arr[i].indexOf(4)==-1 && box8.indexOf(4)==-1) {array[k][i]=4;}
          if (array[k].indexOf(5)==-1 && arr[i].indexOf(5)==-1 && box8.indexOf(5)==-1) {array[k][i]=5;}
          if (array[k].indexOf(6)==-1 && arr[i].indexOf(6)==-1 && box8.indexOf(6)==-1) {array[k][i]=6;}
          if (array[k].indexOf(7)==-1 && arr[i].indexOf(7)==-1 && box8.indexOf(7)==-1) {array[k][i]=7;}
          if (array[k].indexOf(8)==-1 && arr[i].indexOf(8)==-1 && box8.indexOf(8)==-1) {array[k][i]=8;}
          if (array[k].indexOf(9)==-1 && arr[i].indexOf(9)==-1 && box8.indexOf(9)==-1) {array[k][i]=9;}
        } else if (k>5 && i>5) {
          if (array[k].indexOf(1)==-1 && arr[i].indexOf(1)==-1 && box9.indexOf(1)==-1) {array[k][i]=1;}
          if (array[k].indexOf(2)==-1 && arr[i].indexOf(2)==-1 && box9.indexOf(2)==-1) {array[k][i]=2;}
          if (array[k].indexOf(3)==-1 && arr[i].indexOf(3)==-1 && box9.indexOf(3)==-1) {array[k][i]=3;}
          if (array[k].indexOf(4)==-1 && arr[i].indexOf(4)==-1 && box9.indexOf(4)==-1) {array[k][i]=4;}
          if (array[k].indexOf(5)==-1 && arr[i].indexOf(5)==-1 && box9.indexOf(5)==-1) {array[k][i]=5;}
          if (array[k].indexOf(6)==-1 && arr[i].indexOf(6)==-1 && box9.indexOf(6)==-1) {array[k][i]=6;}
          if (array[k].indexOf(7)==-1 && arr[i].indexOf(7)==-1 && box9.indexOf(7)==-1) {array[k][i]=7;}
          if (array[k].indexOf(8)==-1 && arr[i].indexOf(8)==-1 && box9.indexOf(8)==-1) {array[k][i]=8;}
          if (array[k].indexOf(9)==-1 && arr[i].indexOf(9)==-1 && box9.indexOf(9)==-1) {array[k][i]=9;}
        } 
      }
    }
  }
  return array;
}
