let hamburger = document.querySelector(".hamburger-menu")
let menu = document.querySelector("#menuH")
hamburger.addEventListener("click", event => {
    hamburger.classList.toggle("open")
    menu.classList.toggle("view")
})