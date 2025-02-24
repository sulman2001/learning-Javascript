// every method 
// const numbers = [2,4,6,8,10];

// const ans =numbers.every((number)=>number%2===0);

// callback function ---> ture/ false (boolean)
// every method ----> true/ false (boolean)

// console.log(ans);


  const userCart=[
        {productedId:1, productName:"mobile", price:12000},
        {productedId:2, productName:"laptop", price:22000},
        {productedId:3, productName:"tv", price:15000}
       ];
   const ans = userCart.every((cartItem)=>cartItem.price<30000);
   console.log(ans);