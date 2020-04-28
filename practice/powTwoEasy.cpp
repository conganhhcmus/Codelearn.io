int powTwoEasy(int n)
{
    int res =0;
    while (n/2>0){
        n=n/2;
        res+=n;
    }
    return res;
}
