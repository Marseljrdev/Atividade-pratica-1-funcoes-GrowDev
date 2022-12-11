// 5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.

// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores



numPerfeito(parseInt(prompt("Digite um numero inteiro: ")));

function numPerfeito(value) {
        let i = 1;
        let soma = 0;
        while (i < value) {
            
            if( value % i == 0 ) {

                soma += i;
            }

            i++;
        }
            if( soma == value ){
                console.log('Numero perfeito');
            }else{
                console.log('Numero imperfeito');
            }
            
  

} 