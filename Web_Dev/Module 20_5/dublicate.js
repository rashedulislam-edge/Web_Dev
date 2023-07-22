let names = ['abul', 'kabul', 'mabul','abul', 'mabul', 'chabul', 'labul', 'kabul', 'mabul', 'habul',];

function removeDublicate(names) {
    const unipue = [];
    for (const element of names) {
        //console.log(element);      //To see all the element of array
        if (unipue.indexOf(element) == -1) {
            unipue.push(element);
        }
    }
    return unipue;
}

console.log(removeDublicate(names));  

