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

function esPar (lista){
    return lista.length % 2 == 0
}

function calcularMediana (listaDesordenada) {
    const lista = ordenarLista(listaDesordenada)
    const listaEsPar = esPar(lista)

    if (listaEsPar){
        const indexMitadListaPar1 = (lista.length / 2);
        console.log(indexMitadListaPar1);
        const indexMitadListaPar2 = (lista.length / 2) - 1;
        const medianaListaPar = (lista[indexMitadListaPar1] + lista[indexMitadListaPar2]) / 2;
        console.log(medianaListaPar);
        return medianaListaPar
    }else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(medianaListaImpar);
        return medianaListaImpar
    }
}

function ordenarLista (listaDesordenada){
    function ordenarListaSort (valorAcumulado, nuevoValor){
        // if (valorAcumulado > nuevoValor) {
        //     return 1;
        // } else if (valorAcumulado == nuevoValor) {
        //     return 0;
        // } else if (valorAcumulado < nuevoValor) {
        //     return -1;
        // }

        return valorAcumulado - nuevoValor;
    }

    const lista = listaDesordenada.sort(ordenarListaSort)
    
    return lista
}

function calcularModa (lista) {
    let listaCount = {};
    
    for (dato of lista){
       
        if (listaCount[dato]){
            listaCount[dato] += 1;
        } else {
            listaCount[dato] = 1;
        }
    }

    const listaArray = Object.entries(listaCount)
}