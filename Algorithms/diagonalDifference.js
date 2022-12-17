function diagonalDifference(arr) {
  var reversedArr = [];
  var diagonalOne = 0;
  var diagonalTwo = 0;
  var absDiff = 0;
  
  for (var i = 0; i <= arr.length - 1; i++) {
     diagonalOne += arr[i][i];
     reversedArr.push(arr[i].reverse());
  };
  
  for (var j = 0; j <= reversedArr.length - 1; j++) {
    diagonalTwo += reversedArr[j][j];
  };
  
  absDiff = Math.abs(diagonalOne - diagonalTwo);
  
  console.log(diagonalOne);
  console.log(diagonalTwo);
  console.log(absDiff);
  
  return absDiff;
}