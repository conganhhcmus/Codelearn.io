function differentChar(s1,s2){
    s1 = s1.split('');
    s1 = s1.filter(function(x,index){
        return s1.indexOf(x) ===index;
    });
    var ans = 0;
    for(var i = 0;i<s1.length;i++){
        if(s2.indexOf(s1[i])==-1) ans++;
    }
    return ans;
}