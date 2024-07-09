// Ternary

// let age = "siva";

// let result = (age >= 18) ? "Eligible for Voting" : "Not Eligible";

// console.log(result);

// Type op

// console.log(typeof age);

// Functions:

// DRY -> Don't repeat yourself (code)

// 1. Normal function

// function fname(a, b, name){             // Function Definition
//     console.log(a * b, name);
// }

// fname(50, 5, "ram");
// fname(100, 10, "siva")
// fname(500, 2)

// 2. Ananymous function (Unnamed function)

// let foo = function(n){
//     console.log(n);
// }

// foo("abi")

// 3. Arrow Function: ES6

// let arr = () => console.log("its an arrow");

// arr()

// 4. IIFE Function -> (Immediatly Invoked Function Expression)

// (() => {
//     console.log("hi");
// })()

// function add() {
//     alert("hi")
// }


// Banking

// var balance = 1000;

// const deposite = (amt) => {
//     balance += amt;

//     console.log(balance);
// }

// const widthdraw = (amt) => {
//     balance -= amt;

//     console.log(balance);
// }

// CallBack functions:

function display(result) {
    console.log(result);
}

function add(a, b, display) {
    let result = a + b;

    display(result)
}

add(10, 5, display)


// setTimeout(() => {
//     console.log("hi");
// }, 2000)

// let fname = () => {
//     console.log("hi");
// }

// setInterval(fname, 4000)