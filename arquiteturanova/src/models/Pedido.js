export class Pedido {
  constructor() {
    this.itens = [];
  }

  adicionarItem(item) {
    this.itens.push(item);
  }

  removerUltimo() {
    this.itens.pop();
  }

  limpar() {
    this.itens = [];
  }

  calcularTotal() {
    return this.itens.reduce((total, item) => total + item.getSubtotal(), 0);
  }
}