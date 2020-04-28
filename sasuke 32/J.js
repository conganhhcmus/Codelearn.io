function expressionFill(str){
    var arr = str.split('=');
    var C = arr[1];
    var rex = '';
    for(var i = 0;i<arr[0].length;i++){
        if(arr[0][i] === '+' || arr[0][i] === '-' || arr[0][i] === '/' || arr[0][i] === '*') {
            rex = arr[0][i];
            break;
        }
    }
    var A = arr[0].split(rex)[0];
    var B = arr[0].split(rex)[1];
    var charactor = (A + B + C).split('');
    charactor = charactor.filter((item,index)=>{return charactor.indexOf(item)===index});
    //console.log(charactor);

    var check = [];
    for(var i =0;i<charactor.length;i++) check[i] = -1;
    for(var i = 0;i<=Math.pow(10,charactor.length)-1;i++){
        var A_tmp = A.slice();
        var B_tmp = B.slice();
        var C_tmp = C.slice();

        for (var j = 0; j < charactor.length; j++) check[j] = -1;

        for (var j = 0; j < charactor.length; j++) {
            var tmp = i % Math.pow(10, charactor.length - j);
            tmp = Math.floor(tmp / Math.pow(10, charactor.length - j -1));

            var kt = false;
            //check tmp
            for (var k = 0; k <= j; k++) {
                if (tmp === check[k]) {
                    kt = true;
                    break;
                }
            }
            if (kt) break;
            check[j] = tmp;
            tmp = String.fromCharCode(tmp + 48);
            //replace
            A_tmp = A_tmp.split(charactor[j]).join(tmp);
            B_tmp = B_tmp.split(charactor[j]).join(tmp);
            C_tmp = C_tmp.split(charactor[j]).join(tmp);
        }

        // check
        var a = Number.parseInt(A_tmp);
        var b = Number.parseInt(B_tmp);
        var c = Number.parseInt(C_tmp);
        //console.log(A_tmp,B_tmp,C_tmp,": ",a,b,c);

        if (A_tmp.length>1 && a < Math.pow(10, A_tmp.length - 1)) continue;
        if (B_tmp.length>1 && b < Math.pow(10, B_tmp.length - 1)) continue;
        if (C_tmp.length>1 && c < Math.pow(10, C_tmp.length - 1)) continue;


        if(A_tmp !== B_tmp && a === b) continue;
        if(A_tmp !== C_tmp && a === c) continue;
        if(C_tmp !== B_tmp && c === b) continue;



        //console.log(i);
        if (rex === "+") {
            if (a + b === c) return A_tmp + rex + B_tmp + "=" + C_tmp;
        } else if (rex === "-") {
            if (a - b === c) return A_tmp + rex + B_tmp + "=" + C_tmp;
        } else if (rex === "*") {
            if (a * b === c) return A_tmp + rex + B_tmp + "=" + C_tmp;
        } else if (rex === "/") {
            if (b == 0) continue;
            if (Math.floor(a / b) === c)
                return A_tmp + rex + B_tmp + "=" + C_tmp;
        }
    }
    return "undefined";
}

//console.log(expressionFill("ab+cb=abb"));
//console.log(Math.pow(10, 0));