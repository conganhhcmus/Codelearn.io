def min_max(n):
    arr = list(str(n))
    arr.sort()
    h = arr[:]
    arr.sort(reverse=True)
    k = arr[:]
    return int(''.join(k))-int(''.join(h))

print(min_max(342))