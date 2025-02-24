// object inside Array
// very useful in real world application

const users=[
    {userId:1,firtName:"harshit",gender:"male"},
    {userId:2,firtName:"mohit",gender:"male"},
    {userId:3,firtName:"nitish",gender:"male"},
];

for(let user of users){
    console.log(user.firtName);
};