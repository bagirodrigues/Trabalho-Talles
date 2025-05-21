//Primeira parte
const visitantes = [
    { nome: "João", idade: 18, temConvite: true, vip: false },
    { nome: "Mariana", idade: 15, temConvite: true, vip: false },
    { nome: "Carlos", idade: 25, temConvite: false, vip: true },
    { nome: "Ana", idade: 17, temConvite: false, vip: true },
    { nome: "Bruna", idade: 20, temConvite: false, vip: false }
];

//Segunda parte
function verificarAcesso(lista) {
    for (let visitante of lista) {
        if (visitante.idade > 16 && (visitante.temConvite || visitante.vip)) {
            console.log(`Bem-vindo(a): ${visitante.nome}!`);
        } else {
            console.log(`Acesso negado para: ${visitante.nome}`);
        }
    }
}

verificarAcesso(visitantes);