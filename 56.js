// important array methods

// forEach
// map is most imoportant
// filter
// reduce is imporatnt

const numbers = [4, 2, 5, 8];

// function multiplyBy2(number, index) {
//   console.log("index is ", index);
//   console.log(`${number}*2 = ${number*2}`);
// };

// multiplyBy2(numbers[0], 0);

// for(let i=0; i<numbers.length; i++){
//     multiplyBy2(numbers[i],i) }

// numbers.forEach(function(number,index){
//   console.log(`index is ${index} number is ${number}`)
// });

// numbers.forEach(function(number){
//   console.log(number*3)
// })

const users=[
  {firstName:"papa", age:23},
  {firstName:"mehmood",age:32},
  {firstName:"ali", age:12},
  {firstName:"kaka",age:45},
];

users.forEach(function(user){
  console.log(user.firstName)
});
