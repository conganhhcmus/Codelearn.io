def n_last_char(a,b,n):
    if (a == 1):
        s = b + 1
    else: s = (pow(a,b+1) - 1)//(a-1)
    s %= pow(10,n)
    res = str(s)
    while (len(res)<n):
        res = '0' + res
    return res

# print(n_last_char(1,1,4))