
// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name.
//  It should then accept an arbitrary number of keyword arguments. 
//  Call the function with the required information and two other name-value pairs,
//   such as a color or an optional feature.
//    Print the Object that’s returned to make sure all the information was stored correctly.

import { features } from "process";

                                                                                    //param extratype
function carsInformation(manufacturer: string, modelname: string, ...extraoption: {[key :string] : any } []):
Object {
 
    const carinfo={
        manufacturer,
        modelname,
        ...Object.assign({},...extraoption)//target or srouce
        
    }
return carinfo;
    
};
carsInformation('honda','civic', {color:'black'} { features: [  'Navigation' , ' power window']});


