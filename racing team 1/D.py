def candlesBurning(x,pn,p):
    t1 = 0
    t2 = 0
    tmp = 0
    tmp_n = pn
    while (pn > 0):
        t1+=1
        t2+=pn
        tmp_n = pn + tmp_n
        pn = (pn+tmp)//p
        tmp = tmp_n % p

    # print(t2,t1)
    return (t2-t1)*x

# print(candlesBurning(1,8,3))