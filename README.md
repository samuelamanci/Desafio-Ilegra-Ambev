# Desafio Ilegra/Ambevv

O desafio proposto solicitou a criação de 3 cenários de testes de API do seguinte destino `https://serverest.dev/`, além disso, foi solicitado automatizar mais 3 cenários Web do site `https://front.serverest.dev/`.

# Pré-requisitos

Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

- [Node.js](https://nodejs.org/en/)
- npm (é necessário porém ele é instalado junto com o Node na versão para Windows)
- Git
- Visual Studio Code


## Como executar o teste:
1. Clone o projeto: `https://github.com/samuelamanci/Desafio-Ilegra-Ambev.git`.
2. Abra a pasta do projeto que estar no repositório que foi baixado do github: `desafio-ilegra-Ambev`.
3. Instale as dependências do projeto: `npm install`.
4. Execute o teste: `npx cypress open`.
5. Clique na opção E2E Testing
6. Escolha o navegador de sua preferencia
7. Após a janela de execução do cypress ser aberta, clique em "apiTest.cy.js" para executar os testes de API
8. Aguarde o teste finalizar.
9. Agora clique em "webTest.cy.js" para executar os testes Web
10. Aguarde o teste finalizar.

## OBS:
- O código do teste de Web está localizado em: `cypress/e2e/web/webTest.cy.js`
- O código do teste de API está localizado em: `cypress/e2e/api/apiTest.cy.js`

