
// let and const are block scope
// var is function scope

// if(true){
//     let firstName = "harshit";
//     console.log(firstName);
// };

// console.log(firstName);

function myApp(){
    if(true){
        let firstName = "sulman";
        console.log(firstName);
    };
    console.log(firstName)
};
myApp();