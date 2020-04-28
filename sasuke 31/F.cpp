long long pow2(long long a, long long b){
    long long ans = 1;
    for(long long i = 0;i<b;i++) ans*=a;
    return ans;
}
long long beautifulNumberCt(long long arg1)
{
    long long ans =0;
    long long count =0;
    long long tmp = arg1;
    while(arg1>2) {
        count++;
        arg1/=3;
    }
    for(long long i=count;i>=0;i--) {
        ans += pow2(3,i);
        if(ans > tmp) ans -= pow2(3,i);
    }
    return ans;
}