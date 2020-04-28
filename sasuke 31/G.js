function gcd (a,b){
    if (a==0)return b;
    return gcd(b%a,a);
}
function sumDivOfAandB(n,a,b){
    var mod = 1000000007;
    var x = Math.floor(n/a);
    var y = Math.floor(n/b);
    var z = Math.floor(n/(a*b/gcd(a,b)));
    var ans =  (x*(x+1)/2)*a +(y*(y+1)/2)*b - z*(z+1)/2*(a*b/gcd(a,b));
    return ans % mod;
}