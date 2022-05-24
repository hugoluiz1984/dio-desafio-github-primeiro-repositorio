function calculadora () {
    const operacao = Number(prompt('Escolha sua operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão Real (/)\n5  -Divisão inteira (%)\n6 - Potenciação (**)'));
    


    if (!operacao || operacao>=7 ){
        alert(`Opção inválida`);
        calculadora();
        }
        else {
            let n1= Number(prompt('Insira o primeiro valor: '));
            let n2= Number(prompt('Insira o segundo valor: '));
            let resultado;
            
            if (!n1 || !n2) {
                alert(`Erro! Opção inválida`);
            calculadora();

            }else {
                function soma(){
                    resultado = n1+n2;
                    alert(`${n1} + ${n2} = ${resultado}`);
                }
                function subtracao(){
                    resultado = n1-n2;
                    alert(`${n1} - ${n2} = ${resultado}`);
                }
                function multiplicacao(){
                    resultado = n1*n2;
                    alert(`${n1} * ${n2} = ${resultado}`);
                }
                function divisaoReal(){
                    resultado = n1/n2;
                    alert(`${n1} / ${n2} = ${resultado}`);
                }
                function divisaoInteira(){
                    resultado = n1%n2;
                    alert(`O resto de ${n1} / ${n2} = ${resultado}`);
                }
                function potenciacao(){
                    resultado = n1**n2;
                    alert(`${n1} ** ${n2} = ${resultado}`);
                }
                
            }
            function novaoperacao(){
                let opcao = prompt('Deseja uma nova operação? \n1-Sim \n2-Não')
                switch (opcao) {
                    case "1":
                        calculadora();
                        break;
                    case "2":
                        alert(`Até Breve`);
                        break;
                    default:
                        alert(`Opção inválida`);
                        novaoperacao();
                        break;
                 }
            }
            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
                default:
                    alert(`Opção inválida`);
                    break;
            }
            novaoperacao();
    }
    
}

calculadora();