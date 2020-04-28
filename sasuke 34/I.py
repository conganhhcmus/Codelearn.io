import math as mt 
def longest_array(a):
    n = len(a)
    MAX = 100001
    prime = [0 for i in range(MAX + 1)] 
    countdiv = [0 for i in range(MAX + 1)]
    for i in range(2, int(mt.ceil(1+mt.sqrt(MAX + 1)))): 
      
        if (prime[i] == 0): 
            for j in range(i * 2, MAX + 1, i): 
                prime[j] = i 
      
    # Prime number will have same divisor 
    for i in range(1, MAX): 
        if (prime[i] == 0): 
            prime[i] = i 
    ans = 0
    for i in range(n): 
  
        element = a[i] 
  
        # Fetch total unique prime 
        # divisor of element 
        while (element > 1): 
  
            div = prime[element] 
  
            # Increment count[] of Every  
            # unique divisor we get till now 
            countdiv[div] += 1
  
            # Find maximum frequency of divisor 
            ans = max(ans, countdiv[div]) 
  
            while (element % div == 0): 
                element = element // div 
          
    return ans 
#main
# print(longest_array([1, 2, 3, 4, 5, 6]))