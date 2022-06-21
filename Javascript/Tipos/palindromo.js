function palindromo(string) {//Verfica se é um palindromo, inclusive frases.
    if(!string) return 'Entre com um valor válido';

    let newString = string.replace(/\s+/g, '').split('').reverse().join('');//separa e inverte e retira os espaços.
    string=string.replace(/\s+/g, '').split('').reverse().join('');
    return newString===string;
}
console.log(palindromo('roma me tem amor'));