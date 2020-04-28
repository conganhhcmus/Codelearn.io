#include <iostream>

using namespace std;

int countWaySum(int n, int a, int b)
{ 
    const int mod = 1000000007;
    int max = a>b?a:b;
    int min = a>b?b:a;
    int *arr = new int[n+1];
    for (int i = 0;i<n+1;i++){
        arr[i] = 0;
    }
    for(int i = 0;i < min;i++) { arr[i]=0;}

    if(max % min != 0){
        arr[min] = 1;
        arr[max] = 1;
        for(int i=min+1;i<max;i++){
            arr[i] = arr[i-min];
        }
    } else {
        arr[min]=1;
        arr[max]=2;
        for(int i=min+1;i<max;i++)
        {
            if(i%min==0) arr[i]=1;
        }
    }
    
    for(int i=max+1;i<n+1;i++){
        arr[i]=(arr[i-max]%mod + arr[i-min]%mod)%mod;
    }
    return arr[n];
}

