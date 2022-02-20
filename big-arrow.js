const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multiplyResult = multiply(4, 12, 3);

const tenTimes = (num) => num * 10;
const output = tenTimes(17)

const fiveTimes = num => num * 5;
const output2 = fiveTimes(17);

const getName = () => 'Brandon Sam';
const name = getName();


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);

document.getElementById('my-button').addEventListener(event => {

})



const sum = (num1, num2) => num1 + num2;
const sum = (num1, num2, num3) => {
    const sum = num1 + num2;
    const diff = sum - num3;
    return diff;
}