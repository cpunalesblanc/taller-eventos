document.addEventListener ("DOMContentLoaded", function() {
const Div = document.querySelector("div");
const Boton = document.querySelector ("button")

Div.addEventListener ("click", function(){
    alert("Hola soy el div");
});
Boton.addEventListener ("click", function(event) {
    event.stopPropagation();
})
})