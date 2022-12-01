
// grabbing the main element
const main = document.getElementById("main-page")

for(let i = 0; i < 10; i++) {
    //creating a new element
    let header = document.createElement("h2")
    header.innerHTML = "Hello"
    //attaching new element to main
    main.appendChild(header)
}
