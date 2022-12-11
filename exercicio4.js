// 4. Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.

// Ex:
// Entrada: 3672
// Saída: 1:1:12

let infoTempo = parseInt(prompt("Digite um tempo para converter: "));

let recebeParams = conversorTempo(infoTempo);

function conversorTempo(segundo) {


    let hora = segundo / 3600;
    let minutos = segundo / 60;
    let segundos = hora % minutos;

    document.write(`A quantidade de segundos é: ${segundo} <br>`);

    document.write(`Tempo em horas, minutos e segundos: ${hora.toFixed(0)}:${minutos.toFixed(0)}:${segundos.toFixed(0)}`);


}

