let n1 = Number(prompt("Digit the first number"))
let n2 = Number(prompt("Digit the second number"))

let sum = n1 + n2
let OddorEven = sum % 2;
let subtraction = n1 - n2
let multiplication = n1 * n2
let division = n1 / n2
let remainder = n1 % n2

if(n1 == n2) {
    alert(`The number ${n1} and ${n2} are equal`)
}
alert(`The sum of both numbers is ${sum}`);
if(OddorEven == 0) {
    alert(`Your sum, ${sum} is an even`)
} else {
    alert(`Your sum, ${sum} is an odd`)
}
alert(`The subtracion of both numbers is ${subtraction}`);
alert(`The multiplication of both numbers is ${multiplication}`);
alert(`The division of both numbers is ${division.toFixed(1)}`);
alert(`The remainder of both numbers is ${remainder}`);