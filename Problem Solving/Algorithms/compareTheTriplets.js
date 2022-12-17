function compareTriplets(a, b) {
  var aliceScore = 0;
  var bobScore = 0;
  var finalScores = [];

  for (var i = 0; i <= a.length - 1; i++) {
      if (a[i] > b[i]) {
          aliceScore += 1;
      } else if (a[i] < b[i]) {
          bobScore += 1;
      } else {
          aliceScore;
          bobScore;
      };
  };
  
  finalScores.push(aliceScore);
  finalScores.push(bobScore);
  
  return finalScores;
};