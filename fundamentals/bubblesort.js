/*
BIG O:
O(n)
O(1)
O(n)
O(n^2)
*/






function bubbleSort(arr) {
    var temp;
    for (var i = 0; i < arr.length - 2; i++) {
        for (var j = 1; j < arr.length - 1; j++) {
            if (arr[i] > arr[j]) {
                console.log("I is: " + arr[i]);
                console.log("J is: " + arr[j]);
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                console.log("I is: " + arr[i]);
                console.log("J is: " + arr[j]);
                console.log("==============\n")
            }
        }

    }
    return arr;
}


console.log(bubbleSort([3, 5, 1, 10, 9, 2]));