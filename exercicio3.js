// 3. Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.



function isPrime(value) {
    let divisor = 2;

    if(value > 0) {

        do{
            divisor += 1;
        }while( value % divisor !== 0 );

        if( value == divisor ) {
            console.log('é um numero primo');
        }else {
            console.log('nao é primo');
        }

    }

    
}

isPrime(parseInt(prompt('Digite um numero: ')));