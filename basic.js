// variable
var deposite = 400;
// condition 
if (deposite > 500) {

}
if (deposite < 200) {

}
if (deposite == 500) {

}
if (deposite != 500) {

}
if (deposite <= 500) {

}
if (deposite >= 500) {

}

// Array
const numbers = [45, 65, 98, 598, 4658, 1, 365];
const numberCount = numbers.length;
numbers.pop();
numbers.push(34);
numbers[2] = 555;
// checking is 456 is in the array 
if (numbers.indexOf(456) != -1) {

}
if (numbers.includes(456)) {

}

// loop 
// while , for 
for (const number of numbers) {

}

// function 
function getFullName(firstName, lastName) {
    const name = firstName + ' ' + lastName;
}

const person = getFullName(Rahim, Ali);

// object 
const bottle = {
    size: '1.5 Litter', color: 'red', price: 70, contain: 'water'
}