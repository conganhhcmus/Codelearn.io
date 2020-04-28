std::vector<int> maxSumArray(std::vector<int> a, int k)
{
    vector<int> res = vector<int> (&a[0],&a[k]);
    long sum=0;
    for(int i=0;i<k;i++) {
        sum+=a[i];
    }
    long max = sum;
    for(int i=k;i<a.size();i++){
        sum += a[i]-a[i-k];
        //cout<<max<<endl;
        if(sum > max){
            max=sum;
            res=vector<int> (&a[i-k+1],&a[i+1]);
        }
    }
    return res;
}
