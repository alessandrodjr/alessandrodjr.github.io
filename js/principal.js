var rua = document.querySelector(".rua");
rua.textContent = "Rua: Australia, 183";

var cep = document.querySelector(".cep");
cep.textContent = "Cep 0000-000";

var dia = document.querySelector(".dia");
dia.textContent = "Quarta-feira"

var hora = document.querySelector(".hora");
hora.textContent = "Hora: 10h"

var pesquisa = document.querySelector("#pesquisa")


var capturando = "";

function capturar(){
    capturando = document.getElementById('valor').value;
    console.log(capturando);
}