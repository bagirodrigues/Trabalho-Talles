/*
5 - SISTEMA DE VERIFICAÇÃO DE VISITANTES
Crie um array de 5 objetos, cada um representando um visitante com:
-  nome
-  idade
-  temConvite (boolean)
-  vip (boolean)
    Crie uma função que percorra o array e imprima:
  -  "Bem-vindo Fulano!" se ele for maior de 16 e (tem convite ou é VIP).
  - "Acesso negado para Fulano" caso contrário.
Regras de acesso:
- Maiores de 16 anos
- E deve ter: convite OU ser VIP

//TESTE 1
// Array de visitantes
const visitantes = [
  { nome: "João", idade: 20, temConvite: true, vip: false },
  { nome: "Maria", idade: 15, temConvite: true, vip: false }
];

// Função para verificar acesso
function verificarAcesso(listaVisitantes) {
  for (let visitante of listaVisitantes) {
    const podeEntrar = visitante.idade > 16 && (visitante.temConvite || visitante.vip);
    
    if (podeEntrar) {
      console.log(visitante.nome + " - Acesso PERMITIDO");
    } else {
      console.log(visitante.nome + " - Acesso NEGADO");
    }
  }
}

// Testando
verificarAcesso(visitantes);
*/

//TESTE 2
const visitantes = [
    { nome: "João", idade: 18, temConvite: true, vip: false },
    { nome: "Mariana", idade: 15, temConvite: true, vip: false },
    { nome: "Carlos", idade: 25, temConvite: false, vip: true },
    { nome: "Ana", idade: 17, temConvite: false, vip: false },
    { nome: "Bruna", idade: 20, temConvite: false, vip: false }
];

// Função para verificar acesso dos visitantes
function verificarAcesso(lista) {
    for (let visitante of lista) {
        if (visitante.idade > 16 && (visitante.temConvite || visitante.vip)) {
            console.log(`Bem-vindo ${visitante.nome}!`);
        } else {
            console.log(`Acesso negado para ${visitante.nome}`);
        }
    }
}

// Executa a função
verificarAcesso(visitantes);
