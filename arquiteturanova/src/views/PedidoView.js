export class PedidoView {
  atualizarLista(pedido) {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    pedido.itens.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `${item.produto.nome} | Qtd: ${item.qtd} | R$ ${item.getSubtotal()}`;
      lista.appendChild(li);
    });
  }

  atualizarTotal(total) {
    document.getElementById("total").innerText = total;
  }

  limpar() {
    document.getElementById("lista").innerHTML = "";
    document.getElementById("total").innerText = 0;
  }
}