int smallestNumber2(int a)
{
    if(int(sqrt(a))-float(sqrt(a))==0) return 1;
    if(a<8) return a;
    int ans = a;
    for(int i=sqrt(a);i>=2;i--){
        if(a%(i*i)==0){
            ans = a/(i*i);
            break;
        } 
    }
    return ans;
}
