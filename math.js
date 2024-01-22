console.group('Cuadrado')
const ladoCuadrado = 5;
const perimetroCuadrado = (ladoCuadrado * 4) + " cm";
const areaCuadrado = (Math.pow(ladoCuadrado,2)) + " cm^2";

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

function calcularCuadrado (lado) {

    return {
        perimetro: lado *4,
        area: lado ** 2
    }
}

console.groupEnd('Cuadrado')

console.group('Triangulo')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = Math.sqrt((Math.pow(ladoTriangulo1,2)) - (Math.pow(ladoTrianguloBase/2,2)));

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = ladoTrianguloBase * alturaTriangulo / 2;

function calcularTriangulo (lado1,lado2,base) {
    altura = Math.sqrt((Math.pow(ladoTriangulo1,2)) - (Math.pow(ladoTrianguloBase/2,2)))

    return {
        perimetro: lado1 + lado2 + base,
        area: base * altura / 2
    }
}

function calcularTrianguloHeron (lado1,lado2,base) {
    const S = (lado1 + lado2 + base)/2

    return {
        perimetro: lado1 + lado2 + base,
        area: Math.sqrt(S*(S-lado1)*(S-lado2)*(S-base))
    }
}

function calcularAlturaTrianguloIsosceles (lados,base){
    if (lados == base){
        console.warn('Este no es un triangulo isosceles')
    } else {
        return Math.sqrt((lado1 ** 2) - ((base ** 2)/4))
    }
}

function calcularAlturaTrianguloEscaleno (lado1,lado2,base){
    if (lado1 == lado2 || lado2 == base || lado1 == base){
        console.warn('Este no es un triangulo Escaleno')
    } else {
        const S = (lado1 + lado2 + base) / 2
        return (2/base) * Math.sqrt(((S) * (S - base) * (S - lado1) * (S - lado2)))
    }

}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    perimetroTriangulo,
    areaTriangulo
});

console.groupEnd('Triangulo')

console.group('Circulo')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const permimetroCirculo = 2 * Math.PI * radioCirculo;
const areaCirculo = Math.PI * (radioCirculo**2);

console.log({
    radioCirculo,
    diametroCirculo,
    permimetroCirculo,
    areaCirculo
})

function calcularCirculo (radio) {
    return {
        perimetro: 2 * Math.PI * radio,
        area: (radio ** 2) * Math.PI
    }
}

console.groupEnd('Circulo')