function stairs(a) {
    var ans = 1;
    var tmp = a;
    for (var i = 0; i < a.length; i++) {
        var j = i;
        var count = 0;
        while (tmp[j] >= (count + 1) && j < a.length) {
            count++;
            //console.log(count);
            j++;
        }
        if (count > ans) ans = count;
    }
    return ans;
}