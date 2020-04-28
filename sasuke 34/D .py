def count_way_group(n):
    mod = 10**9+7
    if n < 6: return 0
    ans = n*(n-1)*(n-2)//6 - n*(n-3)
    return ans % mod
