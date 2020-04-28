function bingoGame(a, b) {
    var ans = -1;
    for (var i of b) {
        for (var j = 0; j < a.length; j++) {
            for (var k = 0; k < a.length; k++) {
                if (a[j][k] === i) a[j][k] = 0;

            }
        }
        // check winlose
        //check duong cheo
        var cheo_chinh = 0;
        var cheo_phu = 0;
        for (var k = 0; k < a.length; k++) {
            cheo_chinh += a[k][k];
            cheo_phu += a[k][4 - k];
        }
        if (cheo_chinh == 0 || cheo_phu == 0) ans = i;

        // check row and col
        for (var j = 0; j < a.length; j++) {
            var row = 0;
            var col = 0;
            for (var k = 0; k < a.length; k++) {
                row += a[j][k];
                col += a[k][j];
            }
            //console.log("Long: ", row, col);
            if (row == 0 || col == 0) ans = i;
            if (ans !== -1) return b.findIndex((x) => x === ans);
        }
    }
    return ans;
}