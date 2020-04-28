function balance(arr) {
    if (arr.length < 4) return -1;
    arr.sort();
    if ((arr[0] + arr[3]) === (arr[2] + arr[1])) return (arr[0] + arr[3]);
    if((arr[0]+arr[1]+arr[2]) ===arr[3]) return arr[3];
    return -1;
}
