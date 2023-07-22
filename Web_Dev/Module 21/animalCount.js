//1 TO 10 MILES= PER MILE 10 ANIMAL
//11 TO 50 MILES= PER MILE 50 ANIMAL
//50 TO REST MILES= PER MILE 100 ANIMAL

function animalCount(miles){
    if(miles<11){
        let under10MilesAnimal=10*miles;
        console.log(under10MilesAnimal);
    }

    if(miles>10 && miles<=50){
    let upper10Miles=miles-10;
    let upper10MilesAnimal=upper10Miles*50+100;
        console.log(upper10MilesAnimal);
    }
    if(miles>50){
        let upper50Miles=miles-50;
        let upper50MilesAnimal=upper50Miles*100+2100;
        console.log(upper50MilesAnimal);
    }
   
}
animalCount(34);
