function aVeryBigSum(ar) {
  var arrSum = 0;
  var arrLeng = ar.length;

  for (var i = 0; i <= arrLeng -1; i++) {
    arrSum += ar[i];
  }
  
  console.log(arrSum);
  return arrSum;
}