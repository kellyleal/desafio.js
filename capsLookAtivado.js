
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === texto[i].toUpperCase()) {
            resultado += texto[i].toLowerCase();
        } else {
            resultado += texto[i].toUpperCase();
        }
    
}
    console.log(resultado);

