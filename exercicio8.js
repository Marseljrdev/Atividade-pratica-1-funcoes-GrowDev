// 8. Crie uma função chamada mostrarDobro(num), que recebe um
// parâmetro sendo um número inteiro. Esta função será chamada ao
// abrir a página e mostrará um alerta com o resultado. Exemplo: “O
// dobro do número 5 é 10.”


mostrarDobro(parseInt(prompt("Digite um numero inteiro: ")));

function mostrarDobro(num) {

    let multiplica = 2;

    let result = num * multiplica;

    alert(`O dobro de ${num} é ${result}`);

}