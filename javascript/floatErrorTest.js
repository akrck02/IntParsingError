


const errorNumber = 0.0000005;

const res = parseInt(0.5);
const resFail = parseInt(errorNumber);

const floatRes = parseFloat(0.5);
const floatResFail = parseFloat(errorNumber);
const parsedError = parseFloat(errorNumber);

console.log("--- INTEGER MODE ---");
console.log("0.5", res);
console.log("0.0000005", resFail);

console.log("--- FLOAT MODE ---");
console.log("0.5", floatRes);
console.log("0.0000005", floatResFail);

console.log("--- INT PARSED FROM FLOAT MODE ---");
console.log("Error parsed: ", parsedError);
console.log("Error parsed to int", parseInt(parsedError));

const myFloat = 0.00000005;
const myInt = Math.trunc(myFloat);

console.log("--- MAGIC AND UNICORNS MODE ---");
console.log("myFloat: ", myFloat);
console.log("myInt: ", myInt);