function staircase(n) {
  var total = n;
  
  for (var i = 1; i <= n; i++) {
    if (total > 0) {
      total -= 1;
    } else {
      total = 0;
    }
    console.log(" ".repeat(total) + "#".repeat(i));
  }
}