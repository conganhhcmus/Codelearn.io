
function gcd(a, b) {
  if (a == 0) return b;
  return gcd(b % a, a);
}

function decodeDivision2(s) {
  var arr = s.split(".");
  var tmp2 = arr[1].split("(")[0];
  var tmp = arr[1].split("(")[1].split(")")[0];
  var x = Number.parseInt(arr[0]);
  var y = Number.parseInt(tmp);
  //console.log(x, y);
  var ans = 0;
  for (var i = 0; i < tmp.length; i++) {
    ans = ans * 10 + 9;
  }
  var z =0;
  if (tmp2.length > 0) {
    z = Number.parseInt(tmp2);
    //console.log(z);
    for (var i = 0; i < tmp2.length; i++) {
      ans = ans * 10;
      z = z / 10;
    }
  }
  //console.log(ans);
  var ucln = gcd((x + z) * ans + y, ans);
  return [Math.floor(((x + z) * ans + y) / ucln), Math.floor(ans / ucln)];
}