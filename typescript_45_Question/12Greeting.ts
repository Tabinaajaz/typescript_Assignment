//Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.





'Array[]'
let Names:string[]=["tabinda","Atif","Noor_ul_ain","Aisha","laiba"];

const message : string =  'wellcome  to new class:'
//for ko loop bolty  hai.or i index hai names humre array hai or leght names  defined krti hai
for(let i=0 ; i<Names.length; i ++){
console.log(message+Names[i]);//+ sign  do varible ek sath  orint krty hai
}