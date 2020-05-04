function calc(a, b) {
    var x = a[0] - b[0];
    var y = a[1] - b[1];
    return x * x + y * y;
}

function compare(a, b) {
    return a - b;
}

function isRhombusNotSquare(points) {
    for (var j = 0; j < points.length; j++) {
        var tmp = points[j];

        for (var i = 0; i < points.length; i++) {
            if (tmp[0] == points[i][0] && tmp[1] == points[i][1] && i!=j) return false;
        }
    }

    var arr = [];
    for (var i = 0; i < points.length; i++) {
        for (var j = i + 1; j < points.length; j++) {
            arr.push(calc(points[i], points[j]));
        }
    }
    arr.sort(compare);
    // console.log(arr);
    var count = 1;
    var max = 0;
    for (var i = 0; i + 1 < arr.length; i++) {
        if (arr[i] != arr[i + 1]) {
            count = 1;
        } else {
            count++;
            if (count > max) max = count;
        }
    }
    if (max < 4) return false;
    if (arr[4] == arr[5]) return false;

    return true;
}

// console.log(
//     isRhombusNotSquare([
//         [0, 0],
//         [0, 0],
//         [5, 12],
//         [18, 12],
//     ])
// );
