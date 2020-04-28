function gcd(a, b) {
    Math.abs(a);
    Math.abs(b);
    if (a === 0) return b;
    return gcd(b % a, a);
}

function lcd(a, b) {
    Math.abs(a);
    Math.abs(b);
    return (a * b) / gcd(a, b);
}

function betweenNumber(a, b) {
    var lcd_arr = a[0];
    for (var i = 1; i < a.length; i++) {
        lcd_arr = (lcd_arr * a[i]) / gcd(lcd_arr, a[i]);
    }

    var gcd_arr = b[0];
    for (var i = 1; i < b.length; i++) {
        gcd_arr = gcd(gcd_arr, b[i]);
    }
    if (gcd_arr < lcd_arr || gcd_arr % lcd_arr !== 0) return 0;
    if (gcd_arr === 1) return 1;
    // primes analyse gcd_arr
    var primes = [];
    var digits = [];
    var count = 0;

    while (gcd_arr % 2 === 0) {
        count++;
        gcd_arr /= 2;
    }
    if (count) {
        primes.push(2);
        digits.push(count);
    }

    for (var i = 3; i <= Math.sqrt(gcd_arr); i += 2) {
        count = 0;
        while (gcd_arr % i === 0) {
            count++;
            gcd_arr /= i;
        }
        if (count) {
            primes.push(i);
            digits.push(count);
        }
    }
    if (gcd_arr > 2) {
        primes.push(gcd_arr);
        digits.push(1);
    }
    count = 0;
    if (lcd_arr > 1) {
        while (lcd_arr % 2 === 0) {
            count++;
            lcd_arr /= 2;
        }
        if (count) {
            digits[primes.indexOf(2)] -= count;
        }

        for (var i = 3; i <= Math.sqrt(lcd_arr); i += 2) {
            count = 0;
            while (lcd_arr % i === 0) {
                count++;
                lcd_arr /= i;
            }
            if (count) {
                digits[primes.indexOf(i)] -= count;
            }
        }
        if (lcd_arr > 2) {
            digits[primes.indexOf(lcd_arr)]--;
        }
    }

    //console.log(primes);
    //console.log(digits);
    var ans = 1;
    for (var i of digits) ans *= i + 1;
    return ans;
}

//console.log(betweenNumber([1, 3, 5, 7], [840, 1680, 3360]));
