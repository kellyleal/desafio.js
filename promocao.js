  
let lista = precos;
let valorMinimo = -1;
if (lista.length >= 3) {
    for (let i = 0; i < lista.length; i++) {
        if (valorMinimo === -1 || lista[i] < valorMinimo) {
            valorMinimo = lista[i];
        }
    }
}
let somar = 0;
for (let i = 0; i < lista.length; i++) {
    somar += lista[i];
}
if (valorMinimo !== -1) {
    let desconto = valorMinimo * 0.5;
    somar -= valorMinimo;
    somar += desconto;
}
console.log(somar);
