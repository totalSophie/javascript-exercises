const fibonacci = function(num) {
    let arrayNumbers = [0, 1,1]
    num = parseInt(num);
    if (num < 0){
        return 'OOPS';
    }

    else if (num == 0 || num == 1){
        let fibNumber = 1;
        return fibNumber;
    }

    else{
        for (let i = 2; i < (num); i++)
        {
            newFibNumber = arrayNumbers[i] + arrayNumbers[(i-1)]
            arrayNumbers.push(newFibNumber)
        }
        
        return arrayNumbers[num];
    }
    

}


// Do not edit below this line
module.exports = fibonacci;