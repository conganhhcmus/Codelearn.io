function countNumbersBeautiful(a, b) {
    if (a > b) return 0;
    var ans = 0;
    var count = 0;
    var tmp_a = a;
    var tmp_b = b;
    while (a > 0) {
        count++;
        a = Math.floor(a / 10);
    }
    var x = 1;
    var digits_x = count;
    while (count > 1) {
        x = x * 10 + 1;
        count--;
    }
    count = 0;
    while (b > 0) {
        count++;
        b = Math.floor(b / 10);
    }
    var digits_y = count;
    var y = 1;
    while (count > 1) {
        y = y * 10 + 1;
        count--;
    }
    ans = Math.abs(digits_y - digits_x) * 9 + Math.floor((tmp_b) / y) - Math.floor((tmp_a + x - 1) / x) + 1;
    return ans;
}

//  console.log(countNumbersBeautiful(12, 12))
