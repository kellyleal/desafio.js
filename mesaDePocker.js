
    let resultado = [];

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] >= min && valores[i] <= max) {
            resultado.push(valores[i]);
        }
    }
    
    console.log(resultado);
    