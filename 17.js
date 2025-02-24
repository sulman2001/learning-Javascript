// nested if else

// prompt jao ha woh string mah input lata ha us ko change karna hota ha 


// winning number 19

// 19 your guss is right
// 17 too low
// 20 too high

  let winningNumber = 19;
  let userGuess = +prompt("Guess a number");
  
if(userGuess=== winningNumber){
    console.log("your gusses is right!!!")
}else{
    if(userGuess< winningNumber){
        console.log("too low!!!")
    }else{
        console.log("too high!!!")
    }
}