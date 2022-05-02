console.log ('----#4')

function addition(num1, num2) {
  return (num1 + num2);
}
let result1 = addition(5, 6);
console.log(result1);

function subtraction(num1, num2) {
  return (num1 - num2);
}
let result2 = subtraction(25, 19);
console.log(result2);

function multiplication(num1, num2) {
  return (num1 * num2);
}
let result3 = multiplication(5, 5);
console.log(result3);

function division(num1, num2) {
  return (num1/num2);
}
let result4 = division(9, 3);
console.log(result4);

console.log ('-----#5')

function numberUp(num) {
    let i = 1
    while (i <= num) {
        console.log(i);
        i++;
    }
}
let result5 = numberUp(7);

console.log ('------#6')

function numberDown(num) {
    while (num >= 1) {
        console.log(num);
        num--;
    }
}
let result6 = numberDown(9);

console.log ('-------#7')
function paw(x, n) {
    let k = x
    while (n > 1) {
          k = k*x;
          n--;
    }
    console.log(k);
}
let result7 = paw(9, 2);

console.log('--------#8');
function isBigger(num1, num2) {
    console.log(num1 > num2);
}
let result8 = isBigger(5, -1);

console.log('---------#9');
function isSmaller(num1, num2) {
    console.log(num1 < num2);
}
let result9 = isSmaller(5, -1);