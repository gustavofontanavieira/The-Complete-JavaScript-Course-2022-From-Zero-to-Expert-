'use strict';

//Stric mode =============================================================================================================
/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive') */

//const interface = 'Audio';
//const if = 'wtf'

//Functions ==============================================================================================================
/* function logger() {
    console.log("My name is Gustavo")
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice) 
console.log(fruitProcessor(5, 1))

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice) */


//FUNCTION DECLARATIONS VS EXPRESSIONS ======================================================================================================
//FUNCTION DECLARATIONS
/* const age1 = calcAge1(1991);
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

console.log(age1)

//FUNCTION EXPRESSION
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2) */


//ARROW FUNCTIONS =====================================================================================================================
/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} year!`
}

console.log(yearsUntilRetirement(2004, 'Gustavo')) */


//FUNCTION CALLING OTHER FUNCTIONS ===================================================================================================
/* function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}
console.log(fruitProcessor(2, 3)) */



//REVIEWING FUNCTIONS ==========================================================================================================
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear)
    const retirement = 65 - age;
    if (retirement > 0 ) {
        console.log(`${firstName} retires in ${retirement} years!`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired `)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1970, 'Mike'))