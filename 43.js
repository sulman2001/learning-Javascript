// nested destructuring

const users=[
    {userId:1,firstName:"harshit",gender:"male"},
    {userId:2,firstName:"mohit",gender:"male"},
    {userId:3,firstName:"nitish",gender:"male"},
];

// for(let user of users){
//     console.log(user.firstName);
// };

const[{firstName:val1 , userId}, , {gender:val2}] = users;
console.log(val1);
console.log(val2);
console.log(userId);