
for (let i = limiteInferior; i <= limiteSuperior; i++) {
    if (i === numero) {
        resultado = true;
        break;
    }
}

if (resultado) {
    console.log("PERTENCE");
} else {
    console.log("NAO PERTENCE");
}