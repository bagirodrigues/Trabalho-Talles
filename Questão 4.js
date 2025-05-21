//Primeira parte
const produtos = [
  { nome: "Notebook", quantidade: 5, preco: 3000 },
  { nome: "Celular", quantidade: 2, preco: 1500 },
  { nome: "Usb-c", quantidade: 4, preco: 15.90},
  { nome: "Cabo HDMI", quantidade: 7, preco: 52.90}
];

function relatorioEstoque(listaProdutos) {
  let totalEstoque = 0;
 
  console.log("Produtos disponíveis:");

//Segunda parte
  for (let produto of listaProdutos) {
    if (produto.quantidade > 0) {
      const valorProduto = produto.quantidade * produto.preco;
      console.log(`${produto.nome} - ${produto.quantidade} x R$ ${produto.preco} = R$ ${valorProduto}`);
      totalEstoque += valorProduto;
    }
  }
  
  console.log(`\nValor total em estoque: R$ ${totalEstoque.toFixed(2)}`);
}

relatorioEstoque(produtos);