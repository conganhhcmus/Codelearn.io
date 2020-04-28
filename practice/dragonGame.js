function dragonGame(s, n, x, y) {
    var dragons = new Array(n);
    for(var i=0;i<n;i++){
      dragons[i]=[];
      dragons[i].push(x[i],y[i]);
    }
    dragons.sort(function sortFunction(a, b) {
      if (a[0] === b[0]) {
          return 0;
      }
      else {
          return (a[0] < b[0]) ? -1 : 1;
      }
  });
    //console.log(dragons);
    var ans = "YES";
    for (var i = 0; i < n; i++) {
      if (s > dragons[i][0]) s += dragons[i][1];
      else return "NO";
    }
    return ans;
  }