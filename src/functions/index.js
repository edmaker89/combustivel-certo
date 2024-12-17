function calcularCombustivelCerto(gasolina, etanol) {
    if (gasolina / etanol >= 0.7) {
        return 'Gasolina'
    } else {
        return 'Etanol'
    }
}

export { calcularCombustivelCerto }