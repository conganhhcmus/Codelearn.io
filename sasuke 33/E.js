function sumPrimeFactor(n){
    var primes = [];
    var count = 0;
    while(n%2==0){
        count++;
        n=Math.floor(n/2);
    }
    if(count) primes.push(2);
    for(var i =3;i<=Math.sqrt(n);i+=2){
        count = 0;
        while(n%i==0){
            count++;
            n=Math.floor(n/i);
        }
        if(count)primes.push(i);
    }
    if(n>2) primes.push(n);
    var ans = 0;
    for(var i of primes) ans += i;
    return ans;
}