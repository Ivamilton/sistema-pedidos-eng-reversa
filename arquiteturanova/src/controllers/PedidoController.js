import { PedidoSingleton } from "../services/PedidoSingleton.js";
import { PedidoService } from "../services/PedidoService.js";
import { PedidoRepository } from "../repositories/PedidoRepository.js";
import { PedidoView } from "../views/PedidoView.js";

const pedidoInstance = new PedidoSingleton();
const pedido = pedidoInstance.getPedido();

const service = new PedidoService(pedido);
const repository = new PedidoRepository();
const view = new PedidoView();

window.adicionar = function () {
  try {
    const produto = document.getElementById("produto").value;
    const qtd = parseInt(document.getElementById("qtd").value);

    service.adicionar(produto, qtd);

    const total = service.calcularTotal();

    view.atualizarLista(pedido);
    view.atualizarTotal(total);
  } catch (e) {
    alert(e.message);
  }
};

window.finalizar = async function () {
  try {
    if (pedido.itens.length === 0) {
      alert("Adicione pelo menos um item ao pedido");
      return;
    }

    const totalFinal = service.finalizar();

    await repository.salvarPedido(pedido, totalFinal);

    alert("Pedido salvo no banco fake. Total final: R$ " + totalFinal.toFixed(2));

    service.limpar();
    view.limpar();
  } catch (e) {
    alert("Erro ao salvar pedido. Verifique se o JSON Server está rodando.");
  }
};