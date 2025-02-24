// lexical scope

const myVar = "value1";

function myApp(){

function myfunc(){
    
    const myfunc2 = ()=>{
        console.log("inside my func",myVar)
    }
    myfunc2();
}



console.log(myVar);
myfunc();


};
 myApp();