// Great Magicians: Start with a copy of your program from Exercise 41.
//  Write a function called make_great() 
//  that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//  Call show_magicians() to see that the list has actually been modified.

let Magician: string[]=['Harry potter','hermione Granger','Ron weasley','Albus'];

function make_great(magicianArray:string[]){
    for(let i=0; i<magicianArray.length;  i++){
        Magician[i] ='the Great ' + magicianArray[i]
    }

}
function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
        
        
    });
}
make_great(Magician);
show_magicians(Magician);

