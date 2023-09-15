

    let j = 0;
    for (let i = 0; i < digitado.length; i++) {
        if (digitado[i] === senha[j]) {
            j++;
        }
        if (j === senha.length) {
            console.log("SIM");
            break;
        }
    }
    if (j !== senha.length) {
        console.log("NAO");
    }

