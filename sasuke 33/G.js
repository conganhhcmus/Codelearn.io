function countArithmeticProgression(n, m) {
    var d = Math.floor((n - 1) / (m - 1)); // cong sai toi da
    return n*d - (m-1)*d*(d+1)/2;
}