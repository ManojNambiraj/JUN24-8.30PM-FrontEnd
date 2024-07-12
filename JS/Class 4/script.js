// Looping Statements:

// 1. for loop
// 2. while loop
// 3. do...while loop

// 4. for in
// 5. for of
// 6. forEach

/*
    
        for(stmt1; stmt2; stmt4) {

        ...........stmt3.........

        }

        stmt1 ----> Initialized value
        stmt2 ----> conditions
        stmt3 ----> Execution
        stmt4 ----> Increment / Decrement

     */

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// let i = 10;

// while (i >= 11) {
//   console.log(i);
//   i++;
// }

// let i = 10;

// do {
//   console.log(i);
//   i++;
// } while (i < 11);

// Jumpings:

// break / continue

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }

  console.log(i);
}
