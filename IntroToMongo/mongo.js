// Create a database called 'my_first_db'.
use my_first_db

// Create students collection.
db.createCollection("students")

// Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
// Create 5 students with the appropriate info.
db.students.insert({name: "Trey", home_state: "WA", lucky_number: 13, birthday: {month: 12, day: 13, year: 1999}})
db.students.insert({name: "Dennis", home_state: "CA", lucky_number: 42, birthday: {month: 9, day: 9, year: 1970}})
db.students.insert({name: "Sage", home_state: "CA", lucky_number: 10, birthday: {month: 7, day: 20, year: 2001}})
db.students.insert({name: "Ty", home_state: "WA", lucky_number: 3, birthday: {month: 8, day: 10, year: 2003}})
db.students.insert({name: "Kryten", home_state: "UK", lucky_number: 99, birthday: {month: 1, day: 1, year: 3000}})

// Get all students.
db.students.find({})

// Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.find({home_state: "CA"})

// Get all students whose lucky number is:
    // greater than 3
    db.students.find({lucky_number: {$gt: 3}})

    // less than or equal to 10
    db.students.find({lucky_number: {$lte: 10}})

    // between 1 and 9 (inclusive)
    db.students.find({lucky_number: {$gte: 1, $lte: 9}})

// Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.updateMany({}, {$set: {interests: []}})

// Add some unique interests for each particular student into each of their interest arrays.
db.students.update({name: "Sage"}, {$push: {interests: 'anime'}})
db.students.update({name: "Sage"}, {$push: {interests: 'cars'}})
db.students.update({name: "Sage"}, {$push: {interests: 'funny cat videos'}})
db.students.update({name: "Ty"}, {$set: {interests: ['reading', 'video games', 'ignoring homework3']}})
db.students.update({name: "Trey"}, {$set: {interests: ['interest1', 'interest2', 'interest3']}})
db.students.update({name: "Kryten"}, {$set: {interests: ['Red Dwarf', 'humans', 'ketchup']}})
db.students.update({name: "Dennis"}, {$set: {interests: ['F1', 'hockey', 'money']}})

// Add the interest 'taxes' into someone's interest array.
db.students.update({name: "Sage"}, {$push: {interests: 'taxes'}})

// Remove the 'taxes' interest you just added.
db.students.update({name: "Sage"}, {$pop: {interests: (1)}})

// Remove all students who are from California.
db.students.remove({home_state: "CA"})

// Remove a student by name. 
db.students.remove({name: "Kryten"})

// Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number: {$gt: 5}})

// Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.updateMany({}, {$set: {number_of_belts: 0}})

// Increment this field by 1 for all students in Washington (Seattle Dojo).
db.students.updateMany({home_state: "WA"}, {$inc: {number_of_belts: 1}})

// Rename the 'number_of_belts' field to 'belts_earned'
db.students.updateMany({}, {$rename: {"number_of_belts": "belts_earned"}})

// Remove the 'lucky_number' field.
db.students.updateMany({}, {$unset: {"lucky_number": ""}})

// Add a 'updated_on' field, and set the value as the current date.
db.students.updateMany({}, {$currentDate: {"updated_on": {$type: "date"}}})
