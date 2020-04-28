def charge_phone(s1, s2, k):
    t1 = s1.split(':')
    t2 = s2.split(':')

    hour = int(t2[0])-int(t1[0])
    minute = int(t2[1])-int(t1[1])
    second = int(t2[2])-int(t1[2])

    if second >= 0:
        second = 0
    else:
        second = -1
    
    ans = (hour*60 + minute + second)//k
    if ans > 100: ans = 100

    return ans
