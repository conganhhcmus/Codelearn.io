function powerOfFive(num){
    if(num===0) return false;
    while (num%5===0){
        num/=5;
    }
    if(num > 1) return false;
    return true;
}