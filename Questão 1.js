//Primeira Parte
const pessoas = [
    { nome: "Lucas", idade: 22, temIngresso: true },
    { nome: "Fernanda", idade: 17, temIngresso: true },
    { nome: "Paulo", idade: 30, temIngresso: false },
    { nome: "Carla", idade: 19, temIngresso: true }
];

// Função que verifica a entrada no evento
function verificarEntrada(listapessoas) {

//Segunda parte
    for (let pessoa of listapessoas) {
        if (pessoa.temIngresso && pessoa.idade >= 18) {
            console.log(`Entrada liberada para: ${pessoa.nome}`);
        } else {
            console.log(`Entrada negada para: ${pessoa.nome}`);
        }
    }
}

// Executa a função
verificarEntrada(pessoas);