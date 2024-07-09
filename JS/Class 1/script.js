// varible

// a = 10;

// console.log(a);

// Datatypes:

/*

number -> 10, 5.3
string -> "hi", "hello"
boolean -> true, false
undefined
null
Nan

*/

// Versions:

// 2009 - 2015 -> ES5 -> Ecma script
// 2015 - curr -> ES6

// Scoping:

// var -> ES5

// var a = 10;

// var a = 20;

// console.log(a);

// let

// let b = 50;

// b = 300;

// b = 500;

// console.log(b);

// const

// const c = 10;

// console.log(c);

// Operators:

/*

    1. Arithmetic op

    (+, -, *, /, %, **, ++, --)

    2. Assignment op

    (=, +=, -=, *=, /=, %=, **=)

    3. Comparison op

    (==, ===, !=, !==, >, >=, <, <=)

    4. Logical op

    (&&, ||, !)

    &&:

    (true)  && (true)  -> true
    (true)  && (false) -> false
    (false) && (true)  -> false
    (false) && (false) -> false

    ||:

    (true)  || (true)  -> true
    (true)  || (false) -> true
    (false) || (true)  -> true
    (false) || (false) -> false

    !:

    (true) -> false
    (false) -> true
    

    5. Bitwise op

    (&, |, ~, ^, >>, <<)

    &:

    (1)  & (1)  -> 1
    (1)  & (0)  -> 0
    (0)  & (1)  -> 0
    (0)  & (0)  -> 0

    |:

    (1)  | (1)  -> 1
    (1)  | (0)  -> 1
    (0)  | (1)  -> 1
    (0)  | (0)  -> 0

    ~:

    (1) -> -1

    ^:

    (1)  ^ (1)  -> 0
    (1)  ^ (0)  -> 1
    (0)  ^ (1)  -> 1
    (0)  ^ (0)  -> 0


    6. Ternary op

    (condition) ? true : false;

    7. Type op

*/

// 1. Arithmetic op -> (+, -, *, /, %, **, ++, --)

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

// 2. Assignment op  -> (=, +=, -=, *=, /=, %=, **=)

// let a = 10;

// a += 5;     // a = a + 5;
// a -= 5;     // a = a - 5;
// a *= 5;     // a = a * 5;
// a /= 5;     // a = a / 5;
// a %= 5;     // a = a % 5;
// a **= 5;     // a = a ** 5;

// console.log(a);

// 3. Comparison op  -> (==, ===, !=, !==, >, >=, <, <=) -> (true, false)

// let age = 20;

// let answer;

// answer = (age == 20);
// answer = (age === 20);
// answer = (age != 20);
// answer = (age !== "20");
// answer = (age >= 18);
// answer = (age <= 18);

// console.log(answer);

// &&:

// let age = 20;

// let result;

// // result = (age == 20) && (age > 18);
// result = (age != 20) || (age > 18);

// console.log(!result);

//  5. Bitwise op  -> (&, |, ~, ^, >>, <<)

// let age = 20;

// let result;

// result = (age == 20) & (age > 18);
// result = (age == 20) | (age < 18);
// result = (age != 20) ^ (age < 18);

// let a = 7

// result = 7 << 2;
// result = 7 >> 2;

// console.log(result);


// (7)   -> 0000 0111

// ((1)) -> 0000 0011
// ((2)) -> 0000 0001 -> 1

let age = 10;

let result = (age >= 18) ? true : false;

console.log(result);