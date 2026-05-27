
let totalCarrinho = 0;

function adicionarCarrinho(nomeProduto) {
   
    totalCarrinho++;

    document.getElementById("contador").innerText = totalCarrinho;

    alert("✅ Produto adicionado ao carrinho: " + nomeProduto);
}