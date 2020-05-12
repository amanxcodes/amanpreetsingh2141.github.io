var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector(".display");
var body = document.getElementById("gradient");

function change(){
    body.style.background= "linear-gradient(to right, " + color1.value + "," + color2.value + ")"
    css.textContent= body.style.background;
}

color1.addEventListener("input", change)
color2.addEventListener("input", function(){
    change();
    
})

