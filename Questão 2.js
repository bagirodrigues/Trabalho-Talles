//Primeira Parte
function avaliarNotas(notas) {
  let soma = 0;

  for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 0 || notas[i] > 10) {
      return "ERRO: notas inválidas encontradas.";
    }
    soma += notas[i];
  }

  let media = soma / notas.length;
  let situacao = "";

//Segunda Parte
  if (media >= 7) {
    situacao = "Aprovado";
  } else if (media >= 5 && media <= 6.9) {
    situacao = "Recuperação";
  } else {
    situacao = "Reprovado";
  }

   return (`Média válida: ${media.toFixed(2)} - Situação: ${situacao}`);
}

console.log(avaliarNotas([8, 7, 6, 9])); 
console.log(avaliarNotas([4, 5, 6, 5])); 
console.log(avaliarNotas([2, 3, 4, 1])); 
console.log(avaliarNotas([9, -1, 10, 7]));