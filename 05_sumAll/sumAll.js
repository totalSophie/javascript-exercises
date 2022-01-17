const sumAll = function(num1, num2) {
    let args = [...arguments];
    let first_num = args[0];
    let second_num = args[1];
    let sum = 0;

    if (first_num < 0 || second_num < 0 || Number.isInteger(first_num) == false || Number.isInteger(second_num) == false){
        return 'ERROR';
    }
    if (first_num < second_num){
        for(let i = first_num; i <= second_num; i++){
            sum += i;
        }
    }
    else{
        for(let i = second_num; i <= first_num; i++){
            sum += i;
        }
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
