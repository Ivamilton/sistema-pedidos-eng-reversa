import { ItemPedido } from "../models/ItemPedido.js";
import { ProdutoFactory } from "../factories/ProdutoFactory.js";

export class PedidoService {
  constructor(pedido) {
    this.pedido = pedido;
    this.observers = [];
  }

  adicionarObserver(observer) {
    this.observers.push(observer);
  }

  notificar() {
    this.observers.forEach(observer => observer.atualizar(this.pedido));
  }

  adicionar(nome, qtd) {
    if (!qtd || qtd <= 0) {
      throw new Error("Quantidade inválida");
    }

    const produto = ProdutoFactory.criarProduto(nome);
    const item = new ItemPedido(produto, qtd);

    this.pedido.adicionarItem(item);
    this.notificar();
  }

  removerUltimo() {
    this.pedido.removerUltimo();
    this.notificar();
  }

  calcularTotal() {
    return this.pedido.calcularTotal();
  }

  finalizar() {
    const total = this.calcularTotal();

    let desconto = 0;

    if (total > 100) {
      desconto = total * 0.2;
    } else if (total > 50) {
      desconto = total * 0.1;
    }

    const taxa = total * 0.05;

    return total - desconto + taxa;
  }

  limpar() {
    this.pedido.limpar();
    this.notificar();
  }
}