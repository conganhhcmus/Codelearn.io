def jumpingGame(arr,h,t):
    for i in arr:
        if h>= i: 
            h+=t
        else: return False

    return True
