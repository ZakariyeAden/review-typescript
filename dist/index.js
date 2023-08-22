"use strict";
console.log('Hello World');
let age = 20;
if (age <= 50) {
    age += 10;
    console.log(age);
}
let sales = 1234567890;
let course = 'TypeScript';
let is_Published = false;
let level;
function render(document) {
    console.log(document);
}
let numbers = [6, 5, 6, 6];
let numbersAny = [];
let user = [1, 'Zakariye'];
user.push(1);
;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.3;
    return income * 1.3;
}
calculateTax(10_000, 2022);
let employee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
//# sourceMappingURL=index.js.map