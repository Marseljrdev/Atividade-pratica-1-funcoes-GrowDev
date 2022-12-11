// 9.  Crie uma função chamada calcularMedia(nota1, nota2, nota3,
//     nome), que recebe 4 parâmetros sendo três inteiros e um texto
//     (String). Esta função será chamada ao abrir a página e mostrará um
//     alerta com a média. Exemplo: “João, sua média é 70.” A função
//     também deve mostrar no console.log() as notas recebidas. Exemplo
//     “Nota 1: 60,Nota 2: 70,Nota 3: 80”.

var nome = prompt("Digite seu nome: ");
var nota1 = parseInt(prompt("Digite sua primeira nota: "));
var nota2 = parseInt(prompt("Digite sua segunda nota: "));
var nota3 = parseInt(prompt("Digite sua terceira nota: "));

calcularMedia(nome, nota1, nota2, nota3);

function calcularMedia(nome, nota1, nota2, nota3) {

    let result = 0;

    result = (nota1 + nota2 + nota3) / 3;
    
    alert(`${nome}, sua media é ${result.toFixed(1)}`);

    console.log(`Nota 1: ${nota1}`);
    console.log(`Nota 2: ${nota2}`);
    console.log(`Nota 3: ${nota3}`);
    // return parseFloat(result);

}
