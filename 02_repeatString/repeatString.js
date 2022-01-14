const repeatString = function(word, num) {
    let concatanatedWord = '';
    if (num < 0){
        return ('ERROR')
    }
    
    for (let i = 0; i < num; i++){
        concatanatedWord += word;
    }

    return concatanatedWord;

};

// Do not edit below this line
module.exports = repeatString;
