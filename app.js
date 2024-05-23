alert('seja bem vindo ao jogo do número secreto'); 
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
          alert (`errou:(, o número secreto é menor que ${chute}`);
        } else {
          alert (`errou:(, o numero secreto é maior que ${chute}`);
        } 
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`parabéns, você conseguiu descobrir o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} `);
