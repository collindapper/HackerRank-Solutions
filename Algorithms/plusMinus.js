function plusMinus(arr) {
  var positiveInt = 0;
  var negativeInt = 0;
  var zeroInt = 0;
  var arrLen = arr.length;
  
  for (var i = 0; i <= arrLen - 1; i++) {
    if (arr[i] > 0) {
      positiveInt += 1;
    } else if (arr[i] < 0) {
      negativeInt += 1;
    } else {
      zeroInt += 1;
    }
  }
  
  console.log(parseFloat(positiveInt/arrLen).toFixed(6));
  console.log(parseFloat(negativeInt/arrLen).toFixed(6));
  console.log(parseFloat(zeroInt/arrLen).toFixed(6));
  
  return parseFloat(positiveInt/arrLen).toFixed(6);
  return parseFloat(negativeInt/arrLen).toFixed(6);
  return parseFloat(zeroInt/arrLen).toFixed(6);
}