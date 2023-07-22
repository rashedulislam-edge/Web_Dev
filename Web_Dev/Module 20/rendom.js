let selected=[];
for(let i=0;i<5;i++){
    let random=Math.random()*10;
    let picked=Math.round(random);
    if(selected.indexOf(picked)==-1)
    {
        selected.push(picked);
    }
    else{
        console.log(selected);
    }
}
console.log(selected);

