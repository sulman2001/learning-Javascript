// difference between dot and bracket notaion

const key ="email"
const person = {
    name:"sulman",
    age: 24,
   "person hobbies":["guitar", "sleeping", "listening music"]
};

// console.log(person["person hobbies"]);

person[key]= "papa@gmail.com";
console.log(person);