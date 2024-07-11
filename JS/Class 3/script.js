// Arrays:

// let arr = [10, 20, 30, 40, 50.9, 600, "Hello", true, null];

// //         #0  #1  #2   #3  #4    #5    #6      #7    #8......

// arr[2] = 3000;

// console.log(arr);

// console.log(arr.length);

// console.log(arr[4]);

// Objects: {key: value}

// let obj = {name: "ram", age: 23, dept: "IT", mobile: 987654321, email: "ram@gmail.com"}

// obj.name = "Ram kumar";

// console.log(obj);
// console.log(obj.dept);

// Destructure:

// Array destructuring: (Unpacking)

// let fruits = ["banana", "grapes", "apple", "kiwi", "watermelon"];

// const [b, g, a, k, w] = fruits;

// console.log(a);
// console.log(w);
// console.log(g);

// Object destructuring:

// let obj = {name: "ram", age: 23, dept: "IT", mobile: 987654321, email: "ram@gmail.com"}

// const {name, age, dept, mobile, email} = obj;

// console.log(name);
// console.log(age);
// console.log(dept);

// Conditional Statments:

/* 

    1. if stmt
    2. if...else
    3. if...else..if (Laddar if)
    4. switch..case

*/

    // let age = "hello";

    // if (age >= 18) {

    //     console.log("Its greater");

    // } else if (age <= 18) {

    //     console.log("It's Lesser");

    // } else if(age == "hi") {
        
    //     console.log("Equal");
    
    // } else {
    //     console.log("Something went wrong");
    // }


    // switch case

    let day = 12;

    switch(day){
        case "Monday":
            console.log("It's Monday");
            break;
        case "Tuesday":
            console.log("It's Tuesday");
            break;
        case "Wednesday":
            console.log("It's Wednesday");
            break;
        case "Thusday":
            console.log("It's Thusday");
            break;
        case "Friday":
            console.log("It's Friday");
            break;
        case "Saturday":
            console.log("It's Saturday");
            break;
        default:
            console.log("Happy weekend");
            break;
    }