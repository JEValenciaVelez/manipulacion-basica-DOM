
let calculo1 = document.querySelector("#calculo1");
let calculo2 = document.querySelector("#calculo2");
let calcular = document.querySelector("#btnCalcular");
let campoResultado = document.querySelector("#result");

calcular.addEventListener("click", function(){
    campoResultado.innerHTML = `Resultado: ${parseInt(calculo1.value) + parseInt(calculo2.value)}`;
})