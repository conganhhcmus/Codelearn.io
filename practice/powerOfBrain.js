function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

function powerOfBrain(a) {
    var ans = [];
    ans[0] = 1;
    ans[1] = 1;

    var n = a.length;
    
	var Prefix = []; 
	var Suffix = []; 

    Prefix[1] = a[0]; 
    
	for (var i = 2; i <= n; i += 1) { 
		Prefix[i] = gcd_two_numbers(Prefix[i - 1], a[i - 1]); 
	} 

	// Initializing Suffix array 
	Suffix[n] = a[n - 1]; 

	for (var i = n - 1; i >= 1; i -= 1) { 
		Suffix[i] = gcd_two_numbers(Suffix[i + 1], a[i - 1]); 
    } 
    
	ans[1] = Math.max(Suffix[2], Prefix[n - 1]);
    if(ans[1] == Suffix[2]) ans[0] = 1;
    else ans[0] = n; 


	for (var i = 2; i < n; i += 1) { 
        var tmp = gcd_two_numbers(Prefix[i - 1], Suffix[i + 1]);
        ans[0] = ans[1] >= tmp ? ans[0] : i;
		ans[1] = Math.max(ans[1],tmp);
    } 
    return ans;
}