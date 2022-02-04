//const { TestScheduler } = require("jest");
const findTheOldest = function(arr) {
    let name
    let max = 0

    for (let i = 0; i < arr.length; i++){
        if (!arr[i].yearOfDeath){
            let age = new Date().getFullYear() - arr[i].yearOfBirth
            if (age > max){
                max = age
                name = arr[i]
            }
        }

        else{
            let age = arr[i].yearOfDeath - arr[i].yearOfBirth 
            if (age > max){
                max = age
                name = arr[i]
            }
            }       

    }

    return name;
    
    
};

// Do not edit below this line
module.exports = findTheOldest;

