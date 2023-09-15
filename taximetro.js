
    let kilometro = km;
    let tempoViagem = min;
    let resultado = 0;
    
    if (tempoViagem > 20) {
        resultado += 20 * 50 + (tempoViagem - 20) * 30;
    } else {
        resultado += tempoViagem * 50;
    }
    
    if (kilometro > 10) {
        resultado += 10 * 70 + (kilometro - 10) * 50;
    } else {
        resultado += kilometro * 70;
    }
    
    console.log(Math.round(resultado));
    
    
    
    