// DOM -> Document Object Model

/*

    1. Create
    2. Update
    3. Read

*/

// let ele1 = document.getElementById("demo")

// console.log(ele1);

// // ele.innerText = "Hello world"
// ele.innerHTML = "<h2>Hello</h2>"

// ele.style.color ="red"
// ele.style.fontSize = "3em"

// let ele = document.getElementsByClassName("head1")

// console.log(ele);

// ele[0].innerText = "hi"
// ele[1].innerText = "hello"
// ele[2].innerText = "Para"

// let ele3 = document.getElementsByTagName("p");

// ele3[0].innerText = "Paragrapgh"
// ele3[1].innerText = "Paragrapgh 1"
// ele3[1].style.fontSize = "2em"

// let newEle = document.createElement("div");

// newEle.setAttribute("class", "newDivison")

// let newHead = document.createElement("h1");

// newHead.innerText = "Hello world";

// document.body.append(newEle)

// newEle.appendChild(newHead)

// QuerySelector -> ES6

// let ele = document.querySelector(".demo")
let ele = document.querySelectorAll(".demo")

console.log(ele);

ele[0].innerHTML = "hello"

/*

class = "hello-world-india" 

    1. Snake case
    2. pascal case
    3. Camel case
    4. Connection case

*/