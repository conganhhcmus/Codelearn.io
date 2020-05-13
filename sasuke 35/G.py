def giftsForYoung(name,money,say):
    arr = name.split(',')
    s = 0
    for i in arr:
        tmp = 0
        for j in range(len(i)):
            tmp += ord(i[j])
        s+=tmp
    # print(s)
    if (say == 'trust') :
        if (money == s): return "Free"
        elif (money > s) : return "Pay"
        else : return "Can not buy"
    else :
        if (money > s) : return "Free"
        elif (money == s): return "Can not buy"
        else:  return "Police"
    

# print(giftsForYoung("Vinh,Hoa,Khanh,Thu,Oanh,Duong,Duong,Nguyet,Quynh", 0, "lie"))