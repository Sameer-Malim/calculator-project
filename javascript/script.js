let display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input
};

function clearDisplay(){
    display.value = ""
};

function deleteLast(){
    display.value = display.value.slice(0, -1)
};

function calculate(){
    try {
        display.value = eval(display.value)
    } catch {
        display.value = "Error"
    }
};

let page = document.getElementById("page");
let button = document.getElementById("toggleBtn");

let savedMode = localStorage.getItem("mode");

if (savedMode === "dark"){
    page.classList.add("dark-mode");
}

button.addEventListener("click", function(){
    page.classList.toggle("dark-mode")

    if (page.classList.contains("dark-mode")){
        localStorage.setItem("mode", "dark")
    } else {
        localStorage.setItem("mode", "light")
    }
});