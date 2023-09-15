   

let jogadas = [];
for (let i = 0; i < jogadores.length; i++) {
    jogadas.push(jogadores[i].jogada);
}

let contagemZero = 0;
let contagemUm = 0;
for (let i = 0; i < jogadas.length; i++) {
    if (jogadas[i] === 0) {
        contagemZero++;
    } else if (jogadas[i] === 1) {
        contagemUm++;
    }
}

let resultado;
if (contagemZero === 1) {
    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].jogada === 0) {
            resultado = jogadores[i].nome;
            break;
        }
    }
} else if (contagemUm === 1) {
    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].jogada === 1) {
            resultado = jogadores[i].nome;
            break;
        }
    }
} else {
    resultado = 'NINGUEM';
}

console.log(resultado);
