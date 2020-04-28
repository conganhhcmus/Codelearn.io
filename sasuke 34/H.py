def sum_special_number(n, k):
    d = 10**9+7
    sum = (n**(k-1)-1)//(n-1)
    ans = sum * 2**(k-2)
    return ans % d