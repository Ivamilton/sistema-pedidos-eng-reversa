# 🍴 Sistema de Pedidos - Arquitetura de Sistemas

## 📌 Descrição

Este projeto é a evolução de um sistema de pedidos simples para uma aplicação estruturada utilizando arquitetura em camadas, padrões de projeto e boas práticas.

O sistema permite:
- adicionar itens
- calcular total
- aplicar regras de negócio
- salvar pedidos em um backend fake
- enviar pedidos via WhatsApp

---

## 🏗️ Arquitetura do Sistema

O sistema foi organizado em camadas:

- Models → entidades (Produto, ItemPedido, Pedido)
- Services → regras de negócio
- Controllers → controle das ações
- Repositories → persistência (JSON Server)
- Views → interface

---

## 🧠 Padrões de Projeto

- Factory → criação de produtos (`ProdutoFactory`)
- Singleton → instância única do pedido (`PedidoSingleton`)
- Repository → persistência de dados (`PedidoRepository`)
- Observer → atualização automática da interface

---

## 📡 Integrações

### JSON Server

Backend fake para salvar pedidos.

Rodar:

```bash
npm run server