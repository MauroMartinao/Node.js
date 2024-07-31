function gastoCombustivel(distancia, combustivel) {
    if (distancia <= 0 || !Number.isInteger(distancia)) {
        return "parametros invalidos";        
    }
    
    if (combustivel !== "gasolina" && combustivel !== "etanol") {
        return "parametros invalidos";
    }

    const consumoGasolina = 16;
    const consumoEtanol = 11;

    let litrosNecessarios;

    if (combustivel === "gasolina") {
        litrosNecessarios = distancia / (consumoGasolina * 1000);    
    } else if (combustivel === "etanol") {
        litrosNecessarios = distancia / (consumoEtanol * 1000);
    }

    return litrosNecessarios;
}

module.exports = { gastoCombustivel };
