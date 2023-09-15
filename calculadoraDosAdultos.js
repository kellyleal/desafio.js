
for (let i = 0; i < lista.length; i++) {
    if (lista[i] >= 18) {
        if (idadeMinima === -1 || lista[i] < idadeMinima) {
            idadeMinima = lista[i];
        }
    }
}
if (idadeMinima !== -1) {
    console.log(idadeMinima);
} else {
    console.log("CRESCA E APARECA");
}

  
