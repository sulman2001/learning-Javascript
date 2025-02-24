// callback function

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`)
};

function myFunc(callback){
    console.log("hello there i am lovely boys")
    callback("papa");
};



myFunc(myFunc2);