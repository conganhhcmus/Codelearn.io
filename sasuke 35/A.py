def number_palindrome(n):
    re_n = 0
    tmp = n
    while (tmp>0):
        re_n = re_n*10 + tmp%10;
        tmp//=10
    return n == re_n