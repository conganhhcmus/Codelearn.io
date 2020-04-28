#include <bits/stdc++.h>

using namespace std;

bool sortinrev(const pair<int,int> &a, const pair<int,int> &b) 
{ 
    return (a.second > b.second); 
} 

std::vector<int> iconFeeling(std::vector<int> a)
{
    vector<pair<int, int>> vec;
    for (int i = 0; i < a.size(); i++)
    {
        bool check = false;
        for (int j = 0; j < vec.size(); j++)
        {
            if (vec[j].first == a[i])
            {
                vec[j].second++;
                check = true;
            }
        }
        if(!check) vec.push_back(make_pair(a[i],0));
    }

    sort(vec.begin(),vec.end(),sortinrev);
    vector<int> ans;
    for(int i = 0;i<vec.size();i++) {
        if(i<3) ans.push_back(vec[i].first);
        else break;
    } 
    return ans;
}