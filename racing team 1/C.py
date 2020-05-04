def factorial(n):
    if n == 0 : return 1
    return n*factorial(n-1)
def makeFlags(k,n):
    if k > n : 
        return 0
    ans = factorial(n)//(factorial(n-k)*factorial(k))
    return ans