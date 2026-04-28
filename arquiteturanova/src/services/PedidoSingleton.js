import { Pedido } from "../models/Pedido.js";

export class PedidoSingleton {
  constructor() {
    if (!PedidoSingleton.instance) {
      this.pedido = new Pedido();
      PedidoSingleton.instance = this;
    }

    return PedidoSingleton.instance;
  }

  getPedido() {
    return this.pedido;
  }
}