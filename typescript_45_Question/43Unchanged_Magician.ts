// changed Magicians: Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’ names.
//   Because the original array will be unchanged, return the new array and store it in a separate array. 
//   Call show_magicians() with each array to show that you have one array of the original names and one array with 
//   the Great added to each magician’s name.
let Magician: string[]=['Harry potter','hermione Granger','Ron weasley','Albus'];

function copyArray(array:string[]){

return [...array]
}


function make_great(magicianArray:string[]){
    for(let i=0; i<magicianArray.length;  i++){
        magicianArray[i] ='the Great ' + magicianArray[i]
    }

}
function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
        
        
    });
}
const copyMagicionArray =copyArray(Magician);
make_great(copyMagicionArray);

console.log(' \n\nthis is a my  orignal array' );
show_magicians(Magician);

console.log(' \n\nthis is a my  modfied copy of the array' );
show_magicians(copyMagicionArray);


