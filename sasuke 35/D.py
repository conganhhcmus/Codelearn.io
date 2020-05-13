def gcd(a,b):
    if(a==0): return b
    return gcd(b%a,a)

def cut_cake(a,b,c):
    return gcd(gcd(a,b),c)