// break up with var 
let balance = 1240;
balance = 1340;


const userName = 'jaan pakhi potas potas';
const weTogather = 'ami ' + userName;
// console.log(weTogather);
// userName = 'Moyna Pakhi'


const numbers = [45, 69, 56, 85, 25];
// numbers = [555]; not allowed
numbers.push(555);
numbers[1] = 333;
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(number);
    sum = sum + number;
    console.log(sum);
}

const student = { roll: 101, name: 'mofiz', job: 'intern' };
student.name = 'Mofazzol';
// student = { name: 'mofazzol' }; reassing is not allowed
