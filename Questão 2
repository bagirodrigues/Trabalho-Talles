/*
2 - SISTEMA DE NOTAS E MÉDIA
Objetivo
Criar uma função que:
1.	Recebe 3 notas de um aluno.
2.	Verifica se as notas são válidas (entre 0 e 10).
3.	Se forem válidas, calcula a média e retorna:
- "Aprovado" se média ≥ 7.
- "Recuperação" se média entre 5 e 6.9.
- "Reprovado" se média < 5.
4.	Se alguma nota for inválida, retorna "Notas inválidas".

//TESTE 1
// Função que calcula média
function calcularMedia(nota1, nota2, nota3) {
  // Verifica se notas são válidas (entre 0 e 10)
  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    return "ERRO: Notas inválidas!";
  }
  
  // Calcula média
  const media = (nota1 + nota2 + nota3) / 3;
  let situacao = "";
  
  // Retorna resultado
  if (media >= 7) {
    situacao = "Aprovado";
  } else if (media >= 5) {
    situacao = "Recuperação";
  } else {
    situacao = "Reprovado";
  }

  return `Média válida: ${media.toFixed(2)} - Situação: ${situacao}`;
}

// Testando
console.log(calcularMedia(8, 7, 9)); // Aprovado
console.log(calcularMedia(5, 6, 4)); // Recuperação
console.log(calcularMedia(11, 2, 9)); //Notas inválidas
*/

//TESTE 2
function avaliarNotas(notas) {
  let soma = 0;

  for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 0 || notas[i] > 10) {
      return "Erro: notas inválidas encontradas.";
    }
    soma += notas[i];
  }

  let media = soma / notas.length;
  let situacao = "";

  if (media >= 7) {
    situacao = "Aprovado";
  } else if (media >= 5) {
    situacao = "Recuperação";
  } else {
    situacao = "Reprovado";
  }

   return `Média válida: ${media.toFixed(2)} - Situação: ${situacao}`;
}

console.log(avaliarNotas([8, 7, 6, 9])); 
console.log(avaliarNotas([4, 5, 6, 5])); 
console.log(avaliarNotas([2, 3, 4, 1])); 
console.log(avaliarNotas([9, -1, 10, 7]));
