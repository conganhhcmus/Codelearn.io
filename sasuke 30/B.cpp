int lcmOfArray(std::vector<int> arr)
{
    const int mod = 1000000007;
    vector <int> prime(100000);
    for(int i=0;i<prime.size();i++){
        prime[i]=0;
    }

    for(int i=0;i<arr.size();i++){
       for(int j=2;j<=arr[i];j++){
           int dem = 0;
           while(arr[i]%j==0) {
               dem++;
               arr[i]/=j;
           }
           if(dem>prime[j]) prime[j]=dem;
       }
    }

    long long res = 1;
    for(int i=0;i<prime.size();i++){
        if(prime[i]!=0){
            for(int j =0;j<prime[i];j++){
                res = (res*i)%mod;
            }
        }
    }
    
    return res;
}