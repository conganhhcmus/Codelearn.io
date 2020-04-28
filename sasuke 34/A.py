def sum_aB(a, b):
    if a > b:
        return 0
    ans = 0
    start = min(abs(a), abs(b))
    end = max(abs(a), abs(b))
    ans = (end+start)*(end+1-start)/2

    if a*b < 0: ans -=min(abs(a),abs(b))
    if end == abs(a): ans = a/abs(a)*ans
    else: ans = b/abs(b)*ans
    return ans


print(sum_aB(-2, 4))
