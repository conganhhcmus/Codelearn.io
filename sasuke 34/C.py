def factorial(n):
    if n<=1: return 1
    return n*factorial(n-1)

def count_permutation(s):
    digits = list(dict.fromkeys(s))
    count = []
    for i in digits:
        count.append(s.count(i))
    #print(digits,count)
    n = len(s)
    ans = 1
    for i in count:
        ans *= factorial(n)/(factorial(i)*factorial(n-i))
        n -= i

    return ans
    
# print(count_permutation('AAB'))