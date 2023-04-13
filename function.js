//Questões precisam ser comentadas para testar individualmente

//01. Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100. 
var i = 101;

while (i <= 110) {
    console.log(i);
    i++;
}

// 02. Faça um script que leia três números inteiros e mostre o maior deles.
var num1 = parseInt(prompt("Digite o primeiro número"));
var num2 = parseInt(prompt("Digite o segundo número"));
var num3 = parseInt(prompt("Digite o terceiro número"));

console.log("O maior número:");
if (num1 > num2 && num1 > num3) {
    console.log("O número " + num1 + " é maior que os demais");
} else if (num2 > num1 && num2 > num3) {
    console.log("O número " + num2 + " é maior que os demais");
} else {
    console.log("O número " + num3 + " é maior que os demais");
}


//03. Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles. 
var num1 = parseInt(prompt("Digite o primeiro número"));
var num2 = parseInt(prompt("Digite o segundo número"));
var num3 = parseInt(prompt("Digite o terceiro número"));


console.log("O maior número:");
if (num1 > num2 && num1 > num3) {
    console.log("O número " + num1 + " é maior que os demais");
} else if (num2 > num1 && num2 > num3) {
    console.log("O número " + num2 + " é maior que os demais");
} else {
    console.log("O número " + num3 + " é maior que os demais");
}

console.log("O menor número: ");
if (num1 < num2 && num1 < num3) {
    console.log("O número " + num1 + " é menor que os demais");
} else if (num2 < num1 && num2 < num3) {
    console.log("O número " + num2 + " é menor que os demais");
} else {
    console.log("O número " + num3 + " é menor que os demais");
}


//04. Faça um algoritmo que possua as variáveis nome, cpf, idade, data_nascimento. Atribua valores a ela e mostre seus valores. 
var nome = "Mariana";
var cpf = "123.456.789-10";
var idade = 26;
var data_nascimento = new Date(1997, 1, 05);

console.log("Meu nome é " + nome + ", CPF " + cpf + ", " + idade + " anos e data de nascimento " + data_nascimento.getDate() + "/" + data_nascimento.getMonth() + "/" + data_nascimento.getFullYear());


//Faça um algoritmo que tenha as variáveis nomeproduto, preco, estoque, validade. Atribua valores a elas e mostre na body. 
var nomeproduto = "Ovo de Páscoa";
var preco = 89.90;
var estoque = 15;
var validade = new Date(2023, 10, 15);


document.body.innerHTML = "<h1>Produtos: </h1>"+ 
"<p> Nome do Produto: " + nomeproduto + "</p>" +
"<p>Preço: R$" + preco + "</p>" +
"<p>Estoque: " + estoque + "</p>" +
"<p>Validade: " + validade.getDate() + "/" + validade.getMonth() + "/" + validade.getFullYear() + "</p>";

//06. Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius

var f = parseFloat(prompt("Entre o valor em Fahrenheit:"));
var celsius = ((f - 32 ) / 9) * 5;

document.write("O valor de " + f + " fahrenheit, representará " + celsius.toFixed(2) + " em celsius");


//07. Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. 

var salarioMensal = parseFloat(prompt("Entre o valor do salário atual:"));
var percentualReajuste = parseInt(prompt("Entre o percentual de reajuste"));

var reajuste = salarioMensal * (percentualReajuste/100);
var salarioComAjuste = salarioMensal + reajuste;

document.write("O salário mensal é de: R$" + salarioMensal + ". <br>" +
               "Com um percentual de reajuste de " + percentualReajuste + "%, o novo salário será R$" + salarioComAjuste.toFixed(2));


/*08. O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2 
Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com as informações abaixo:
a.	IMC em adultos Condição 
b.	Abaixo de 18,5 Abaixo do peso 
c.	Entre 18,5 e 25 Peso normal 
d.	Acima de 25 e 30 Acima do peso 
e.	Acima de 30 obeso */

var peso = parseFloat(prompt("Digite o peso:"));
var altura = parseFloat(prompt("Digite a altura:"))
var imc = peso / Math.pow(altura, 2);



if(imc < 18.5) {
    document.body.innerHTML = "<p>Abaixo de 18.5, abaixo do peso. Valor do IMC: " + imc.toFixed(2) + "</p>";
} else if (imc >= 18.5 && imc <= 25) {
    document.body.innerHTML = "<p>Entre 18.5 e 25, peso normal. Valor do IMC: " + imc.toFixed(2) + "</p>";
} else if (imc > 25 && imc < 30) {
    document.body.innerHTML = "<p>Acima de 25 e menor que 30, acima do peso. Valor do IMC: " + imc.toFixed(2) + "</p>";
} else {
    document.body.innerHTML = "<p>Acima de 30, obeso. Valor do IMC: " + imc.toFixed(2) + "</p>";
}

