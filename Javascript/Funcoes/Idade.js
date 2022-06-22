const Pessoa1 = 
	{
		nome: 'João',
		idade: 30,
	}
const Pessoa2 =    {
		nome: 'Maria',
		idade: 20,
	}
const Pessoa3 =     {
		nome: 'Julio',
		idade: 5,
	}


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
console.log(calculaIdade.call(Pessoa2,30))