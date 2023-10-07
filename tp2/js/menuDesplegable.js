'use strict'

document.querySelector("#menuHome").addEventListener("click", toggleMenuH);
document.querySelector("#userMenu").addEventListener("click", toggleMenuU);
document.querySelector("#cierraMenuH").addEventListener("click", toggleMenuH);
document.querySelector("#cierraMenuU").addEventListener("click", toggleMenuU);

function toggleMenuH(){
    document.querySelector("#menuH").classList.toggle("show");

}
function toggleMenuU(){
    document.querySelector("#menuU").classList.toggle("show");

}