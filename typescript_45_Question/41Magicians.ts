// Magicians: Make a array of magician’s names.  
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//1step me ek varible banaye
//2ndstep:function ko call krwae
//3step:for each 


let Magician: string[]=['Harry potter','hermione Granger','Ron weasley','Albus'];
function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
        
        
    });
}
show_magicians(Magician);