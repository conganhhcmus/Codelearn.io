int maxnumberinstring(std::string str)
{
    int ans =-1;
    int max =0;
    for(int i=0;i<str.length();i++){
        if(str[i]>='0' && str[i]<='9'){
            max = max*10 + (str[i]-'0');
            if(max>ans) ans = max;
        }
        else max = 0;
    }
    return ans;
}
