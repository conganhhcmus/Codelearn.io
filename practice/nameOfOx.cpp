bool nameOfOx(std::string t, std::string s)
{
    bool ans = true;
    if(t.length()>s.length()) return false;
    int j=0;
    for(int i=0;i<t.length();i++){
        while(j<s.length()){
            if(t[i]==s[j]) break;
            j++;
        }
    }
    if(j>=s.length()) return false;
    return true;
}
