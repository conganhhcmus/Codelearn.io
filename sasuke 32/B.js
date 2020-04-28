function lego(a, b, n) {
    var y = 0;
    var max = Math.max(a, b);
    var min = Math.min(a, b);
    var check = false;
    while (min * y <= n) {
        if ((n - min * y) % max == 0) {
            check = true;
            break;
        }
        //console.log(y)
        y++;
    }
    if (check) return Math.floor((n - min * y) / max) + y;
    return -1;
}