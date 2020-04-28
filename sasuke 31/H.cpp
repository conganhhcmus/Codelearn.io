#include <bits/stdc++.h>
using namespace std;
long long grasshopper2(int n, std::vector<int> a)
{
    if(n==0) return 0;
    if(a.empty()) return 0;
    long long *arr = new long long[n + 1];
    for (int i = 0; i < n + 1; i++)
        arr[i] = 0;
    sort(a.begin(), a.end());

    for (int j = 1; a[0] * j <= a[1]; j++)
    {
        arr[a[0] * j] += 1;
    }
    arr[a[1]]++;
    arr[0]=1;
    
    for (int i = a[1] + 1; i < n + 1; i++)
    {
        for (int j = 0; j < a.size(); j++)
        {
            if(i - a[j] >= 0) arr[i] += arr[i - a[j]];
        }
    }
    return arr[n];
}