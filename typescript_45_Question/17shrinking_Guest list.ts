
let guest_List: string[] = ["Aisha","Alina","Haider"];
// //for loop
// for (let i = 0; i < guest_List.length; i++) {
// console.log('Dear'+ guest_List[i] + ',\n\n it is our pleasure to invite you in  our party.\n\n thank you!');
    
// }

let absent_guest : string ="Haider";
let new_guest: string ="yousuf";
//meina yaha  guest name change krna lie 
// guest_list ke index num =  hai new_guest equal 

guest_List[2]=new_guest;
// for (let i = 0; i<guest_List.length; i++) {
   
//     console.log('Dear'+ guest_List[i] + ',\n\n it is our pleasure to invite you in  our party.\n\n thank you!');
        
//     }
console.log(`${absent_guest} is not coming  to the party.`);
console.log('Good news! we find Big Table so we are  invitinng 3 more guests.');
//Array me..strarting jbi push krna hota hai to unshift ke use krty hai.
guest_List.unshift('uroosa');
//jb  hum cnter koi name add krwaena hota hai to  jb hum spliceuse krty hai
guest_List.splice(2, 0 ,'Ali');
//jb lastme name add krwae hota to hum push use krty hai, 
guest_List.push('Atif');

guest_List[2]=new_guest;
for (let i = 0; i<guest_List.length; i++) {
   
    console.log('Dear'+ guest_List[i] + ',\n\n it is our pleasure to invite you in  our party.\n\n thank you!');
        
    }
console.log('\n sorry we can  not arrange big table , only Two people will be invited,');
//while se ek ek kar guest list remove karskty hai...
while(guest_List.length>2){
   let remove_guest= guest_List.pop();
   console.log(`sorry Dear . ${remove_guest},  your not invited for dinner`);

}
for (let i = 0; i<guest_List.length; i++) {
   
    console.log('Dear'+ guest_List[i] + ',\n\n you will still invited.\n\n')
    }
    //yaha se meina sb array remove kardie hai
guest_List.splice(0, 2);


