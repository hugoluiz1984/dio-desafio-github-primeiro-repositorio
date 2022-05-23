let contador = 0
var currentNumberWrapper = document.getElementById('currentNumber');

function increment (){
    contador= contador+1;
    currentNumberWrapper.innerHTML  = contador;
    console.log(currentNumberWrapper);
}

function decrement (){
    if (contador>0) { // não fica com números negativos
    contador= contador-1;;
    currentNumberWrapper.innerHTML = contador;
    console.log(currentNumberWrapper);
    }
}