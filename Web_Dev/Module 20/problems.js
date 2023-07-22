//HERE IS KM TO MILES

// function kmToMiles(km)
// {
//     let miles=km*0.621371;
//     return miles;
// }
// console.log("km To Miles",parseFloat(kmToMiles(9377).toFixed(3)));


// function everOrOdd(number)
// {
//     let num=number;
//     if(num%2==0)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(everOrOdd(2980));

// function cheakLeapYear(year) {
//     if (year % 4 == 0) {
//         console.log(year,"is a leap Year");
//     }
//     else {
//         console.log(year,"is not a leap Year");
//     }
// }
// cheakLeapYear(2003);



//HERE CHEAKING THE FACTORIAL VALUE

// let n=3;
// let fact=1;
// for(let i=1;i<=n;i++)
// {
//     fact*=i;
// }
// console.log(fact);



// function factorial(num){
//     fact=1;
//     for(let i=1;i<=num;i++)
//     {
//         fact*=i;
//     }
//     return fact;
    
//     //console.log("Factorial of",num,'is',fact);
// }
//factorial(7);
//console.log("Factorial of",'is',factorial(7));


//HERE WE ARE DOING FACTORIAL USING WHILE LOOP

// let i=1;
// let num=4;
// let fact=1;

// while(i<=num){
//     fact*=i;
//     i++;
// }
// console.log("answer:",fact);

// function factorial(num)
// {
//     let i=1;
//     let fact=1;

//     while(i<=num)
//     {
//         fact=fact*i;
//         i++;
//         console.log(fact);
//     }
//     console.log("Factorial of",num,"is",fact);
// }
// factorial(9);

// function Revfactorial(num)
// {
//     let i=num;
//     let fact=1;

//     while(i>=1)
//     {
//         fact*=i;
//         i--;
//         //console.log(fact);
//         console.log(i);
//     }
//     console.log("Factorial Of",num,"is",fact);
// }
// Revfactorial(6);


// function factorial(n)
// {
//     if (n==1)
//     {
//         return 1;
//     }
//     let fact= n * factorial(n-1);
//     return fact;
// }

// console.log(factorial(2));



//SIMPLE INTAREST CALCULATING
// A = P (1 + rt)

// let rate=8;
// let time=5;
// let balance=100000;
// let finalAmount;

function simpleInterest(balance)
{
    let rate=8;
    let time=5;
    finalAmount=(balance*rate*time)/100;
    let getAmount=finalAmount+balance;
    return getAmount;
}

console.log(simpleInterest(10000));
