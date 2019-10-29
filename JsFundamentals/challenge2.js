let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

for (const group in users) {
    console.log(group.toUpperCase());
    let counter = 1;
    for (const person in users[group]) {
        const fName = users[group][person].first_name.toUpperCase();
        const lName = users[group][person].last_name.toUpperCase();
        const nameCount = fName.length + lName.length;
        console.log(`${counter} - ${fName}, ${lName} - ${nameCount}`);
        counter++;
    }
}
