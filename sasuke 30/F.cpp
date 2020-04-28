int gcd(int a, int b) 
{ 
    if (a == 0) 
        return b; 
    return gcd(b % a, a); 
} 

std::vector<int> powerOfBrain(std::vector<int> a)
{
    vector<int> ans;
    ans.push_back(1);
    ans.push_back(a[1]);
    for(int i=2;i<a.size();i++){
         ans[1] = gcd(a[i], ans[1]); 
    }

    for(int i=1;i<a.size();i++){
        int tmp=a[0];
        for(int j=0;j<a.size();j++){
            if(i==j) continue;
            tmp = gcd(a[j], tmp); 
        }
        if(tmp>ans[1]){
            ans[0]=i+1;
            ans[1]=tmp;
        }
    }
    return ans;
}
