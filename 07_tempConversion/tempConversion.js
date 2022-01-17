const ftoc = function(farenheit) {
  let celcius = (farenheit - 32) * 5/9;
  if (celcius % 1 === 0){
    return celcius;
  }
  else{
    return parseFloat(celcius.toFixed(1));
  }
};

const ctof = function(celcius) {
  let farenheit = celcius * 9/5 + 32;

  if (farenheit % 1 === 0){
    return farenheit;
  }
  else{
    return parseFloat(farenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
