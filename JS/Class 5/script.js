// const arr = [20, 59, 76, 84, 11, 2, 76, 4, 6, 100, 76];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Array methods:  MRF

// M -> map
// r -> reduce
// f -> filter

// let result = arr.map((item) => {
//     return item * 2
// })

// console.log(result);

// let result = arr.filter((item) => item == 100)

// console.log(result);

// const arr = [20, 59, 76, 84, 11, 2, 76, 4, 6, 100, 76];

// let result = arr.reduce((prev, curr) => (prev + curr))

// console.log(result);

/*

    Looping statements:

    1. for loop
    2. while loop
    3. do...while

    4. MRF
    5. for in
    6. for of
    7. forEach


*/

// const fruits = ["apple", "banana", "orange", "grapes", "watermelon"];

// fruits.map((item) => console.log(item))

// for(let i in fruits) {
//     console.log(fruits[i]);
// }

// for(let item of fruits) {
//     console.log(item);
// }

// fruits.forEach((item) => {
//     console.log(item);
// })

// Objects:

// let student1 = {
//     name: "raj",
//     age: 25,
//     mobile: 9876543212,
//     email: "raj@gmail.com"
// }

// console.log(student1.mobile);

// Class:

// class Car {
//     constructor(name, model) {
//         this.name = name,
//         this.model = model
//     }
// }

// let rajCar = new Car("Volvo", 2023);
// let samCar = new Car("BMW", 2020);
// let raviCar = new Car("Hyundai", 2010);

// console.log(rajCar);
// console.log(samCar);
// console.log(raviCar);

// Call, Apply

// const person = {
//     fullName: function(state, country) {
//         return this.firstName + " " + this.lastName + " " + state + " " + country
//     }
// }

// const person1 = {
//     firstName: "ravi",
//     lastName: "kumar"
// }

// const person2 = {
//     firstName: "ram",
//     lastName: "selvan"
// }

// console.log(person.fullName.apply(person2, ["TN", "India"]));

// Promise:

async function fname() {
  const myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    if (x == 0) {
      myResolve("Okay");
    } else {
      myReject("Something went wrong");
    }
  });

  let result = await myPromise
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });

  console.log(result);
}


fname();