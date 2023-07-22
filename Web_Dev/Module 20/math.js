// let output=Math.random()*6;

// console.log(Math.round(output));

// let num1=10;
// let num2=20;
// let temp=num1;
//     num1=num2;
//     num2=temp;

// console.log(num1,num2);


let bus=500;
let truck=400;
let bike=300;

// if(bus>truck && bus>bike)
// {
//     console.log("Bus mama rich");
// }
// else if(truck>bus && truck>bike)
// {
//     console.log("Truck mama rich");
// }
// else{
//     console.log("Bike mama rich");
// }

// function smallestNum(first,second,third){
//     if(first<second && first<third){
//         return first;
//     }
//     else if(second<first && second<third){
//         return second;
//     }
//     else{
//         return third;
//     }
    
// }
// console.log("Smallest number is",smallestNum(1113,456,432));


// let numbers=[23,434,65,86,88,12,454];
// let sum;
// for(let i=0;i<numbers.length;i++){
//     // console.log(i,numbers[i]);
//     sum =+ numbers[i];
    
// }
// console.log(sum);


// let largest;
// let ages=[12,23,54,65,45,76,87,99,100]
// for(let i=0;i<ages.length;i++){
//     if(largest>ages[i]){
//         largest=ages[i];
//     }


// }

//Getting the largest element from an array
// function largestElement(numbers){
//     let largest=numbers[0];

//     for(let i=0;i<numbers.length;i++){
//         let element = numbers[i];

//         if(element>largest){
//             largest=element;
//         }
//     }
//     return largest;
// }
//  let ages=[12,23,54,65,45,176,87,99,100];
//  let ages2=[-444,-45,-33];
//  console.log("The largest number is",largestElement(ages2));




// Getting fibonacci series
// const fibo=[0,1];
// for(let i=2;i<=20;i++){
//     fibo[i]=fibo[i-1]+fibo[i-2];
// }
// console.log(fibo);

// function fibonacciSeries(num){
//     if(typeof num !="number"){
//         return "Please give a number";
//     }
//     if(num<2){
//         return "please give a number greater than 1";
//     }
//     const fibo=[0,1];

//     for(let i=2;i<num;i++){
//         fibo[i]=fibo[i-1]+fibo[i-2];
//     }
//     return fibo;
// }
// console.log(fibonacciSeries(10));


//Recursive Fibonacci Series
// function fibonacciSeries(n){
//     if(n==0){
//         return [0];
//     }
//     if(n==1){
//         return [0,1];
//     }

//     let fibo=fibonacciSeries(n-1);
//     fibo[n]=fibo[n-1]+fibo[n-2];
//     return fibo;
// }
// console.log(fibonacciSeries(6));



//LOTARY SELECTON
let selected=[];
let num=selected.length;

for (let i=0;i<1;i++){
    let ramdom=Math.random()*100;
    let picked=Math.round(ramdom);
    if(selected.indexOf(picked)==-1){
        selected.push(picked)
    }
    else{
        console.log('OUT:',picked);
    }
}
console.log('IN:',selected);