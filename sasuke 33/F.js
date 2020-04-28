function convertArray(a){
    a[0] = Math.min(a[0],-a[0]);
    for(var i = 1;i<a.length;i++){
        var min = Math.min(a[i],-a[i]);
        var max = Math.max(a[i],-a[i]);
        if(min> a[i-1]) a[i] = min;
        else if(max>a[i-1]) a[i] = max;
        else return false;
    }
    return true;
}