function maxArea(a) {
    var max = 0;

    for (var i = 0; i < a.length; i++) {
        for (var j = i; j < a.length; j++) {
            var tmp = (j - i + 1) * Math.min(...a.slice(i, j+1));
            if (tmp > max) max = tmp;
        }
    }
    return max;
}