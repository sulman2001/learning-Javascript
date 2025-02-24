// Sort Method   

// const numbers= [5,9,1200,400,3000];
// numbers.sort((a,b)=>{
//     return a-b;
// });
// numbers.sort((a,b)=>a-b);
// console.log(numbers);


// 1200,410
// a-b --> 790
// a-b ---> postive (greater than 0) ---> b,a

// a-b --->negative a,b
// 5 ,9, ---> -4 
 
// price lowToHigh HightLow

const products = [
    {productId: 1, produceName: "p1", price:300},
    {productId: 2, produceName: "p2", price:3000},
    {productId: 3, produceName: "p3", price:200},
    {productId: 4, produceName: "p4", price:8000},
    {productId: 5, produceName: "p5", price:500},
];

// const lowToHigh = products.slice(0).sort((a,b)=>{
//     return a.price-b.price
// });
const HighToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price
});

console.log(HighToLow);