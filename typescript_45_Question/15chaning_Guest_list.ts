// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14.
// Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person
// you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
let guest_List: string[] = ["Aisha","Alina","Haider"];
//for loop
for (let i = 0; i < guest_List.length; i++) {
console.log('Dear'+ guest_List[i] + ',\n\n it is our pleasure to invite you in  our party.\n\n thank you!');
    
}

let absent_guest : string ="Haider";
let new_guest: string ="yousuf";
//meina yaha  guest name change krna lie 
// guest_list ke index num =  hai new_guest equal 

guest_List[2]=new_guest;
for (let i = 0; i<guest_List.length; i++) {
   
    console.log('Dear'+ guest_List[i] + ',\n\n it is our pleasure to invite you in  our party.\n\n thank you!');
        
    }
    
console.log(`${absent_guest} is not coming  to the party.`);