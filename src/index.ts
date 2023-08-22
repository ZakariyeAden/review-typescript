console.log('Hello World');

// Variable
let age: number = 20;
if(age <= 50){
  age += 10;
  console.log(age);
}
// Ts catchs your mistakes!
// age = "string";


// Configuring Typescript


// Fundmantels 
let sales = 1234567890;
let course = 'TypeScript';
let is_Published = false;
let level;

function render(document: any){
  console.log(document);
}


// Arrays
let numbers:number[] = [6,5,6,6];
// Any: should avoid
let numbersAny = [];
// Methods 
// numbers.forEach(n => n.valueOf())

// Tuples
// 1, 'Zakariye
let user: [number, string] = [1, 'Zakariye'];
user.push(1);

// ENUMS

// const small = 1;
// const medimum = 2;
// const large = 3;

const enum Size { Small = 1, Medimum, Large};

let mySize: Size = Size.Medimum;
console.log(mySize);

// Functions
function calculateTax(income: number, taxYear: 2022): number{
  
  if(taxYear < 2022 )
    return income * 1.3;
    return income * 1.3;
  // Undefined
}
calculateTax(10_000,2022);