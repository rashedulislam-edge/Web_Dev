////////////////////////////
//1ST PROBLEM IS HERE//////
//////////////////////////
function radianToDegree(redian) {
    if (typeof redian == 'number') {

        let getDegree = redian * 57.2958;
        return getDegree;
    }
    else if (typeof redian != "number") {
        return 'Please Enter a Positive Number';
    }
}
let convertInDegree = radianToDegree(77);
//console.log(convertInDegree);



////////////////////////////
//2ND PROBLEM IS HERE//////
//////////////////////////

function oilPrice(diesel, petrol, octen) {
    if(typeof diesel=='number'&& typeof petrol=='number'&& typeof octen=='number'){

        let dieselPrice = 114 * diesel;
        let petrolPrice = 130 * petrol;
        let octenPrice = 135 * octen;
    
        let totalpriceOfOil = dieselPrice + petrolPrice + octenPrice;
        return totalpriceOfOil;
    }
    else if(typeof diesel!='number'|| typeof petrol!='number'|| typeof octen!='number'){
        return 'Please Enter only number';
    }
    else if(dieselPrice<=0 || petrolPrice<=0 || octenPrice<=0){
        return "please Enter a positive number";

    }
}
console.log(oilPrice(7,6,7));



////////////////////////////
//3RD PROBLEM IS HERE//////
//////////////////////////

function publicBusFare(totalPerson) {
    let goInBus = totalPerson % 50;
    let goInMicro = goInBus % 11;
    let goInPublicBus = goInMicro * 250
    return goInPublicBus;
}

//console.log(publicBusFare(66));




////////////////////////////
//4TH PROBLEM IS HERE//////
//////////////////////////
let firstPerson1 = { name: 'abul', friend: 'kabul' };
let secondPerson2 = { name: 'kabul', friend: 'abul' };

function isBestFriend(firstPerson, secondPerson) {
    if (firstPerson.name == secondPerson.friend && secondPerson.name == firstPerson.friend) {
        return true;
    }
    else {
        return false;
    }

}
let findBestFriend = isBestFriend(firstPerson1, secondPerson2);
//console.log(findBestFriend);



////////////////////////////
//5TH PROBLEM IS HERE//////
//////////////////////////

const fileName = 'myfile.js';

function isjavaScriptFile(checkFile) {
    let getFile = checkFile.endsWith('.js');
    return getFile;
}
//console.log(isjavaScriptFile(fileName));


