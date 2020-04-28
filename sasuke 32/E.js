function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (a === 0) return b;
    return gcd(b % a, a);
}
function gcdArray(arr) {
    var res = arr[0];
    for(var i = 1;i<arr.length;i++){
        res = gcd(res,arr[i]);
    }
    return res;
}