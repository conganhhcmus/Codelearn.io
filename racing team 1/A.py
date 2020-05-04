def gcd(a,b):
    if a==0:
        return b
    return gcd(b%a,a)

def primeTogether(a,b):
    if gcd(a,b) == 1:
        return True
    return False
