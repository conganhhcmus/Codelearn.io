bool compare(const pair<int, string>&i, const pair<int, string>&j)
{
    if (i.first == j.first) return i.second>j.second;
    return i.first<j.first;
}

int find(vector< pair <int,string> > arr,std::string key){
    int res=-1;
    for(int i=0;i<arr.size();i++)
    {
        if(arr[i].second==key) return i;
    }
    return res;
}

int chooseEmployee(std::vector<std::string> skill, std::vector<int> salary, std::string requestSkill, int k)
{
    if(k==0) return 0;
    if(k>skill.size()) return -1;
    int ans=0;
    for(int i=0;i<skill.size();i++){
        if(skill[i]==requestSkill) 
        {
            ans+=salary[i];
            k--;
        }
    }

    vector< pair <int,string> > arr;
    vector< pair <int,string> > tmp;

    for(int i=0;i<skill.size();i++){
        tmp.push_back(make_pair(salary[i],skill[i]));
    }

    for(int i=0;i<skill.size();i++){
        int index = find(arr,skill[i]);
        if(index==-1) {
            arr.push_back(make_pair(1,skill[i]));
        } else arr[index].first++;
    }

    sort(arr.begin(), arr.end(),compare);
    sort(tmp.begin(), tmp.end(),compare);

    for(int i=arr.size()-1;i>=0;i--){
        if(arr[i].second==requestSkill) continue;
        for(int j=0;j<tmp.size();j++){
            if(tmp[j].second==arr[i].second) {
                ans+=tmp[j].first;
                k--;
                if(k==0) return ans;
            }
        }
    }

    return ans;
}
