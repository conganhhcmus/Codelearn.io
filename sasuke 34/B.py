def min_number_array(a):
    arr = []
    for i in a:
        if i >= 0: arr.append(i)
    arr.sort()
    arr = list(dict.fromkeys(arr))
    ans = 0
    for i in arr:
        if i != ans: return ans
        ans += 1

    return ans

# print(min_number_array([0,1,2,3,4,5]))