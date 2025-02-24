// Array destructuring
const myArray= ["value1","value2","value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of my var1",myvar1)
// console.log("value of my var2",myvar2)
 
let [myvar1, myvar2, ...myNewArray]=myArray;
// let myNewArray = myArray.slice(2);
 console.log("value of my var1",myvar1);
console.log("value of my var2",myvar2);
console.log(myNewArray);