console.log(salarios);



function encontrarPersona (personaEnBusqueda){
    return salarios.find(persona => persona.name == personaEnBusqueda);
}

function medianaPorPersona (nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    const salarios = trabajos.map(function (elemento){
        return elemento.salario
    })
    
    
    const medianaSalarios = MathStatistics.calcularMediana(salarios)
    console.log(medianaSalarios);
    return medianaSalarios;
    
    // MathStatistic.calcularMediana(trabajos.find (sala))
}

function proyeccionPorPersona (nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i< trabajos.length; i++){
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos [i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        console.log(porcentajeCrecimiento);
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }
    
    const medianaPorcentajesCrecimiento = MathStatistics.calcularMediana(porcentajesCrecimiento);
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const nuevoSalario = ultimoSalario * (1 + medianaPorcentajesCrecimiento);

    return nuevoSalario
}