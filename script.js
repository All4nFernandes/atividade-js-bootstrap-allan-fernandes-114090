// 1 e 2. Conexão, instruções e operação simples.
console.log("Meu primeiro script foi executado!");
console.log("Bem-vindo à Byte Burger!");
console.log("Preço de um Clássico com uma bebida:", 25 + 7);

// 3. Dados fixos usam const; a quantidade pode mudar e usa let.
const nomeCliente = "Allan";
const produto = "Clássico";
const preco = 25;
let quantidade = 1;
quantidade = 2;
console.log("Quantidade atualizada:", quantidade);

// 4. Exemplo histórico de declaração com var.
var exemploAntigo = "var era muito utilizado antes do ES6";
console.log(exemploAntigo);

// 5. String, number, boolean e null.
const pedidoConfirmado = true;
const observacao = null;
console.log("Cliente (string):", nomeCliente);
console.log("Preço (number):", preco);
console.log("Pedido confirmado (boolean):", pedidoConfirmado);
console.log("Observação (null):", observacao);

// 6, 7 e 10. Simulação do pedido, cálculos e template literal.
const bebida = 7;
const desconto = 5;
const pessoas = 2;
const subtotal = preco * quantidade;
const totalComBebida = subtotal + bebida;
const total = totalComBebida - desconto;
const valorPorPessoa = total / pessoas;
const entregaGratis = total >= 50;

console.log(`Cliente: ${nomeCliente}. Pedido: ${quantidade}x ${produto}.`);
console.log(`Subtotal dos lanches: R$ ${subtotal.toFixed(2)}.`);
console.log(`Bebida: R$ ${bebida.toFixed(2)}. Desconto: R$ ${desconto.toFixed(2)}.`);
console.log(`Total: R$ ${total.toFixed(2)}. Dividido entre ${pessoas} pessoas: R$ ${valorPorPessoa.toFixed(2)}.`);
console.log("Tem entrega grátis?", entregaGratis);

// 8. Decisão sobre a entrega do pedido.
if (entregaGratis) {
  console.log("Seu pedido recebeu entrega grátis!");
} else {
  console.log("Seu pedido tem taxa de entrega de R$ 8,00.");
}

// Outro valor para testar também o caminho falso do if/else.
let totalTeste = 32;
console.log(`Segundo teste: pedido de R$ ${totalTeste.toFixed(2)}.`);
if (totalTeste >= 50) {
  console.log("Seu pedido recebeu entrega grátis!");
} else {
  console.log("Seu pedido tem taxa de entrega de R$ 8,00.");
}
