// Defini uma classe de nome "Heroi" com um "constructor" que tem os parâmetros: "tipo, nome e arma" e suas propriedades usando o "this".

class Heroi {
	constructor(tipo, nome, arma){
	this.tipo = tipo;
    this.nome = nome;
    this.arma = arma
}

// Aqui foi feito o método dentro da classe com o nome de "escrever" para imprimir uma mensagem padrão com os dados do herói:

escrever() {
	console.log(`O ${this.tipo} conhecido pelo nome de ${this.nome} atacou Exandria usando ${this.arma}`);
    }
}

// Para criar um novo objeto dentro da classe utilizei o new seguido do nome da classe Heroi: "new Heroi" para criar uma nova instância 

let heroi1 = new Heroi("Guerreiro" , "Grog" , "Espada");
let heroi2 = new Heroi("Mago" , "Pike" , "Magia");
let heroi3 = new Heroi("Monje" , "Vox" , "Artes Maciais");
let heroi4 = new Heroi("Ninja" , "Vex" , "Shuriken");

// E para chamar o método escrever() com os dados de todos os heróis: 

heroi1.escrever();
heroi2.escrever();
heroi3.escrever();
heroi4.escrever();

// Vai imprimir as mensagens: 
//O Guerreiro conhecido pelo nome de Grog atacou Exandria usando Espada
//O Mago conhecido pelo nome de Pike atacou Exandria usando Magia
//O Monje conhecido pelo nome de Vox atacou Exandria usando Artes Maciais
//O Ninja conhecido pelo nome de Vex atacou Exandria usando Shuriken