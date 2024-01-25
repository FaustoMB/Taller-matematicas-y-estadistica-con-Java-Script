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

const empresas = {};

for (persona of salarios){
    for (trabajo of persona.trabajos){
        if (!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }

        if (!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = []
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

console.log(empresas);

function medianaEmpresaYear(nombre,year){
    if (!empresas[nombre]){
        console.warn('La empresa no existe');
    } else if( !empresas[nombre][year]){
        console.warn('La empresa no tuvo registros salariales ese año')
    } else {
        return MathStatistics.calcularMediana(empresas[nombre][year])
    }
    
}

function medianaEmpresaYear(nombre,year){
    if (!empresas[nombre]){
        console.warn('La empresa no existe');
    } else if( !empresas[nombre][year]){
        console.warn('La empresa no tuvo registros salariales ese año')
    } else {
        return MathStatistics.calcularMediana(empresas[nombre][year])
    }
}

function proyeccionPorEmpresa(nombre){
    if (!empresas[nombre]){
        console.warn('La empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {return medianaEmpresaYear(nombre,year)})
        
        let porcentajesCrecimiento = [];

        for (let i = 1; i< listaMedianaYears.length; i++){
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears [i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            console.log(porcentajeCrecimiento);
            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }
        
        const medianaPorcentajesCrecimiento = MathStatistics.calcularMediana(porcentajesCrecimiento);

        const ultimaMedianaSalarios = listaMedianaYears[listaMedianaYears.length - 1];
        const nuevaMedianaSalarios = ultimaMedianaSalarios * (1 + medianaPorcentajesCrecimiento);
    
        return nuevaMedianaSalarios;

        
    }
}