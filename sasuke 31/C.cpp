#include <string>
#include <stack>
using namespace std;

string removeKdigits(string num, int k) {
stack<char>st;
int len=num.length();
if(k==len) return "0";
int i=0;
while(i<len)
{
while(!st.empty()&&k>0&&st.top()<num[i])
{
    st.pop();
    k--;
}
st.push(num[i]);
i++;
}
//When all elements in array are equal , k will never be decremented 
while(k>0)
{
    st.pop();
    k--;
}
string res="";
while(!st.empty())
{
    res=st.top()+res;
    st.pop();
}
//To remove leading 0s
while(res.length()>1&&res[0]=='0')
{  
res.erase(0,1);
}
 return res;   
}     
std::string deleteChar(std::string s, int k)
{
    return removeKdigits(s,k);
}