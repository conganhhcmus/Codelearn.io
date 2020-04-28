def compare_virus(s1,s2):
    if len(s1) != len(s2): return False
    digit_a = []
    digit_b = []
    for i in range(len(s1)):
        if s1[i] != s2[i]:
            digit_a.append(s1[i])
            digit_b.append(s2[i])
    
    digit_a.sort()
    digit_b.sort()
    if len(digit_a)>2: return False
    for i in range(len(digit_a)):
        if digit_a[i] != digit_b[i]: return False
    return True
