long long powNumber(long long n, long long b)
{
    if(n==1) return 0;    
    long long ans = 0;
    //to do something
    vector< pair <long long,long long> > prime; 
    vector< pair <long long,long long> > factorial; 
    long long tmp = b;
    long long count = 0;
    //primes
    while (!(tmp % 2)) { 
        tmp >>= 1; // equivalent to n=n/2; 
        count++; 
    } 
    if(count){
        prime.push_back(make_pair(2,count));
        
    }
    for(long long i=3;i<=sqrt(b);i+=2){
        count=0;
        while(tmp%i==0){
            count++;
            tmp/=i;
        }
        if(count){
            prime.push_back(make_pair(i,count));
        }
    }
    if(tmp >2 ) prime.push_back(make_pair(tmp,1));
    for(auto i : prime){
        tmp=n;
        ans = 0;
        while(tmp){
            tmp/=i.first;
            ans+=tmp;
        }
        factorial.push_back(make_pair(i.first,ans/i.second));
    }
    
    ans = factorial[0].second;
    for(auto i: factorial){
        if(i.second<ans) ans=i.second;
    }
    return ans;
}