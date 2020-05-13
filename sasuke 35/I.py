def max_number(a,b):
    a = str(a)
    b = str(b)
    res = ''
    i = 0
    j = 0

    while (i < len(a) and j < len(b)):
        res += max(a[i],b[j])

        if (a[i] > b [j]): i+=1
        elif (a[i] < b[j]): j+=1
        else:
            if (i==len(a)-1) : j+=1
            elif (j == len(b)-1): i+=1
            elif(a[i+1]> b[i+1]): i+=1
            else: j+=1


    res += a[i:]
    res += b[j:]

    return int(res)

# print(max_number(9656, 8967))
# print(max_number(8967,9656))
