const entrada = require("prompt-sync")({ sigint: true });
let salarioAtual = parseFloat(entrada("Informe o seu salário atual: "));
let aumentoAplicado;
let valorDoAumento;
let novoSalario;
if (salarioAtual <= 280.0) {
  aumentoAplicado = 20;
} else if (salarioAtual <= 700.0) {
  aumentoAplicado = 15;
} else if (salarioAtual <= 1500.0) {
  aumentoAplicado = 10;
} else {
  aumentoAplicado = 5;
}
valorDoAumento = salarioAtual * (aumentoAplicado / 100);
novoSalario = salarioAtual + valorDoAumento;
console.log("o seu salario atual é: ", salarioAtual);
console.log("o aumento aplicado foi: ", aumentoAplicado);
console.log("O valor do aumento: ", valorDoAumento);
console.log("O seu novo salário após o aumento: ", novoSalario);
