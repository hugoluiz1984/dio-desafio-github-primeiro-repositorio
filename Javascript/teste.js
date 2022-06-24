/*Teste*/
// comentário em uma linha
let arr =[1];
for (let i = 1; i <=9; i++){ //criar array para os fatoriais com 
    let fatorial = 1
    for (let j = i; j>=1;j--){
        fatorial=fatorial*j;
        console.log(fatorial,j,i)
    }
    arr.push(fatorial)
}
console.log(arr)

