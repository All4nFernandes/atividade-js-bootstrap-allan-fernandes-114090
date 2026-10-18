# Byte Burger

Projeto acadêmico de um cardápio de hamburgueria, feito com HTML, Bootstrap e JavaScript ES6.

## Interface

A página usa fundo escuro e detalhes amarelos. Tem uma barra de navegação, um banner, três cards de produtos, um aviso sobre entrega grátis e um rodapé. O link “Ver cardápio” leva até os produtos. Os pedidos são simulados no Console, sem manipulação do DOM ou eventos.

No celular, o texto do banner fica abaixo da imagem. Os cards ficam empilhados e, a partir de telas médias, aparecem em três colunas.

## Bootstrap

O Bootstrap 5.3.3 é carregado por CDN. Foram usados navbar, container, row, col, card, badge, btn e alert, além de classes de cores, espaçamento e posicionamento. O rodapé usa o elemento HTML footer com classes do Bootstrap. Não há CSS próprio nem estilos inline.

## JavaScript

- `const`: valores que não são reatribuídos, como nomeCliente, produto e preco. Os resultados dos cálculos também usam const porque são calculados uma vez na simulação.
- `let`: valores que podem ser reatribuídos. quantidade começa em 1 e muda para 2. totalTeste foi declarado com let para permitir experimentar outros valores.
- `var`: aparece somente como demonstração histórica. Tem escopo de função, enquanto let e const têm escopo de bloco. A prática atual prioriza const e let para deixar o escopo e a intenção mais claros.

Tipos utilizados: string (nomeCliente e produto), number (preco e quantidade), boolean (pedidoConfirmado e entregaGratis) e null (observacao, que representa a ausência de uma observação).

## Cálculos e condição

A simulação multiplica o preço pela quantidade, soma uma bebida, subtrai um desconto e divide a conta por duas pessoas. Uma template literal monta mensagens com os dados do pedido. toFixed(2) mostra os valores com duas casas decimais no Console.

O if/else verifica se o valor após o desconto é maior ou igual a R$ 50. Se for, a entrega é grátis; caso contrário, o Console informa a taxa de R$ 8. O total mostrado é dos produtos após o desconto, sem adicionar essa taxa.

O primeiro pedido resulta em R$ 52 e testa o caminho verdadeiro. O segundo teste usa R$ 32 e testa o caminho falso. Também é possível alterar os valores e recarregar a página para experimentar.

## Como abrir

1. Abra index.html em um navegador com acesso à internet para carregar o Bootstrap.
2. Clique com o botão direito na página, escolha Inspecionar e abra a aba Console.
3. Veja as mensagens e os cálculos do arquivo script.js.

## Imagens

O banner e as imagens dos três produtos na pasta img foram gerados com auxílio de IA para este projeto. Cada card tem uma imagem correspondente ao produto.

## Reflexão pessoal

- Nome: Allan Fernandes.
- RGM: 114.090.
- Maior dificuldade encontrada: entender as siglas e os nomes das classes do Bootstrap e conseguir colocar uma imagem de fundo com o texto por cima.
- Como a dificuldade foi resolvida: usei as classes de cores, espaçamento e posicionamento do Bootstrap para organizar a página. Para o banner, coloquei a imagem dentro de uma seção com position-relative e o texto em um bloco com position-absolute. Usei top-50 e translate-middle-y para centralizar o texto na vertical. No celular, deixei o texto abaixo da imagem para facilitar a leitura.
