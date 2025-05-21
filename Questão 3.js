//Primeira parte
const funcionarios = [
  { nome: "Carlos", cargo: "Gerente", salario: 5000 },
  { nome: "Ana", cargo: "Assistente", salario: 1800 },
  { nome: "Mateus", cargo: "Analista", salario: 2500},
  { nome: "Marcia", cargo: "Gerente", salario: 5700},
  { nome: "Bruna", cargo: "Desenvolvedor", salario: 3600}  
];

function analisarFuncionarios(funcionarios) {
console.log("RELATÓRIO DE FUNCIONÁRIOS (Salário > 2000)")
  let gerentes = 0; //variável para gerente
  for (let i=0; i < funcionarios.length; i++) {
        let funcionario = funcionarios[i]

//Segunda parte
        if(funcionario.cargo == "Gerente"){
            gerentes++
        }
        if (funcionario.salario > 2000){
            console.log(`Funcionário: ${funcionario.nome} -> Salário: ${funcionario.salario}`)
        }
    }
    console.log(`\nTotal de gerentes: ${gerentes}`);
}

analisarFuncionarios(funcionarios)