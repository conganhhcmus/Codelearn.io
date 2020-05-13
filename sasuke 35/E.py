def convert_number_max(n):
    s = str(n)
    max_ = '0'
    for i in s:
        if (i > max_): max_ = i
    res = ''
    check = True
    for i in s:
        if (i != max_ and check): 
            res+=max_
            check = False
        else: res+=i

    return int(res)
# print(convert_number_max(5123));