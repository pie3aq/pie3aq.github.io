const buttonMode = document.getElementById("button-dark-mode")
const page = document.querySelector(".page")
const menu = document.querySelector(".menu")
const text = document.querySelector("p")
const textBackground = document.querySelector(".about")
const link = document.querySelectorAll("li")
console.log(link)
console.log(text)
console.log(buttonMode)
let lightMode = true;

function LightMode(){
    lightMode = !lightMode;
}


buttonMode.addEventListener('click', changeMode);
function changeMode(){
    LightMode();
    if(lightMode === false) {
        buttonMode.textContent = "Light MODE"
        page.style.backgroundColor = "#3e3c3c"
        menu.style.backgroundColor = "#363648"
        text.style.color = "#ebe4e3"
        textBackground.style.backgroundColor = "#717272"
        link.style.backgroundColor="white" 
    } else {
        buttonMode.textContent = "Dark MODE"
        page.style.backgroundColor = "gainsboro"
        menu.style.backgroundColor = "#c0d7ed"
        text.style.color = "#475d6e"
        textBackground.style.backgroundColor = "#eff1f3"
    }
    console.log(lightMode)
}