// Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase, uppercase, and titlecase.
let personsName :string= ""
personsName= prompt('what  is you are Name?')|| ''
let lowercase :string= personsName.toLowerCase()

 let uppercase :string= personsName.toUpperCase()

 let titlecase :string= personsName.split( '').map(word =>word.charAt(0).toUpperCase() 
  + word.slice(1).toLowerCase()).join( '')


 if(personsName !== null && personsName !== ''){
    alert(`hello ${personsName},here are your  name in:
    lowerCase ${lowercase}
    upperCase ${uppercase}
    Titlecase  ${titlecase}
   `)
 }
 else{
    alert('please fill your name!')
 }