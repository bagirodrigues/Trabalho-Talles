/*
4 - SISTEMA DE PRODUTOS DA LOJA
Crie um array de objetos representando produtos de uma loja. Cada objeto deve ter as propriedades:
    - nome (string)
    - quantidade (número)
    - preco (número)
    Objetivos:
1. Listar produtos com quantidade > 0
2. Calcular valor total por produto (quantidade × preço)
3. Calcular valor total do estoque
*/


// Array de produtos
const produtos = [
  { nome: "Notebook", quantidade: 5, preco: 3000 },
  { nome: "Celular", quantidade: 2, preco: 1500 },
  { nome: "Usb-c", quantidade: 4, preco: 15.90},
  { nome: "Cabo HDMI", quantidade: 7, preco: 52.90}
];

// Função para relatório
function relatorioEstoque(listaProdutos) {
  let totalEstoque = 0;
 
  console.log("Produtos disponíveis:");
  for (let produto of listaProdutos) {
    if (produto.quantidade > 0) {
      const valorProduto = produto.quantidade * produto.preco;
      console.log(`${produto.nome} - ${produto.quantidade} x R$ ${produto.preco} = R$ ${valorProduto}`);
      totalEstoque += valorProduto;
    }
  }
  
  console.log(`Valor total em estoque: R$ ${totalEstoque.toFixed(2)}`);
}
// Testando
relatorioEstoque(produtos);


/*
//Essa é uma segunda alternativa para usar no código
for (let i=0; i<listaProdutos.length; i++){
    produto = listaProdutos[i]
    if(produto.quantidade > 0){
        console.log(`Valor total de ${produto.nome} -> ${(produto.quantidade*produto.preco).toFixed(2)}`);
        totalEstoque += produto.quantidade*produto.preco;
    }
}
console.log (`\nTotal de todos os produtos é ${totalEstoque.toFixed(2)}`)
}

relatorioEstoque(produtos)
*/