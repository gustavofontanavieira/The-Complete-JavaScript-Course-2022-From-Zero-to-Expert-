/* let js = 'amazing';
console.log(40+8+23-10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

//evita iniciar variáveis com a primeira letra em CAPS LOCK
let person = 'jonas'

//valores que nunca se alteram é utilizado como constante, evitando assim sobreescrever o valor da variável
const PI = 3.1215;


const country = "Brazil";
let continent = "South America";
let population = 212.6;

console.log(country);
console.log(continent);
console.log(population);

let language = "Portugues"; */

//LECTURE 12 - Data Types------------------------------------------------------

/* let javascriptIsFun = true;
console.log(javascriptIsFun)

//typeof mostra o tipo de dado
console.log(typeof true)//boolean value
console.log(typeof javascriptIsFun)//boolean
console.log(typeof 23)//number
console.log(typeof 'Gustavo')//string

//para sobreescrever o dado não é necessário inicializar a variável novamente
//basta chamar que atribuir um novo valor.
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun)//string

let year;
console.log(typeof year)//undefined
year  = 1991;
console.log(typeof year)//number

console.log(typeof null);//object?????? no caso null seria um "não objeto" */


//LET, CONST AND VAR ----------------------------------------------------------
/* let age = 30; //pode ser alterado futuramente caso utilize o let
age = 31;

const birthYear = 1991; //não pode ser alterado futuramente */


//Basic OPERATORS -----------------------------------------------------------------------
/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2**3)
//2 ** 3 significa 2 elevado a 3 (2 to the power of 3) = 2 * 2 *2

const firstName = 'Gustavo';
const lastName = 'Fontana';
console.log(firstName + " " + lastName)//é recomendado o uso de teamplate string

//dois operadores, = e +
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4 //x = x * 4 = 100
x ++ // x = x + 1
x-- // x = x -1
x--
console.log(x)

//  Comparison operators
console.log(ageJonas > ageSarah)//true
console.log(ageSarah >= 10);//true

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018) */


//OPERATOR PRECEDENCE -----------------------------------------------
/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018)

let x, y;
x = y = 25-10-5; // x = y =  10, x = 10, esquerda pra direita e depois da direita pra esquerda
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); */

//CODING CHALLENGE ----------------------------------------------------
/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall. //TRUE
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. FALSE */

/* const markHeight = 1.69;
const johnHeight = 1.95;
const markMass = 78;
const johnMass = 92;  */
/* 
const markHeight = 1.88;
const johnHeight = 1.76;
const markMass = 95;
const johnMass = 85; 

const markHigherBMI = markMass / (markHeight ** 2) >= johnMass / (johnHeight ** 2)
console.log(markHigherBMI) */

//STRINGS AND TEMPLATE LITERALS
/* const firstName = 'Gustavo'
const ocupations = 'student'
const birthYear = 2004;
const year = 2037;

const gustavo = 'Im ' + firstName + ", a " + (year - birthYear) + " years old " + ocupations + "!"
console.log(gustavo)

const gustavoNew = `Im ${firstName}, a ${(year - birthYear)} years old ${ocupations}!`
console.log(gustavoNew)

console.log(`Just a regular string...`)
console.log('String\nin\nmultiples\nlines') */


//TAKING DECISIONS: IF / ELSE STATEMENTS
/* const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012;
let century
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century) */


//CHALLENGE 2
/* Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)! */

/* const markHeight = 1.69;
const johnHeight = 1.95;
const markMass = 78;
const johnMass = 92;  

/* const markHeight = 1.88;
const johnHeight = 1.76;
const markMass = 95
const johnMass = 85;  */
/* 
const markBMI = markMass / (markHeight ** 2)
const johnBMI = johnMass / (johnHeight ** 2)

if (markBMI > johnBMI){
    console.log(`Marks BMI ${Math.floor(markBMI)} is higher than Johns ${Math.floor(johnBMI)}!`)
} else if (johnBMI > markBMI) {
    console.log(`Johns BMI  ${Math.floor(johnBMI)} is higher than Marks ${Math.floor(markBMI)}!`)
} else {
    console.log(`the BMIS values are equals`)
}  */



//Type conversion and Coercion


//TYPE CONVERSION
const inputYear = '1991';
console.log(Number(inputYear), inputYear)
console.log(inputYear + 18)
console.log(Number('Gustvo'))

console.log(String(23))


//TYPE COERCION
//O JavaScript já faz a função de alterar o tipo de dado, sem precisar ir e definir isso
console.log('I am ' + 23 + ' years old') // I am 23 years old
//nesse caso o + irá transformar em string

//já o - irá transformar em número
console.log('23' - '10' - 3)//10
console.log('23' + '10' + 3)//32103
console.log('23' * '2')

let n = '1' + 1;
n = n - 1;
console.log(n)//10

console.log(2+4+3+'5')// '95'
console.log('10'-'4'-'3'-2+'5')// '15'