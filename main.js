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

// ===================================================================

const userMe = {
    firstName: 'Brandon',
    lastName: 'Johnson'
}

function setAge(user, age) {
    
    user.age = age;
    return user;
}
console.log(setAge(userMe, 50))

// ===================================================================

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

// ===================================================================

function fixCar(car) {
    car.needsMaitenance = false;
    return car;
}
console.log(fixCar(car))

// ===================================================================

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

// ===================================================================

function getDataType(car, key) {
    let type = (typeof car[key])
    return type;
}
console.log(getDataType(car, 'make'))

// ===================================================================

const todos = [
    { 
        title: 'Get gas', 
        isComplete: false },
    { 
        title: 'Buy bread', 
        isComplete: true  
    }
];

const newTodo = {
    title: 'Call mom', 
    isComplete: false
};

function addTodo(todos, newTodo) {
    todos.push(newTodo)
    return todos
}
console.log(addTodo(todos, newTodo))

// ===================================================================

const playlist = {
    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]
};

const newSong = {
    title: 'Old Friends',
    artist: 'Pinegrove',
    duration: 3
};

function addSong(playlist, song) {
    playlist.songs.push(song);
    playlist.duration += song.duration;
    return playlist;
}
console.log(addSong(playlist, newSong))

// ===================================================================

let reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 95, 80]
};

function updateReportCard(reportCard, newGrade) {
    let sum = 0;
    
    if (newGrade <= 100 || newGrade >= 0) {
        reportCard.grades.push(newGrade);
        reportCard.lowestGrade = Math.min(...reportCard.grades);
        reportCard.highestGrade = Math.max(...reportCard.grades);
        
        for(i = 0; i < reportCard.grades.length; i++) {
            sum += reportCard.grades[i];
            
            reportCard.averageGrade = sum / reportCard.grades.length
        }
    }

    else {
    }
    
    return reportCard;
}
console.log(updateReportCard(reportCard, 5))

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
