// parameter destructuring
// Object
// React

const person = {
    firstName:"sulman",
    gender: "male",
    age:500
};

// function printDetails(obj){
//     console.log(obj.firstName)
//     console.log(obj.gender)
// };

function printDetails({firstName,gender,age}){
    console.log(firstName)
    console.log(gender)
    console.log(age)
};

printDetails(person);