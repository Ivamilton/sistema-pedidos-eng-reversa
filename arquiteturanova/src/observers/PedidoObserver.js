export class PedidoObserver {
  constructor(view) {
    this.view = view;
  }

  atualizar(pedido) {
    this.view.atualizarLista(pedido);
    this.view.atualizarTotal(pedido.calcularTotal());
  }
}