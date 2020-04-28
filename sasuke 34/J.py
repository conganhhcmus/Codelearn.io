a = arr = [[False for i in range(100)] for j in range(100)]
ans = 0
sl = 0
block= []

def findLargestRectangle(blockNumber):
    global sl
    global block
    block = blockNumber
    for i in block: sl += i
    for i in range(1,9):
        find(i, 1)
    return ans


def find(r,n):
    global ans
    global a
    # calc result
    if (((n - 1) * 4) % r == 0):
        l = (n - 1) * 4 // r
        check = True
        for i in range(l):
            for j in range(r):
                if (not a[i][j]):
                    check = False
                    break
            if (not check): break
        
        if (check and ans < (n-1)*4):
            ans = (n-1)*4
    # condition end
    if (n > sl): return

    #fill - backtracking
    for i in range(80):
        for j in range(r):
            if (not a[i][j]):
                if (block[0] > 0):
                    if (not a[i + 1][j] and not a[i + 2][j] and not a[i + 3][j]):
                        a[i][j] = True
                        a[i + 1][j] = True
                        a[i + 2][j] = True
                        a[i + 3][j] = True
                        block[0]-=1
                        find(r, n + 1)
                        a[i][j] = False
                        a[i + 1][j] = False
                        a[i + 2][j] = False
                        a[i + 3][j] = False
                        block[0]+=1
            
                    if (j + 3 < r and not a[i][j + 1] and not a[i][j + 2] and not a[i][j + 3]):
                        a[i][j] = True
                        a[i][j + 1] = True
                        a[i][j + 2] = True
                        a[i][j + 3] = True
                        block[0]-=1
                        find(r, n + 1)
                        a[i][j] = False
                        a[i][j + 1] = False
                        a[i][j + 2] = False
                        a[i][j + 3] = False
                        block[0]+=1                      
                if (block[1] > 0):
                    if (j + 1 < r and not a[i][j + 1] and not a[i + 1][j] and not a[i + 1][j + 1]):
                        a[i][j] = True
                        a[i][j + 1] = True
                        a[i + 1][j] = True
                        a[i + 1][j + 1] = True
                        block[1]-=1
                        find(r, n + 1)
                        a[i][j] = False
                        a[i][j + 1] = False
                        a[i + 1][j] = False
                        a[i + 1][j + 1] = False
                        block[1]+=1
                if (block[2] > 0):
                    if (j + 2 < r and not a[i][j + 1] and not a[i][j + 2] and not a[i + 1][j + 2]):
                        a[i][j] = True
                        a[i][j + 1] = True
                        a[i][j + 2] = True
                        a[i + 1][j + 2] = True
                        block[2]-=1
                        find(r, n + 1)
                        a[i][j] = False
                        a[i][j + 1] = False
                        a[i][j + 2] = False
                        a[i + 1][j + 2] = False
                        block[2]+=1

                    if (j + 1 < r and not a[i][j + 1] and not a[i + 1][j] and not a[i + 2][j]):
                        a[i][j] = True
                        a[i][j + 1] = True
                        a[i + 1][j] = True
                        a[i + 2][j] = True
                        block[2]-=1
                        find(r, n + 1)
                        a[i][j] = False
                        a[i][j + 1] = False
                        a[i + 1][j] = False
                        a[i + 2][j] = False
                        block[2]+=1

                    if (j + 2 < r and not a[i + 1][j] and not a[i + 1][j + 1] and not a[i + 1][j + 2]):
                        a[i][j] = True
                        a[i + 1][j] = True
                        a[i + 1][j + 1] = True
                        a[i + 1][j + 2] = True
                        block[2]-=1
                        find(r, n + 1)
                        a[i][j] = False
                        a[i + 1][j] = False
                        a[i + 1][j + 1] = False
                        a[i + 1][j + 2] = False
                        block[2]+=1
                    if (j > 0):
                        if (not a[i + 1][j] and not a[i + 2][j] and not a[i + 2][j - 1]):
                            a[i][j] = True
                            a[i + 1][j] = True
                            a[i + 2][j] = True
                            a[i + 2][j - 1] = True
                            block[2]-=1
                            find(r, n + 1)
                            a[i][j] = False
                            a[i + 1][j] = False
                            a[i + 2][j] = False
                            a[i + 2][j - 1] = False
                            block[2]+=1
                if (block[3] > 0):
                    if (j + 2 < r and not a[i][j + 1] and not a[i + 1][j + 1] and not a[i + 1][j + 2]):
                        a[i][j] = True
                        a[i][j + 1] = True
                        a[i + 1][j + 1] = True
                        a[i + 1][j + 2] = True
                        block[3]-=1
                        find(r, n + 1)
                        a[i][j] = False
                        a[i][j + 1] = False
                        a[i + 1][j + 1] = False
                        a[i + 1][j + 2] = False
                        block[3]+=1
                    if (j > 0):
                        if (not a[i + 1][j] and not a[i + 1][j - 1] and not a[i + 2][j - 1]):
                            a[i][j] = True
                            a[i + 1][j] = True
                            a[i + 1][j - 1] = True
                            a[i + 2][j - 1] = True
                            block[3]-=1
                            find(r, n + 1)
                            a[i][j] = False
                            a[i + 1][j] = False
                            a[i + 1][j - 1] = False
                            a[i + 2][j - 1] = False
                            block[3]+=1
                if (block[4] > 0):
                    if (j + 1 < r and j > 0):
                        if(not a[i][j + 1] and not a[i + 1][j] and not a[i + 1][j - 1]):
                            a[i][j] = True
                            a[i][j + 1] = True
                            a[i + 1][j] = True
                            a[i + 1][j - 1] = True
                            block[4]-=1
                            find(r, n + 1)
                            a[i][j] = False
                            a[i][j + 1] = False
                            a[i + 1][j] = False
                            a[i + 1][j - 1] = False
                            block[4]+=1
                    if (j + 1 < r):
                        if (not a[i + 1][j] and not a[i + 1][j + 1] and not a[i + 2][j + 1]):
                            a[i][j] = True
                            a[i + 1][j] = True
                            a[i + 1][j + 1] = True
                            a[i + 2][j + 1] = True
                            block[4]-=1
                            find(r, n + 1)
                            a[i][j] = False
                            a[i + 1][j] = False
                            a[i + 1][j + 1] = False
                            a[i + 2][j + 1] = False
                            block[4]+=1
                if (block[5] > 0):
                    if (j + 2 < r and not a[i][j + 1] and not a[i][j + 2] and not a[i + 1][j]):
                        a[i][j] = True
                        a[i][j + 1] = True
                        a[i][j + 2] = True
                        a[i + 1][j] = True
                        block[5]-=1
                        find(r, n + 1)
                        a[i][j] = False
                        a[i][j + 1] = False
                        a[i][j + 2] = False
                        a[i + 1][j] = False
                        block[5]+=1
                    if (j + 1 < r and not a[i][j + 1] and not a[i + 1][j + 1] and not a[i + 2][j + 1]):
                        a[i][j] = True
                        a[i][j + 1] = True
                        a[i + 1][j + 1] = True
                        a[i + 2][j + 1] = True
                        block[5]-=1
                        find(r, n + 1)
                        a[i][j] = False
                        a[i][j + 1] = False
                        a[i + 1][j + 1] = False
                        a[i + 2][j + 1] = False
                        block[5]+=1
                    if (j > 1):
                        if(not a[i + 1][j] and not a[i + 1][j - 1] and not a[i + 1][j - 2]):
                            a[i][j] = True
                            a[i + 1][j] = True
                            a[i + 1][j - 1] = True
                            a[i + 1][j - 2] = True
                            block[5]-=1
                            find(r, n + 1)
                            a[i][j] = False
                            a[i + 1][j] = False
                            a[i + 1][j - 1] = False
                            a[i + 1][j - 2] = False
                            block[5]+=1
                    if (j + 1 < r):
                        if (not a[i + 1][j] and not a[i + 2][j] and not a[i + 2][j + 1]):
                            a[i][j] = True
                            a[i + 1][j] = True
                            a[i + 2][j] = True
                            a[i + 2][j + 1] = True
                            block[5]-=1
                            find(r, n + 1)
                            a[i][j] = False
                            a[i + 1][j] = False
                            a[i + 2][j] = False
                            a[i + 2][j + 1] = False
                            block[5]+=1
                if (block[6] > 0):
                    if (j + 2 < r and not a[i][j + 1] and not a[i][j + 2] and not a[i + 1][j + 1]):
                        a[i][j] = True
                        a[i][j + 1] = True
                        a[i][j + 2] = True
                        a[i + 1][j + 1] = True
                        block[6]-=1
                        find(r, n + 1)
                        a[i][j] = False
                        a[i][j + 1] = False
                        a[i][j + 2] = False
                        a[i + 1][j + 1] = False
                        block[6]+=1
                    if (j + 1 < r and not a[i + 1][j] and not a[i + 1][j + 1] and not a[i + 2][j]):
                        a[i][j] = True
                        a[i + 1][j] = True
                        a[i + 1][j + 1] = True
                        a[i + 2][j] = True
                        block[6]-=1
                        find(r, n + 1)
                        a[i][j] = False
                        a[i + 1][j] = False
                        a[i + 1][j + 1] = False
                        a[i + 2][j] = False
                        block[6]+=1
                    if (j > 0):
                        if (not a[i + 1][j] and not a[i + 1][j - 1] and not a[i + 2][j]):
                            a[i][j] = True
                            a[i + 1][j] = True
                            a[i + 1][j - 1] = True
                            a[i + 2][j] = True
                            block[6]-=1
                            find(r, n + 1)
                            a[i][j] = False
                            a[i + 1][j] = False
                            a[i + 1][j - 1] = False
                            a[i + 2][j] = False
                            block[6]+=1
                    if (j + 1 < r and j > 0):
                        if(not a[i + 1][j] and not a[i + 1][j + 1] and not a[i + 1][j - 1]):
                            a[i][j] = True
                            a[i + 1][j] = True
                            a[i + 1][j - 1] = True
                            a[i + 1][j + 1] = True
                            block[6]-=1
                            find(r, n + 1)
                            a[i][j] = False
                            a[i + 1][j] = False
                            a[i + 1][j - 1] = False
                            a[i + 1][j + 1] = False
                            block[6]+=1
                return

print(findLargestRectangle([0,0,1,1,0,1,0]))
