# Impressão de Conteúdo em PDF
Este é um projeto simples que permite a conversão de uma tabela HTML em um arquivo PDF utilizando a biblioteca `html2pdf.js`. O sistema renderiza o conteúdo da tabela em formato PDF e permite que o usuário faça o download com um clique.

## Tecnologias utilizadas
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **HTML** – Estrutura o layout da página ([html.com](https://html.com/))  
- **CSS** – Estiliza o layout da tabela e do botão ([css.com](https://css.com/))  
- **JavaScript** – Implementa a lógica para gerar e baixar o PDF ([javascript.com](https://www.javascript.com/))  
- **html2pdf.js** – Biblioteca para conversão de elementos HTML em PDF ([github.com/eKoopmans/html2pdf](https://github.com/eKoopmans/html2pdf))

## Visualização do Projeto
https://heitordalla.github.io/print-content/

## Funcionalidades
- Exibição de uma tabela com dados de exemplo (nome, idade, cidade)
- Botão que permite converter a tabela em PDF
- Download automático do arquivo gerado

## Como Usar
1. Abra o arquivo `index.html` em seu navegador.
2. Visualize os dados exibidos na tabela.
3. Clique no botão **“Baixar Tabela”**.
4. O conteúdo da tabela será baixado como um arquivo `PDF`.

## Lógica de Funcionamento
O botão com o ID `btnBaixar` escuta o evento de clique. Ao ser acionado, ele seleciona a tabela HTML com o ID `table` e passa esse conteúdo para a biblioteca `html2pdf.js`.  
Com as configurações definidas (como margens, nome do arquivo, escala e formato), a biblioteca converte o HTML em PDF e inicia automaticamente o download.

## Pré-requisitos
- Navegador moderno com suporte a JavaScript (Chrome, Firefox, Edge, Safari, etc.)
- Conexão com a internet para carregar a biblioteca `html2pdf.js` via CDN

## Contribuindo
Este é um projeto de código aberto e contribuições são bem-vindas! Relate bugs, sugira melhorias ou envie pull requests.

## Contato
- Criado por **Heitor Giussani Dalla Villa**  
- E-mail: [heitorvillavilla@gmail.com](mailto:heitorvillavilla@gmail.com)  
- LinkedIn: [linkedin.com/in/heitordallavilla](https://www.linkedin.com/in/heitordallavilla)

## Observações Finais
Você pode adaptar a estrutura da tabela, estilização ou conteúdo de acordo com suas necessidades.
A biblioteca `html2pdf.js` também permite gerar PDF a partir de outros elementos HTML além de tabelas.
