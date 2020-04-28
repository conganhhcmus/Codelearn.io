function countArray(n) {
    var d = Math.floor((n - 1) / 2); //công sai tối đa có thể có
    return n * d - d * (d + 1);
  }
  