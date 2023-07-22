// chairWood=3cft/chair;

function chairWood(quantity){
    let totalChairWood=3*quantity;
    return totalChairWood;
}

// tableWood=10cft/table;

function tableWood(quantity){
    let totaltableWood=10*quantity;
    return totaltableWood;
}


//////////////////////////\\\\
// bedwood=50cft/bed;////\\\\\\
////////////////////////\\\\\\\\

function bedWood(quantity){
    let totalBedWood=50*quantity;
    return totalBedWood;
}

//INPUT FROM USERS //
let resultOfChair=chairWood(132);
let resultOfTableWood=tableWood(41);
let resultOfBedWood=bedWood(27);
let totalWood=resultOfChair+resultOfTableWood+resultOfBedWood;

//OUTPUT OF USER INPUT
console.log('Wood for Chair:',resultOfChair,'cft');
console.log('Wood for Table:',resultOfTableWood,'cft');
console.log('Wood for bed:',resultOfBedWood,'cft');
console.log('Total Wood Need:',totalWood,'cft');




