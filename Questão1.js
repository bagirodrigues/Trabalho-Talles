/*
1 - SISTEMA DE VERIFICAÇÃO DE ENTRADA EM EVENTO
Objetivo
Crie um sistema de verificação de entrada em um evento. 
Cada pessoa deve ser representada por um objeto com as seguintes propriedades: nome, idade e temIngresso (boolean).
- Armazene pelos menos 4 objetos dentro de um array.
O sistema verifica se uma pessoa pode entrar em um evento com base em:
•	Idade (deve ser 18 anos ou mais)
•	Possuir ingresso (true ou false)
Se a pessoa atender a esses critérios, a mensagem "Entrada liberada para [nome]" deve aparecer. Caso contrário, "Entrada negada para [nome]".


//Teste 1
// Array de 4 pessoas
const pessoas = [
  { nome: "João", idade: 25, temIngresso: true }, //atende aos requisitos
  { nome: "Maria", idade: 17, temIngresso: true }, //não tem idade suficiente
  { nome: "Ana", idade: 30, temIngresso: false}, //não tem ingresso
  { nome: "Pablo", idade: 20, temIngresso: true} //atende aos requisitos
];

// Função para verificar quem pode entrar
function verificarEntrada(listaPessoas) {
  console.log("RESULTADO DA VERIFICAÇÃO")  
  //irá percorrer cada pessoa
  for (let pessoa of listaPessoas) {
    //verifica os requisitos
    if (pessoa.idade >= 18 && pessoa.temIngresso) {
      //caso positivo:
        console.log(pessoa.nome + " - Acesso Concedido");
    } else {
      //caso negativo:  
      console.log(pessoa.nome + " - Acesso Negado");
    }
  }
}

//EXECUTANDO A VERIFICAÇÃO
verificarEntrada(pessoas);
*/

//Teste 2

const pessoas = [
    { nome: "Lucas", idade: 22, temIngresso: true },
    { nome: "Fernanda", idade: 17, temIngresso: true },
    { nome: "Paulo", idade: 30, temIngresso: false },
    { nome: "Carla", idade: 19, temIngresso: true }
];

// Função que verifica a entrada no evento
function verificarEntradas(lista) {
    for (let pessoa of lista) {
        if (pessoa.temIngresso && pessoa.idade >= 18) {
            console.log(`Entrada liberada para ${pessoa.nome}`);
        } else {
            console.log(`Entrada negada para ${pessoa.nome}`);
        }
    }
}

// Executa a função
verificarEntradas(pessoas);