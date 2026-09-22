const repeatString = function(str,num) {
    let repeatString = '';
    if(num < 0){
        repeatString = 'ERROR';
    }
    for (let i = 0; i < num; i++) {
        
        if(str === "" || num === 0){
            repeatString = str;
            break;
        }
        else {
        repeatString += str;
        };
        
};
return repeatString;
}
console.log("hello world");

// Do not edit below this line
module.exports = repeatString;
