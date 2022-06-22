function validar(arr, num) {

    try { 

        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError("O Array precisa ser do tipo object");

        if(typeof num !== 'number') throw new TypeError("O Num precisa ser do tipo number");

        if(arr.length !== num) throw new RangeError("O Array tem tamanho diferente do número");
        
        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log('É um erro de ReferenceError');
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log('É um erro de TypeError');
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log('É um erro de RangeError');
            console.log(e.message);
        }else{
            console.log('É um erro inesperado: ' + e);
        }
    }
}
console.log([1], 1)
