int gcd(int a,int b) {
    if (a==0) return b;
    return gcd(b%a,a);
}
int firstBigger(int a, int b)
{
    return a +((b-a)/gcd(a,b)+1) * gcd(a,b);
}
