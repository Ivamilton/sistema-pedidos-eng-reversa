export class WhatsAppService {
  static gerarMensagem(pedido, totalFinal, nomeCliente) {
    let mensagem = `Resumo do Pedido - ${nomeCliente}\n\n`;

    pedido.itens.forEach(item => {
      mensagem += `${item.produto.nome} - Qtd: ${item.qtd} - R$ ${item.getSubtotal().toFixed(2)}\n`;
    });

    mensagem += `\nTotal: R$ ${pedido.calcularTotal().toFixed(2)}`;
    mensagem += `\nTotal final: R$ ${totalFinal.toFixed(2)}`;

    return encodeURIComponent(mensagem);
  }

  static enviar(numero, pedido, totalFinal, nomeCliente) {
    const mensagem = this.gerarMensagem(pedido, totalFinal, nomeCliente);
    window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
  }

  static enviarParaCliente(numeroCliente, pedido, totalFinal, nomeCliente) {
    this.enviar(numeroCliente, pedido, totalFinal, nomeCliente);
  }

  static enviarParaEstabelecimento(pedido, totalFinal, nomeCliente) {
    this.enviar("5588981416430", pedido, totalFinal, nomeCliente);
  }
}