// find method

// const myArray = ["Hello","cat","dog","lion"];

// function isLength3(string){
//     return string.length === 3;
// }
// const ans =myArray.find((String)=>String.length===3);
// console.log(ans);

const users = [
    {userId:1, userName: "harshit"},
    {userId:2, userName: "harsh"},
    {userId:3, userName: "nitissh"},
    {userId:4, userName: "mohit"},
    {userId:5, userName: "aaditya"},
];
const ans =users.find((users)=>users.userId===3);
console.log(ans);