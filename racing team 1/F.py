def balanceNumber(n):
    n = abs(n);
    tmp = n
    tmp2 = 0
    while(n>0):
        tmp2 = tmp2*10 + n%10
        n//=10
    return tmp==tmp2