// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//  Make sure you use each character combination, "\t" and "\n", at least once.
//   Print the name once, so the whitespace around the name is displayed.
//    Then print the name after striping the white spaces.



//const  me change nh kar skty hai ,or let me  change  karty hai islie uconst kiye hai 
//.../t mtlb hai  tab button hai 4btime   sapce  dety hai  or /n ke mtlb hai new line hain.
const person_name: string ="      \n\t Shahid Afriad \n\t     ";
console.log(person_name);
//js ke method hai trim se whitespace khtam hojae gye..
const without_whitespace :  string = person_name.trim();
console.log(without_whitespace);
