import { Pedido } from "../models/Pedido.js";
import { PedidoService } from "../services/PedidoService.js";

const pedido = new Pedido();
const service = new PedidoService(pedido);

service.adicionar("caldo", 6);

const total = service.calcularTotal();
console.assert(total === 42, "Erro: total deveria ser 42");

const totalFinal = service.finalizar();
console.assert(totalFinal === 44.1, "Erro: total final deveria ser 44.10");

console.log("Todos os testes passaram!");