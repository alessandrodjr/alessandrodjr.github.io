var rua = document.querySelector(".rua");
rua.textContent = "";

var cep = document.querySelector(".cep");
cep.textContent = "";

var dia = document.querySelector(".dia");
dia.textContent = ""

var hora = document.querySelector(".hora");
hora.textContent = ""

var pesquisa = document.querySelector("#pesquisa")


var capturando = "";

async function capturar(){
   capturando =  document.getElementById('valor').value;  
   
   let URL = "https://coleta-seletiva.herokuapp.com/api?cep="+capturando;

   await fetch(URL,{method:'GET'})
    .then(req => req.json())
    .then(data => {
           rua.textContent = data.logradouro;
           cep.textContent = data.cep;
           dia.textContent = data.coletas[0].dia
           hora.textContent = data.coletas[0].hora
      } )
    .catch(err => console.log(err));     
}
