const fs = require('fs');



const allFileContents = fs.readFileSync('input', 'utf-8');
var lengthOfBinary;

var mostCommon = [];
var splitContents = allFileContents.split(/\r?\n/)

var lengthOfBinary = splitContents[0].length;


for(var i = 0; i < lengthOfBinary; i++){
    mostCommon.push(0);
}
var binaryNumbers = splitContents.length

splitContents.forEach((line)=>{
    for(var i = 0; i < lengthOfBinary; i++){
        if(line[i]){
            mostCommon[i] += parseInt(line[i])
        }
       
    }
}
);
var gammaRate = "";
var epsilonRate = "";
for(var i = 0; i < lengthOfBinary; i++){
    if(mostCommon[i] / binaryNumbers > .5){
        mostCommon[i] = 1;
    }else{
        mostCommon[i] = 0;
    } 
    gammaRate += mostCommon[i]
    epsilonRate += mostCommon[i] == 1 ? '0' : '1'
}

var gammaDecimal = parseInt(gammaRate,2)
var epsilonDecimal = parseInt(epsilonRate,2)

console.log(gammaDecimal * epsilonDecimal)

