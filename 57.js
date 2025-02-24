// map method 
// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }
// const squareNumber = numbers.map((number)=>{
//     return number * number;
// })
// console.log(squareNumber);

const users=[
    {firstName:"papa", age:23},
    {firstName:"mehmood",age:32},
    {firstName:"ali", age:12},
    {firstName:"kaka",age:45},
  ];

  const userName = users.map((user)=>{
    return user.firstName;
  })
  console.log(userName);