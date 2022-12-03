//way of declaring method
const addNum = (num1, num2) => {
   return num1 + num2
}

//second way of declaring method
function addNum2(num1, num2) {
    return num1 + num2
}

//data for display
const list = ["Ibrahim", "Peter", "Natty-Lite", "Nathan", "Liz", "Ace", "Kel", "Josh", "Peter Again", "Ibrahim's Ipad"]

// grabbing the main element
const main = document.getElementById("main-page")

//creating a new element
const header = document.createElement("h2")
header.innerHTML = "Hello and Greetings to:"

//attaching new element to main
main.appendChild(header)

const message = document.createElement("div")
message.className = "list";
//creating a "Unordered List"
let names = "<ul>"

for(let i = 0; i < 10; i++) {
    //adding "List Items" to the "Unordered List"
    names += "<li>" + list[i] + "</li>";
//    console.log(addNum2(i, i))
}

names += "</ul>"
message.innerHTML = names;
main.appendChild(message)

