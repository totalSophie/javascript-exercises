const add = function(a, b) {
  return (parseInt(a) + parseInt(b));
	
};

const subtract = function(a, b) {
	return (parseInt(a) - parseInt(b));
};

const sum = function(arr) {
	const arraySum = arr.reduce(function sumArray(total, number){return total + number}, 0)
  return arraySum
};

const multiply = function(arr) {
  const arrayMultiply = arr.reduce(function multipyArray(a, b){return a*b})
  return arrayMultiply
};

const power = function(a, b) {
  return (a**b)
	
};

const factorial = function(num) {
	//5 4 3 2 1
  let answer = 1;
  if(num === 0){
    return answer
  }
  else{
    for (let i = num; i > 0; i--){
      answer = answer * i
    }
    return answer;
  }
  

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
