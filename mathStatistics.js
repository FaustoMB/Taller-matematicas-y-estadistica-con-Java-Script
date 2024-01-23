function calcularPromedio (lista){
    const totalElementos = lista.length;
    let sumaElementos = 0;
    for (valor of lista){
        sumaElementos += valor;
    }
    const average = sumaElementos / totalElementos;
    return average
}