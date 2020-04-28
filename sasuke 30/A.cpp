bool stabilityArray(std::vector<int> arr)
{
    bool res = true;
    for(int i=0;i<arr.size()-1;i++) {
        if(abs(arr[i]-arr[i+1])>5) return false;
    }
    return res;
}
