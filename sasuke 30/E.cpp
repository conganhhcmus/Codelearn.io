int countStepsTaken(std::vector<std::vector<int>> a)
{
    if(a.size()==0) return 0;
    vector<long>v;
    for(int i=0;i<a.size();i++){
        v.push_back(a[i][1]-a[i][0]);
    }
    sort(v.begin(), v.end());
    int tmp = v[0];
    int ans = 1;
    for(int i=0;i<v.size();i++){
        if(v[i]!=tmp) {
            tmp=v[i];
            ans++;
        }
    }
    return ans;
}
