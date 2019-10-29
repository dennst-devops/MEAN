function fizzbuzz(n) {
    if (isNaN(n)) {
        //console.log("Parameter must be a positive number, not a string");
        return "Parameter must be a positive number, not a string";
    }


    if (n < 1) {
        //console.log("Parameter must be a positive number");
        return "Parameter must be a positive number";
    }
    mystr = "";

    for (var i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            //console.log("fizzbuzz")
            mystr += "fizzbuzz";
        }
        else if (i % 5 === 0) {
            //console.log("buzz")
            mystr += "buzz";
        }
        else if (i % 3 === 0) {
            //console.log("fizz")
            mystr += "fizz";
        }
        else {
            //console.log(i)
            mystr += i;
        }
        if (i != n) {
            mystr += ", ";
        }

    }
    return mystr;
}

console.log(fizzbuzz(15));