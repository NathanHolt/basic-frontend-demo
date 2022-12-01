
//data for display
const list = ["Ibrahim", "Peter", "Natty-Lite", "Nathan", "Liz", "Ace", "Kel", "Josh", "Peter Again", "Ibrahim's Ipad"]

// grabbing the main element
const main = document.getElementById("main-page")

//creating a new element
let header = document.createElement("h2")
header.innerHTML = "Hello and Greetings to:"

//attaching new element to main
main.appendChild(header)

for(let i = 0; i < 10; i++) {
    let message = document.createElement("div")
    message.innerHTML ="<ul><li>" + list[i] + "</li></ul>";

    main.appendChild(message)
}

