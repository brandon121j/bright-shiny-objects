// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(first, last) {
    let user = {
    firstName: first,
    lastName: last
    };
    return user;
}
console.log(createUser('Brandon', 'Johnson'));


const userMe = {
    firstName: 'Brandon',
    lastName: 'Johnson'
}

function setAge(user, age) {
    
    user.age = age;
    return user;
}
console.log(setAge(userMe, 50))

function incrementAge(user) {
    user.age += 1;
    return user;
}
console.log(incrementAge(userMe))

const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaitenance: true
};

function fixCar(car) {
    car.needsMaitenance = false;
    return car;
}
console.log(fixCar(car))

const student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
};

const newGrades = [88, 70, 90];

function addGrades(student, newGrades) {
    for(i = 0; i < newGrades.length; i++) {
        student.grades.push(newGrades[i])
    }
    return student;
}
console.log(addGrades(student, newGrades))







// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
