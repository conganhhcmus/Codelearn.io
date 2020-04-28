function countPrimeNumer(a, b) {
    var primes = new Array(b - a + 1);
    for (var i = 0; i < b - a + 1; i++) {
        primes[i] = true;
    }

    for (var i = 2; i * i <= b; i++) {
        for (var j = Math.max(i * i, Math.floor((a + i - 1) / i) * i); j <= b; j += i) {

            primes[j - a] = false;
        }
    }
    if (1 >= a) primes[1 - a] = false;

    var ans = 0;
    for (var i of primes) if (i) ans++;
    return ans;
}