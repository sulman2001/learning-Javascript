// some method

// const numbers = [3,5,11,9,2];

// // kya ek bhi number esa hai jo even hai
// // ture
// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);

const userCart=[
    {productedId:1, productName:"mobile", price:12000},
    {productedId:2, productName:"laptop", price:22000},
    {productedId:3, productName:"tv", price:15000}
   ];

  const ans=userCart.some((cartItem)=>cartItem.price>50000)
  console.log(ans);