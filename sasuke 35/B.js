function jumpingFrog(a){
    if (a[0]==a[1]) return String(a[0]);
    if (a[2]==0 && a[3]==0) return 'NO';
    var t = (a[0]-a[1])/(a[3]-a[2]);
    if (t == parseInt(t)){
        return String(t*a[2]+a[0]);
    }
    return 'NO';
}

// console.log(jumpingFrog([2,9,2,4]));
