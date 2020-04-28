function minNumberInString(arg1) {
    var ans = "";
    var res = Number.MAX_SAFE_INTEGER;
    var check = false;
    for (var i = 0; i < arg1.length; i++) {
        if (arg1[i] >= "0" && arg1[i] <= "9") {
            check = true;
            break;
        }
    }
    if (!check) return -1;
    for (var i = 0; i < arg1.length; i++) {
        if (arg1[i] === "-") {
            if (Number.parseInt(ans) < res) res = Number.parseInt(ans);
            ans = "";
            ans += arg1[i];
        } else if (arg1[i] >= "0" && arg1[i] <= "9") {
            ans += arg1[i];
        } else {
            if (Number.parseInt(ans) < res) res = Number.parseInt(ans);
            ans = "";
        }
    }
    if (Number.parseInt(ans) < res) res = Number.parseInt(ans);
    return res;
}
