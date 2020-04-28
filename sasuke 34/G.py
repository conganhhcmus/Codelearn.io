def gcd(a,b):
    if a == 0: return b
    return gcd(b%a,a)

def lcd(arr):
    ans = arr[0]
    for i in arr:
        ans = (ans*i)/gcd(ans,i)
    return ans

def check_sum_divisible(n):
    arr = []
    sum = 0
    for i in n: arr.append(int(i))
    for i in arr: sum+=i
    # print(sum,lcd(arr))
    if sum % lcd(arr) == 0: return True
    return False
    

# print(check_sum_divisible('12'))