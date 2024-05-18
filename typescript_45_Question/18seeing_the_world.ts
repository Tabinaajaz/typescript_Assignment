//store the location in the array. make sure  your not use alphabetical order.

let places : string []=['islambad','Eifel Tower','makah','agra','maree'];
//print your array in  its original order

console.log('original' + places);
//prinnt  your array in alphabetical order without modifiying the actual list.

console.log('copy'+[...places].sort());//3dot ki hlep copy bana ggi hai

//show that  your array is still  in its original  order by printing it.
console.log('original' + places);

//yaha per hum na reverse kardie hai
console.log('copy'+[...places].sort().reverse());


console.log('original' +places);

//yaha reverse kardie apny array ko
console.log('original' +places.reverse());

//again yaha per retrun kardie apny original order me 
console.log('original' +places.reverse());


console.log('original' +places.sort());

console.log('original' +places.sort().reverse());










