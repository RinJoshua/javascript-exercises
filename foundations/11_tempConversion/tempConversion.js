const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32) * 5/9;
  if(Number.isInteger(cTemp)){
    return cTemp;}
    
  return cTemp.toFixed(1);
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = (cTemp * 1.8) +32;
  if(Number.isInteger(fTemp)){
    return fTemp;
  }
  return fTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
