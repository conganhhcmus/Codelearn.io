function shoots(a, x) {
    a.sort((x, y) => x - y);
    // console.log(a);
    var ans = [];
    for (var i = 0; i <= x; i++) {
        ans[i] = Number.MAX_SAFE_INTEGER;
    }
    for (var i = 0; i < a.length; i++) ans[a[i]] = 1;

    for (var i = a[a.length - 1] + 1; i <= x; i++) {
        min = Number.MAX_SAFE_INTEGER;
        for (var j = 0; j < a.length; j++) {
            //console.log(i-a[j]);
            if (ans[i - a[j]] < min) min = ans[i - a[j]];
        }
        //console.log(i,min);
        ans[i] = min + 1;
    }
    //console.log(ans);
    if (ans[x] >= Number.MAX_SAFE_INTEGER) return 0;
    return ans[x];
}
//console.log(shoots([1, 8, 10], 24));
