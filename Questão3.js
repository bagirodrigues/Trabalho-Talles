/*
3 - SISTEMA DE FUNCIONÁRIOS
Vamos criar um sistema para analisar funcionários com:
•	Nome (string)
•	Cargo (string)
•	Salário (número)
Objetivos
1.	Listar funcionários com salário > R$ 2000
2.	Contar quantos são "Gerentes"

//TESTE 1
// Array de funcionários
const funcionarios = [
  { nome: "Carlos", cargo: "Gerente", salario: 5000 },
  { nome: "Ana", cargo: "Assistente", salario: 1800 },
  { nome: "Mateus", cargo: "Analista", salario: 2500},
  { nome: "Marcia", cargo: "Gerente", salario: 5700},
  { nome: "Bruna", cargo: "Desenvolvedora", salario: 3600}  
];

// Função para análise
function analisarFuncionarios(funcionarios) {
console.log("RELATÓRIO DE FUNCIONÁRIOS (Salário > 2000)")
  let gerentes = 0; //variável para gerente
  for (let i=0; i < funcionarios.length; i++) {
        let funcionario = funcionarios[i]
        if(funcionario.cargo == "Gerente"){
            gerentes++
        }
        if (funcionario.salario > 2000){
            console.log(`Funcionário: ${funcionario.nome} -> Salário: ${funcionario.salario}`)
        }
    }
    console.log(`Total de gerentes: ${gerentes}`);
}

analisarFuncionarios(funcionarios)
*/

//TESTE 2
const funcionarios = [
    { nome: "Ana", cargo: "Desenvolvedora", salario: 3500 },
    { nome: "Carlos", cargo: "Gerente", salario: 5000 },
    { nome: "Mariana", cargo: "Analista", salario: 1800 },
    { nome: "Rafael", cargo: "Gerente", salario: 4500 },
    { nome: "Fernanda", cargo: "Estagiária", salario: 1200 }
];

// Função que imprime salários acima de R$ 2.000 e conta gerentes
function analisarFuncionarios(lista) {
    let contadorGerentes = 0;

    console.log("Funcionários com salário maior que R$ 2.000:");
    for (let funcionario of lista) {
        if (funcionario.salario > 2000) {
            console.log(`Nome: ${funcionario.nome}, Salário: R$ ${funcionario.salario}`);
        }

        if (funcionario.cargo.toLowerCase() === "gerente") {
            contadorGerentes++;
        }
    }

    console.log(`\nTotal de funcionários com cargo de 'Gerente': ${contadorGerentes}`);
}

// Executar a função
analisarFuncionarios(funcionarios);
