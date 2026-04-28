Justificativa Técnica
1. Quais problemas foram resolvidos?
Foram resolvidos problemas como código concentrado em um único arquivo, funções com muitas responsabilidades, uso de variáveis globais, código duplicado e dependência direta da interface com a lógica do sistema.
Agora o sistema está separado em camadas, com cada parte tendo uma responsabilidade específica.
2. Como a arquitetura melhorou o sistema?
A arquitetura melhorou porque separou o sistema em Models, Services, Controllers, Repositories e Views.
Com isso, a lógica de negócio ficou separada da tela, a persistência ficou isolada no Repository e o Controller passou a apenas coordenar as ações do sistema.
3. Onde os padrões foram aplicados?
O padrão Factory foi aplicado em ProdutoFactory, responsável por criar produtos com seus respectivos preços.
O padrão Singleton foi aplicado em PedidoSingleton, garantindo uma única instância do pedido.
O padrão Repository foi aplicado em PedidoRepository, responsável por salvar e listar pedidos usando JSON Server.
Também foi criado o WhatsAppService, separando a integração externa via wa.me.
4. Quais benefícios foram obtidos?
Os principais benefícios foram: código mais organizado, menor acoplamento, maior reutilização, facilidade de manutenção, facilidade para testes, persistência com banco fake e possibilidade de crescimento futuro.
Perguntas norteadoras
O sistema possui arquitetura definida? Sim. Ele foi organizado em camadas.
Está desacoplado? Sim. A lógica, interface, persistência e integração externa foram separadas.
É reutilizável? Sim. As classes podem ser usadas em outras partes do sistema.
Está preparado para crescer? Sim. É possível adicionar novos produtos, descontos, telas, banco real ou novas integrações sem refazer todo o sistema.
