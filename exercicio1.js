// 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).



function calc(n1, n2, n3, letter) {
    if (letter == "a") {
      document.write((n1 + n2 + n3) / 3);
    } else if (letter == "p") {
      document.write((n1 * 5 + n2 * 3 + n3 * 2) / 10);
    } else {
      document.write("letra nao permitida");
    }
  }

  calc(
    parseInt(prompt("digite o primeiro valor")),
    parseInt(prompt("digite o segundo valor")),
    parseInt(prompt("digite o terceiro valor")),
    prompt("digite a letra para a operacao")
  );