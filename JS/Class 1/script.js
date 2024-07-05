// 2009 - 2015 -> ES5 (Ecma script)
// 2015 - pursuing -> ES6 (Ecma script)

// Varibales

// a = 5;

// console.log(a);

// Datatypes

/*

    1. number -> 10, 20, 10.5
    2. string -> "hello"
    3. boolean -> true, false
    4. undefind
    5. null
    6. Nan -> Not a number

*/

// Variable Declaration

// var -> ES5

// var a = 10;

// var a = 200;

// console.log(a);

// let -> ES6


// let b;

// b = 20;

// b = 500;

// console.log(b);

// const

// const x = 10;

// x = 100;

// console.log(x);

// Scoping

/* 

    1. Global scope -> var
    2. Local scope --> let, const

*/



// {

//     let a = 10;
//     console.log("inside: ", a);
// }

// console.log("outside: ", a);

// {
//     {
//         {
//             const a = 5;
//             {
//                 {
//                     {
//                         {
//                             console.log(a);
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     console.log(a);
// }

// let a=null;

// console.log(a);

// Operators:

/*

    1. Arithmetic op

    (+, -, *, /, %, **, ++, --)

    2. Assignment op

    (=, +=, -=, *=, /=, %=)

    3. Comparison op

    (==, ===, !=, !==, <, >, <=, >=)

    4. Logical op
    5. Bitwise op
    6. Ternary op
    7. Type op

*/

// 1. Arithmetic op --> (+, -, *, /, %, **, ++, --)

// let a = 10;
// let b = 20;

// let result;

// result = a + b;
// result = a - b;
// result = a * b;
// result = a / b;
// result = a % b;
// result = a ** 3;
// result = ++a;
// result = --a;

// console.log(result);

// 2. Assignment op --> (=, +=, -=, *=, /=, %=)

// let x = 10;

// x += 5;    // x = x + 5;
// x -= 5;    // x = x + 5;
// x *= 5;    // x = x + 5;
// x /= 5;    // x = x + 5;
// x %= 5;    // x = x + 5;

// console.log(x);

// 3. Comparison op --> (==, ===, !=, !==, <, >, <=, >=) -> Boolean

let age = "20";

let result = (age == 20);
// let result = (age === 20);
// let result = (age != "20");
// let result = (age !== 20);


// let result = (age > 18);
// let result = (age >= 18);
// let result = (age <= 18);



console.log(result);