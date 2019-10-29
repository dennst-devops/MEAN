function coinChange(val) {
    change = "";
    if (val.length === 0) {
        return false;
    }
    if (val === 0) {
        return 0;
    }
    console.log("checking dollars");
    console.log(val);
    if (val % 100 >= 0) {
        console.log("D");
        change += "Dollars: " + Math.floor(val / 100) + ", ";
        val -= 100 * Math.floor(val / 100);
    }
    console.log("checking quarters");
    console.log(val);
    if (val % 25 >= 0) {
        console.log("q");
        change += "Quarters: " + Math.floor(val / 25) + ", ";
        val -= 100 * Math.floor(val / 25);
    }
    console.log("checking dimes");
    console.log(val);
    if (val % 10 >= 0) {
        console.log("d");
        change += "Dimes: " + Math.floor(val / 10) + ", ";
        val -= 10 * Math.floor(val / 10);
    }
    console.log("checking nickles");
    console.log(val);
    if (val % 5 >= 0) {
        console.log("n");
        change += "Nickles: " + Math.floor(val / 5) + ", ";
        val -= 5 * Math.floor(val / 5);
    }
    console.log("checking pennies");
    console.log(val);
    if (val > 0) {
        console.log("p");
        change += "Pennies: " + val;
        //val -= 1 * Math.floor(val / 1);
    }

    return change;
}

console.log(coinChange(312));
