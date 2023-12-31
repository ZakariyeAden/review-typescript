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


type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

// Objects
let employee: Employee = { 
  id: 1,
  name: '',
  retire: (date: Date) => {
    console.log(date);
  }
};
// Union Types
function kgToLbs(weight: number | string){
  // Narrowing
  if(typeof weight === 'number')
    return weight * 2.2;
  else 
    return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');

// Intersection type
let weight: number & string;

type Drabbable = {
  drag: () => void
}
type Resizeable = {
  resize: () => void
};
type UIWidget = Drabbable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {} 
}

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity:  Quantity = 100;

type Metric = 'cm' | 'Inch';


// Nullable
function greet(name: string | null | undefined){
  if(name)
  console.log(name.toUpperCase());
  else
  console.log('Hola');
}

greet(null)


type Customer = {
  birthday: Date
}

function getCustomer(id: number){
  return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0);
if(customer !== null && customer !== undefined)
// Optional property access operator
console.log(customer?.birthday.getFullYear());


// Optional property access operator
// customers?.[0]

// Optional call
let log: any = null;

log?.('a');