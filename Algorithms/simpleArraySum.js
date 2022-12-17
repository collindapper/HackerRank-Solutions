function simpleArraySum(ar) {
  var arraySum = 0;
  var arrayLength = ar.length;
  
  for (var i = 0; i <= arrayLength - 1; i++) {
      arraySum += ar[i];
  };
  
  return arraySum; 
};