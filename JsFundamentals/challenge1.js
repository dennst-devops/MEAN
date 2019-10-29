let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];

for (const student in students) {
    console.log(`Name: ${students[student].name}, Cohort: ${students[student].cohort}`);
}

// doesn't work...
// function printStudents(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var obj = arr[i];
//         for (var key in obj) {
//             var value = obj[key];
//             console.log(key + " = " + value);
//         }
//     }
// }

// printStudents(students);