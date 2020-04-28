function treeLogic(n){
    var res = '';
    var num=n;
    for(var i=1;i<=n;i++)
    {
        res+=(num%10).toString();
        num++;
    }
    num--;
    num--;
    for(var i=1;i<n;i++)
    {
        res+=(num%10).toString();
        num--;
    }
    
    return res;
}
// console.log(treeLogic(5))