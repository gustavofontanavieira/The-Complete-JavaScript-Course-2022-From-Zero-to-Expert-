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
/* const calcAge = function(birthYear) {
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
console.log(yearsUntilRetirement(1970, 'Mike')) */



//CODING CHALLENGE #1 =============================================================================================================
/* 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores 
*/

/* const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3


const checkWinner = function(avgDolhins, avgKoalas){
    if(avgDolhins >= (avgKoalas * 2)) {
        return `Dolhins win (${avgDolhins} vs. ${avgKoalas})`
    } else if ( avgKoalas >= (avgDolhins * 2)) {
        return `Koalas win (${avgKoalas} vs. ${avgDolhins})`
    } else {
        return `No team wins!`
    }
}

console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27))) */


//INTRODUCTION TO ARRAYS ========================================================================================================
/* const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);
 const years = new Array(1991, 1984, 2004, 2020)
 
console.log(friends[0])
console.log(friends[2])

console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018]
const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
 
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages) */


//ARRAYS METHODS =======================================================================================================
/* const friends = ['Michael', 'Steven', 'Peter']
//add elements
friends.push('Jay')
 console.log(friends)

 friends.unshift('John')
 console.log(friends)

 //remove elements
 friends.pop()
 console.log(friends)

 friends.shift()
 console.log(friends)

 //retorna a posição do elemento pesquisado
 console.log(friends.indexOf('Bob'))

 friends.push(23)
 console.log(friends.includes('Steven'))
 console.log(friends.includes('Bob'))
 console.log(friends.includes('23'))

 if(friends.includes('Peter')) {
    console.log('You have a friend called Peter')
 } else {
    console.log('You doenst have a friend called Petter')
 } */


 //CODING CHALLENGE #2 =======================================================================================================
 /*
 Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)
 */

/* function calcTip(value) {
    return value >= 50 && value <= 300 ? value * 0.15 : value * 0.20
}

const bills = [125, 555, 44]
const tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(total) */


//INTRODUCTION TO OBJECTS ========================================================================================================
/* const gustavoArray = [
    'Gustavo',
    'Fontana',
    2022 - 2004,
    'Student'
    ['Max', 'Murillo', 'Yuu']
]

const gustavo = {
    firstName: 'Gustavo',
    lastName: 'Fontana',
    age: 2022 - 2004,
    ocupation: 'student',
    friends: ['Max', 'Murillo', 'Yuu']
} */

//DOT VC BRACKET NOTATION =========================================================================================================
/* const gustavo = {
    firstName: 'Gustavo',
    lastName: 'Fontana',
    age: 2022 - 2004,
    ocupation: 'student',
    friends: ['Max', 'Murillo', 'Yuu', 'hmm']
}
console.log(gustavo)
console.log(gustavo.lastName)
console.log(gustavo['lastName'])

const nameKey = 'Name';
console.log(gustavo['first' + nameKey])
console.log(gustavo['last' + nameKey])

const interestedIn = prompt('What do you want to know about Gustavo? Choose between: firstName, lastName, age, ocupation, and friends')

if(gustavo[interestedIn]) {
    console.log(gustavo[interestedIn])
} else {
    console.log('wrong request, choose between: firstName, lastName, age, ocupation, and friends ')
}

gustavo.location = 'Brazil';
gustavo['twitter'] = '@fvKagami';
console.log(gustavo)

//MINI CHALLENGE
//'Gustavo has 3 friends, and his best friend is called hmmm'
console.log(`${gustavo.firstName} has ${gustavo.friends.length} and his best 
friend is called${gustavo.friends[gustavo.friends.length - 1]}`) */


//OBJECT METHODS ==========================================================================================================
/* const gustavo = {
    firstName: 'Gustavo',
    lastName: 'Fontana',
    birthYear: 2004,
    ocupation: 'student',
    friends: ['Max', 'Murillo', 'Yuu', 'hmm'],
    hasDriverLicense: true,
    //calcAge: function(birthYear){
   //     return 2037 - birthYear
    //}
    //calcAge: function(){
    //    console.log(this)
    //    return 2037 - this.birthYear
    //} 
    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age
    },
    getSummary: function(){
        return `${gustavo.firstName} is ${gustavo.calcAge()} old ${gustavo.ocupation}, and he has ${gustavo.hasDriverLicense ? `a` : `no`} drivers license`
    }
}

console.log(gustavo.calcAge())
console.log(gustavo.age)
console.log(gustavo['calcAge'](2004))

//CHALLENGE
//"Gustavo is N years old ocupation, and he has a/no drivers license"
console.log(gustavo.getSummary()) */


//CODING CHALLENGE 3 ==========================================================================================================
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall
*/
/* const mark = {
    fullNmame: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}

const john = {
    fullNmame: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}

mark.calcBMI()
john.calcBMI()

console.log(`${john.BMI > mark.BMI ? `${john.fullNmame} BMI (${Math.floor(john.BMI)}) is higher than Marks (${Math.floor(mark.BMI)})` :
`${mark.fullNmame} BMI (${Math.floor(mark.BMI)}) is higher than Johns (${Math.floor(john.BMI)})` }`) */



//Iteration: The for Loop ==========================================================================================================
/* for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}
 */

//looping Arrays, Breaking and Continuing ===================================================================================================
/* const gustavoArray = [
    'Gustavo',
    'Fontana',
    2022 - 2004,
    'Student',
    ['Max', 'Murillo', 'Yuu']
]

const types =  [];

for(let i = 0; i < gustavoArray.length ; i++) {
    console.log(gustavoArray[i], typeof gustavoArray[i])

    //Filling types array
    //types[i] = typeof gustavoArray[i]
    types.push(typeof gustavoArray[i])
}

console.log(types)
const years = [1991, 2007, 1969, 2020]
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i])
}

console.log(ages)


//CONTINUE AND BREAK
console.log("--------- ONLY STRINGS ----------")
for(let i = 0; i < gustavoArray.length ; i++) {
    if(typeof gustavoArray[i] !== 'string') continue
    console.log(gustavoArray[i], typeof gustavoArray[i])
}

console.log("--------- BREAK WITH NUMBER  ----------")
for(let i = 0; i < gustavoArray.length ; i++) {
    if(typeof gustavoArray[i] === 'number') break
    console.log(gustavoArray[i], typeof gustavoArray[i])
}
 */


// Looping Backwards and Loops in Loops ===================================================================================================
/* const gustavoArray = [
    'Gustavo',
    'Fontana',
    2022 - 2004,
    'Student',
    ['Max', 'Murillo', 'Yuu']
]

for(let i = gustavoArray.length - 1; i >= 0; i --) {
    console.log(gustavoArray[i])
}

for(let exercise = 1; exercise <= 4; exercise++){
    console.log(`====== STARTING EXERCISE ${exercise}`)

    for (let rep = 1; rep <= 6; rep++) {
        console.log(`Lifting weigth repetition ${rep}`)
    }
} */



// WHILE LOOP ===============================================================================================================================
//This loop will continue while the condition is true
/* let rep  = 1;
while(rep <= 10) {
    console.log(`Lifting weight, repition ${rep} 🏋️‍♀️`)
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1
while( dice !== 6 ){
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
}

console.log(dice) */


//CODE CHALLENGE #4 ===============================================================================================================================
/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []



    for (let i = 0; i <= bills.length - 1; i++){
        function calcTip() {
            if( bills[i] >= 50 && bills[i] <= 300 ){
                tips.push(bills[i] * 0.15)
                totals.push(bills[i] + tips[i])
            } else {
                tips.push(bills[i] * 0.20)
                totals.push(bills[i] + tips[i])
            }
        }
        calcTip()
    }


    const calcAverage = function(arr){
        let sum = 0;
        for(let i = 0; i < arr.length; i++ ) {
            sum += arr[i]
        }
        return sum / arr.length
    }

    console.log(calcAverage(totals))
console.log(tips)
console.log(totals)