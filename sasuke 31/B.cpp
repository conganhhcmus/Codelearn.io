int gcd (int a,int b) {
    if(a==0)return b;
    return gcd(b%a,a);
}
bool primeTogether(int a, int b)
{
    if(gcd(a,b)==1) return true;
    return false;
}
