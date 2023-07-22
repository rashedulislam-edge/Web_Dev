let i=7;
while(i<=20){

    if(i%2 ==1){
       // console.log(i);
    }
    i++;
}

let array=[12,13,2,41,5,4,3,56,-500,800];
array[5]=-100;
for(const element of array){
    if(element>80){
       // console.log(element)
    }
    if(element<0){
        break;
    }
    else{
        console.log(element);
    }
}
//console.log(array.length);
//console.log(array[5]);