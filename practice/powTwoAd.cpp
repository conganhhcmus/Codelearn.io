long long powTwo(long long n)
{
    long long res =0;
    while (n>1){
        res+=n/2;
        n=n/2;
    }
    return res;
}
