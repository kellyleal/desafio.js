    
let jogadas = numeros;
let soma = 0;
for (let i = 0; i < jogadas.length; i++) {
    soma += jogadas[i];
}
let posicao = soma % jogadas.length;
if (posicao === 0) {
    posicao = jogadas.length;
}
console.log(posicao);
  