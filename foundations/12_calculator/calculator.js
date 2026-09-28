const add = function(numA, numB) {
  return numA + numB;
	
};

const subtract = function(numA,numB) {
  return numA - numB;
	
};

const sum = function(arr) {
  let sumTotal = 0;
  for(let i = 0; i < arr.length; i++){
    sumTotal += arr[i];

  }
  return sumTotal;
	
};

const multiply = function(arr) {
   let sumTotal = 1;
   length = arr.length;
  for(let i = 0; i < length; i++){
    sumTotal *= arr[i];

  }
  return sumTotal;

};

const power = function(num, pow) {
  let poweredNum = num;
  for(let i = pow ;i > 1 ; i--){
    poweredNum *= num;
  }
  return poweredNum;
	
};

const factorial = function(num) {
  if(num === 0 ){
    num = 1;
    return num;
  }
  let factNum = num;
  for(let i = 1 ;i < num ; i++){
    factNum *= i;
  }
  return factNum;
	
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
