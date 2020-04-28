function maxWire(n, pn) {
    var result = 1;
    var f = [];
    for (var i = 0; i < n; i++) f[i] = 1;
    for (var i = 1; i <= n; i++) {
        f[i] = 1;
        for (var j = 0; j < i; j++)
            if (pn[j] < pn[i]) {
                f[i] = Math.max(f[i], f[j] + 1);
            }
        result = Math.max(result, f[i]);
    }
    return result;
}