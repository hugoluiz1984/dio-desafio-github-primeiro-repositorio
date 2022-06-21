function comparaNum (n1, n2) {
    if (!n1||!n2) return 'Defina dois números';
    const primeiraFrase = criaPrimeira(n1,n2);
    const segundaFrase = criaSegunda(n1,n2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeira(n1,n2) {
    let primeira=  `Os números ${n1} e ${n2}`;
    let comparar= '';
    (n1===n2)?comparar='sim':comparar='não';

    return `${primeira} ${comparar} são iguais.`
}
function criaSegunda(n1,n2) {
    const soma=n1+n2;
    let comparar10='';
    let comparar20='';
    (soma>10)? comparar10='maior':comparar10='menor';
    (soma>20)? comparar20='maior':comparar20='menor';

    return `Sua soma é ${soma}, que é ${comparar10} do que 10 e ${comparar20} do que 20.`
}

console.log(comparaNum(10, 10));