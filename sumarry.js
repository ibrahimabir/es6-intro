// let and const 
let priyoPerson = 'Rahim Katun';;
priyoPerson = 'Aleya Banu';
const hubby = 'Akbor the great';
// default parameter
function calculate(x, y, z = 0) {

}

// template string 
const myPeople = `
My people are${hubby}. I want to beat him.His net worth is ${calculate(10, 200, 500)}.He is the richest person in Bangladesh.My name is ${priyoPerson} .
`
console.log(myPeople);

// arrow function 
const getName = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 500;
const bigArrowFunction = (x, y, z, j) => {
    const first = x + y + z;
    const diff = first - j;
    return diff;
}

// spread opareator
const numbers = [55, 65, 98, 274, 955, 94, 8, 5];
const max = Math.min(...numbers);
console.log(max);