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
/* const inputYear = '1991';
console.log(Number(inputYear), inputYear)
console.log(inputYear + 18)
console.log(Number('Gustvo'))

console.log(String(23)) */


//TYPE COERCION
//O JavaScript já faz a função de alterar o tipo de dado, sem precisar ir e definir isso
/* console.log('I am ' + 23 + ' years old') // I am 23 years old
//nesse caso o + irá transformar em string

//já o - irá transformar em número
console.log('23' - '10' - 3)//10
console.log('23' + '10' + 3)//32103
console.log('23' * '2')

let n = '1' + 1;
n = n - 1;
console.log(n)//10

console.log(2+4+3+'5')// '95'
console.log('10'-'4'-'3'-2+'5')// '15' */

// 5 Falsy values
//0, '', undefined, null, NaN
//Todo o resto corresponde a truthy values
/* console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Gustavo'))
console.log(Boolean({}))
console.log(Boolean(''))

//na prática
const money = 0;
if (money) {
    console.log("Dont spend it all")
} else {
    console.log("You should get a job")
}

let height;
if (height) {
    console.log("YAY! height is defined")
} else {
    console.log("Heihgt is undefined")
} */


//EQUALITY OPERATORS == VS === --------------------------------------------------------------------
/* const age = '18';
if (age === 18) console.log("You just became an adult! (strict/rigoroso)")

if (age == 18) console.log("Your just became an adult! (loose/solto)")

//RECOMENDA-SE COMO BOA PRÁTICA SEMPRE UTILIZAR OS === JÁ QUE O == PODE GERAR BUGS POR CONTA DO TYPE COERSION DO JAVASCRIPT
const favourite = Number(prompt("Whats your favourite number?"))
console.log(favourite)
console.log(typeof favourite)

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number")
} else if (favourite === 7){
    console.log("7 is also a cool number")
} else if (favourite === 9) {
    console.log("9 is also a cool number")
} else {
    console.log("The number who you typed is not cool")
}

if (favourite !== 23) console.log('Why not 23?') */


//BOOLEAN LOGIC - pratice------------------------------------------------------------------------------------------------
/* const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision)//true
console.log(hasDriverLicense || hasGoodVision)//true
console.log(!hasDriverLicense)//false

const shouldDrive = hasDriverLicense && hasGoodVision

if (shouldDrive) {
    console.log("Sarah is able to drive!")
} else {
    console.log("Someone else should drive...")
}

const isTired = true // C
console.log(hasDriverLicense && hasGoodVision && isTired)


if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!")
} else {
    console.log("Someone else should drive...")
} */


//CODING CHALLENGE 3
/* There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */
/*
const averageDolphinsScore = (66 + 66 + 66) / 3;
const averageKoalasScore = (100 + 105 + 50) / 3;

if ( averageDolphinsScore >= 100 || averageKoalasScore >= 100) {
if ( averageDolphinsScore > averageKoalasScore) {
    console.log(`The gymnastic team Dolphins win with ${Math.floor(averageDolphinsScore)} points`)
} else if ( averageDolphinsScore < averageKoalasScore) {
    console.log(`The gymnastic team Koalas win with ${Math.floor(averageKoalasScore)} points`)
} else if ( averageDolphinsScore === averageKoalasScore && averageDolphinsScore >= 100) {
    console.log(`the points are tied`)
} /* else {
    console.log('the tied only happens if both teams score more than 100 points')
} } else {
    console.log("The minimum score is 100 points, no one wins the trophy")
}

//JEITO JEITO NO CURSO
if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= 100) {
    console.log('Dolphins win the trophy')
} else if (averageKoalasScore > averageDolphinsScore && averageKoalasScore >= 100) {
    console.log('Koalas win the trophy')
} else if ( averageDolphinsScore === averageKoalasScore && verageDolphinsScore >= 100 && averageKoalasScore >= 100) {
    console.log('Both win the trophy')
} else {
    console.log('No one wins the trophy')
} */


//SWITCH STATEMENT
/* const day = 'wednesday'

switch(day) {
    case 'monday':
        console.log('Its monday')
        console.log('Go to study programming')
    break;

    case 'tuesday':
        console.log('Its tuesday')
        console.log('Go to study and later go play some videogames')
    break;

    case 'wednesday':
    case 'thursday':
        console.log('Write code');
    break;

    case 'friday':
        console.log('Play league of legends')
    case 'saturday':
    case 'sunday':
        console.log('Sleep')
    break;

    default:
        console.log('Not a valid day')
}

//DENTRO DO IF
if(day === 'monday') {
    console.log('Plan course structure')
    console.log('Go to coding meetup')
} else if (day === 'tuesday') {
    console.log('Prepare theory videos')
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples')
} else if (day === 'friday') {
    console.log('Record vídeos')
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weeekend')
} else {
    console.log('Not a valid day')
} */


//EXPRESSIONS AND STATEMENTS
//EXPRESSIONS (expressões) é todas as parte de um código que produz um valor
/* 3 + 4 //expression
1991 //expression
true && false && !false //expression

//statements
if (23 > 10) {
    const str = '23 is bigger'
}

const me = 'Gustavo'
console.log(`Im ${2037 - 2004} years old ${me}`)
//dentro desse template é necessário uma expression, se tentarmos colocar um statement como um if e else, o javascript vai reclamar
//e vai pedir uma expression */


//CONDITIONAL (TERNARY) OPERATOR
/* const age = 23
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧')

const drink = age >= 18 ? 'wine 🍷' : ' water 💧'
console.log(drink)

let drink2;
if (age >= 20){
    drink2 = 'wine 🍷'
} else {
    drink2 = ' water 💧'
}

console.log(drink2)
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : ' water 💧'}`) */


//CODE CHALLENGE 4 ------------------------------------------------------------------------------------------------------------------
/* Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300  */

const billValue = 430;
const tip = billValue >= 50 && billValue <= 300 ? (billValue / 100) * 15 : (billValue / 100) * 20;

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`)
