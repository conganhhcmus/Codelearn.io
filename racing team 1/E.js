function isTrueNumber(str){
    var res = false;
    var tmp = '';
    if (str[0]=='-') tmp += str.slice(1);
    else tmp += str;

    for (var i = 0;i<tmp.length;i++){
        if (tmp[i] > '9' || tmp <'0') return false;
    }
    var arr = tmp.split('.');
    if (arr.length == 2) {
        if(arr[1][arr[1].length-1] != '0') res = true;
        if (arr[0].length >= 2 && arr[0][0] == '0' || arr[0].length <=0 || arr[1].length <= 0) res = false;
    }
    else if (arr.length == 1){
        if (arr[0].length >= 2 && arr[0][0] != '0' || arr[0].length == 1) res = true;
    }
    return res;
}