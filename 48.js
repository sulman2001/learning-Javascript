// fuctions inside fuction

function app(){
    const myFunc = ()=>{
        console.log("hello my Func")
    }

    const addTwo = (num1, num2)=>{
        return num1+num2
    }

    const nul =(num1, num2)=> num1*num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(4,5));
   console.log(nul(4,6));

};
app();
