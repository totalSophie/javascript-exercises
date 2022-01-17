const removeFromArray = function(arr, ...numbers) {
    
    let args = [...arguments];

    // Separating the array from the numbers
    list_array = args[0];
    args.shift();
    toBeRemoved = args;

    for (let j = 0; j < toBeRemoved.length; j++){
        for (let i = 0; i < list_array.length; i++){
            if (list_array[i] === toBeRemoved[j]){
                list_array.splice(i, 1);
                i--;
            }
        }
    }
    return list_array;
};

// Do not edit below this line
module.exports = removeFromArray;
