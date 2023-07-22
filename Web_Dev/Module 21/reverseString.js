const greeting='My name is Rashedul Islam';

function reverseString(string){
    let reverse='';
    for(const letter of string){
       // console.log(letter);
        reverse=letter+reverse;
    }
    return reverse;
}
const result=reverseString(greeting);
console.log(result);
