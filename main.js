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


//Timer //
/*class Timer {
    constructor(root) {
      root.innerHTML = Timer.getHTML();
  
      this.el = {
        minutes: root.querySelector(".timer__part--minutes"),
        seconds: root.querySelector(".timer__part--seconds"),
        control: root.querySelector(".timer__btn--control"),
        reset: root.querySelector(".timer__btn--reset")
      };
  
      this.interval = null;
      this.remainingSeconds = 0;
  
      this.el.control.addEventListener("click", () => {
        if (this.interval === null) {
          this.start();
        } else {
          this.stop();
        }
      });
  
      this.el.reset.addEventListener("click", () => {
        const inputMinutes = prompt("Enter number of minutes:");
  
        if (inputMinutes < 60) {
          this.stop();
          this.remainingSeconds = inputMinutes * 60;
          this.updateInterfaceTime();
        }
      });
    }
  
    updateInterfaceTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
  
      this.el.minutes.textContent = minutes.toString().padStart(2, "0");
      this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }
  
    updateInterfaceControls() {
      if (this.interval === null) {
        this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
        this.el.control.classList.add("timer__btn--start");
        this.el.control.classList.remove("timer__btn--stop");
      } else {
        this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
        this.el.control.classList.add("timer__btn--stop");
        this.el.control.classList.remove("timer__btn--start");
      }
    }
  
    start() {
      if (this.remainingSeconds === 0) return;
  
      this.interval = setInterval(() => {
        this.remainingSeconds--;
        this.updateInterfaceTime();
  
        if (this.remainingSeconds === 0) {
          this.stop();
        }
      }, 1000);
  
      this.updateInterfaceControls();
    }
  
    stop() {
      clearInterval(this.interval);
  
      this.interval = null;
  
      this.updateInterfaceControls();
    }
  
    static getHTML() {
      return `
              <span class="timer__part timer__part--minutes">00</span>
              <span class="timer__part">:</span>
              <span class="timer__part timer__part--seconds">00</span>
              <button type="button" class="timer__btn timer__btn--control timer__btn--start">
                  <span class="material-icons">play_arrow</span>
              </button>
              <button type="button" class="timer__btn timer__btn--reset">
                  <span class="material-icons">timer</span>
              </button>
          `;
    }
  }
  
  new Timer(
      document.querySelector(".timer")
  );*/

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