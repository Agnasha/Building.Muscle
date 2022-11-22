//Navbar//
var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

//Calculadora//

let botaoCalcular = document.getElementById(btn_calcular);
function calculandoIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value/100;
    let resultado = document.getElementById("resultado")
    if(altura !== "" && peso !==""){
        let imc = (peso / (altura*altura)).toFixed(2);
        let mensagem = "";
        if(imc < 18.5){
            mensagem = "Abaixo do peso!"
        }else if(imc < 25){
            mensagem = "Você está com o peso ideal!"
        }else if(imc < 30){
            mensagem = "Você está levemente acima do peso!"
        }else if(imc < 35){
            mensagem = "Cuidado! Obesidade grau I"
        }else if(imc < 40){
            mensagem = "Cuidado! Obesidade grau II"
        }else {
            mensagem = "Cuidado! Obesidade grau III"
        }
        resultado.textContent = `Seu IMC é ${imc}! ${mensagem}`;      
    }else{
        resultado.textContent = "Preencha todos os campos!!!"
    }
}
btn_calcular.addEventListener('click', calculandoIMC);

  //teste alarme//

  var display = document.getElementById('display')

var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

var comecar = document.getElementById('comecar')
var parar = document.getElementById('parar')

var minutoAtual;
var segundoAtual;

var interval


for(var i = 0; i<=60; i++){
    minutos.innerHTML+='<option value='+i+'>'+i+'</option>';
}

for(var i = 0; i<=60; i++){
    segundos.innerHTML+='<option value='+i+'>'+i+'</option>';
}



comecar.addEventListener('click',function(){
    minutoAtual = minutos.value
    segundoAtual = segundos.value
    display.childNodes[1].innerHTML = minutoAtual+": "+segundoAtual

    interval = setInterval(function(){
        segundoAtual--;

        if(segundoAtual<=0){
            if(minutoAtual>0){
                minutoAtual--
                segundoAtual=59
            }else{
                
                document.getElementById('sound').play();
                clearInterval(interval)
            }
        }

        display.childNodes[1].innerHTML = minutoAtual+": "+segundoAtual
    }, 1000)
})


parar.addEventListener('click',function(){
    clearInterval(interval)
})