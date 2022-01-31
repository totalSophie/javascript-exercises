const palindromes = function (str) {
    let res = str.replace(/[ ,!?".]/g, "");
    res = res.toLowerCase();
    let newWord = '';
    for (let i = (res.length) - 1; i >= 0; i--){
        newWord += res[i]
    }
    if(newWord == res){
        return true
    }
    else{return false}

};

// Do not edit below this line
module.exports = palindromes;
