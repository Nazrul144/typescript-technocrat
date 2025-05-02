// //Function in Typescript:

// //Normal Function
// //Arrow Function

// function  add(num1: number, num2: number = 100): number{
//     return num1 + num2;
// }
// add(10,20)

// const sum = (num1: number, num2: number): number =>  num1 + num2;

// sum(20,30);

// //Object --> function = method. If any function is written in the object this time it's called method.

// const poorUser = {
//     name: 'Nazrul',
//     balance: 0,
//     addBalance(balance: number): string{
//         return `My balance is: ${this.balance + balance}`
//     }

// }

// const arr = [1,2,3,4,5];

// const newArr: number[] = arr.map((element: number): number => element*element)

const add = (num1: number, num2:number): number=> num1 + num2;

add(10,20)