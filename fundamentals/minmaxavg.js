function maxMinAvg(arr) {
    var min = 0;
    var max = 0;
    var avg = 0;
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) { min = arr[i]; }
        if (arr[i] > max) { max = arr[i]; }
        sum += arr[i];
    }
    avg = sum / arr.length;

    console.log("The minimum is " + min + ", the maximum is " + max + ", and the average is " + avg + ".")
}


maxMinAvg([1, -2, 9, 4])