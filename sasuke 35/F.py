from functools import cmp_to_key

def compare(a,b):
    a = str(a)
    b = str(b)
    return int(b+a) - int(a+b)

def max_add_string(arr,k):
    arr.sort(reverse = True)
    res = []
    for i in range(k):
        res.append(arr[i])

    res.sort(key = cmp_to_key(compare))
    ans = ''
    for i in res:
        ans += str(i) 
    return str(int(ans))

# print(max_add_string([0, 0, 0, 0], 3))
