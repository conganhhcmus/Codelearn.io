function lastNumber(n) {
    n = n%10;
    var ans = [n];
    var i = 2;
    while (Math.pow(n, i) % 10 !== n) {
      ans.push(Math.pow(n, i) % 10);
      i++;
    }
    return ans.sort();
  }