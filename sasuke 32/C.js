function maxCountPrimeFactor(arr) {
    var max = Math.max(...arr);
    var primes = [];
    for (var i = 0; i <= max; i++) primes[i] = true;
    primes[0] = false;
    primes[1] = false;
    for (var i = 2; i * i <= max; ++i) {
        if (primes[i] == true) {
            // Mark all the multiples of i as composite numbers
            for (var j = i * i; j <= max; j += i) primes[j] = false;
        }
    }
    var res = [];
    for(var i = 0;i<arr.length;i++) res[i]=0;
    for(var i = 2; i<max;i++){
        if(primes[i]){
            //console.log(i);
            for(var j = 0;j<arr.length;j++){
                if(arr[j]%i==0) res[j]++;
            }
        }
    }
    var index = 0;
    for(var i=0;i<res.length;i++) if(res[i]>res[index]) index = i;
    return arr[index];
}