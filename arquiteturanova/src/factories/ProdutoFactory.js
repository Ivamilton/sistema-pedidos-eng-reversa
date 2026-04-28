import { Produto } from "../models/Produto.js";

export class ProdutoFactory {
  static criarProduto(nome) {
    const precos = {
      pastel: 5,
      caldo: 7,
      refrigerante: 4,
      suco: 6
    };

    if (!precos[nome]) {
      throw new Error("Produto inválido");
    }

    return new Produto(nome, precos[nome]);
  }
}