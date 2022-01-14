const reverseString = function(str) {
    word = '';
    let newStr = str;

    for(let i = str.length; i > 0; i--)
    {
        lastLetter = newStr.slice(i - 1);
        newStr = str.slice(0, i-1);
        word += lastLetter;        
    }
    
    return word;
};

// Do not edit below this line
module.exports = reverseString;
