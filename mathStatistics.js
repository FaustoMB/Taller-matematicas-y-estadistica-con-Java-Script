function calcularPromedio (lista){
    // const totalElementos = lista.length;
    // let sumaElementos = 0;
    // for (valor of lista){
    //     sumaElementos += valor;
    // }
    // const average = sumaElementos / totalElementos;
    // return average


    // function sumarTodosElementos (valorAcumulado, nuevoValor){
    //     return valorAcumulado + nuevoValor;
    // }

    // const sumaElementos = lista.reduce(sumarTodosElementos);
    // const average = sumaElementos / lista.length;
    // return average

    const sumaElementos = lista.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor);
    const average = sumaElementos / lista.length;
    return average
}