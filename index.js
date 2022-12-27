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

let showBoolean = true

const btn = document.getElementById("show")
const unbtn = document.getElementById("unshow")
const funPage = document.getElementById("funPage")

show.addEventListener('click', (e) => {
    if (showBoolean) {
        funPage.style.display = "block";
        btn.innerText = "Hide Page"
        showBoolean = false
    } else {
        funPage.style.display = "none";
        btn.innerText = "Show Page"
        showBoolean = true
    }
})

unbtn.addEventListener('click', (e) => {
    funPage.style.display = "none";
    btn.innerText = "Show Page"
    showBoolean = true
})


// listening for any key press and logging it
//const body = document.getElementById("body")
//
//body.addEventListener('keydown', (e) => {
//    console.log(e)
//})
//
//





const information = {
    name: "Peter",
    size: "large",
    age: 23,
    items: [
        "straw",
        "hat",
        "tv"
    ]
}


const addButton = document.getElementById("add")
const infoDiv = document.getElementById("info")

addButton.addEventListener('click', (e) => {


    console.log(information)

    let tempHTML = "<div>"
    tempHTML += `<h2>${information.name}</h2>`
    tempHTML += `<h3>Age: ${information.age}</h3>`
    tempHTML += "<ul>"

    for(let i = 0; i < information.items.length; i++) {
        tempHTML += `<li>${information.items[i]}</li>`
    }

    tempHTML += "</ul></div>"

    infoDiv.innerHTML = tempHTML
//    infoDiv.innerHTML += tempHTML
})











