export class ItemPedido {
  constructor(produto, qtd) {
    this.produto = produto;
    this.qtd = qtd;
  }

  getSubtotal() {
    return this.produto.preco * this.qtd;
  }
}