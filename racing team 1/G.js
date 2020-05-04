function compare(a,b){
    return a-b;
}

function equalArray(a,b){
    a.sort(compare);
    b.sort(compare);
    var i = 0, j = 0;
    var count = 0;
    while(i < a.length && j < b.length){
        if (a[i] > b[j]) j++;
        else if (a[i] < b[j]) i++;
        else {
            count++;
            i++;
            j++;
        }
    }
    if (count == Math.min(a.length,b.length)) return true;
    return false;
}