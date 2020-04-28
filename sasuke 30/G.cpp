int spreadInformation(std::vector<int> a, int k)
{
    int ans = 1;
    sort(a.begin(),a.end());

    for(int i=1;i<a.size();i++){
        if(abs(a[i]-a[i-1])>k) ans++;
    }
    return ans;
}
