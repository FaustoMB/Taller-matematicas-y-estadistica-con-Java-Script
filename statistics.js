const precio = document.querySelector('#precio')
const descuento = document.querySelector('#descuento')
const resultado = document.querySelector('#precioConDescuento')
const calcular = document.querySelector('#calcular')
const cupon = document.querySelector('#cupon')

calcular.addEventListener('click',calculoPrecioConDescuento);


const cupones = {
    'C50' : 50,
    'C25' : 25,
    'C10' : 10 
}
function calculoPrecioConDescuento () {

    if (descuento.value > 100){
        resultado.innerText = 'No puede haber un descuento superior al 100%'
    } else if (!descuento.value && !precio.value && !cupon.value){
        resultado.innerText = 'No has ingresado ningún valor'
    }else if (!precio.value ){
        resultado.innerText = 'No has ingresado el precio'
    } else if (!descuento.value && !cupon.value){
        resultado.innerText = 'No has ingresado ningún descuento y/o cupon'
    }  else if (descuento.value < 100 && descuento.value){
        const precioConDescuento = ((parseInt(precio.value) * (100 - parseInt(descuento.value)))/100);
        console.log(precioConDescuento);
        resultado.innerText = "El " + parseInt(descuento.value) + "% de descuento de $" + parseInt(precio.value) +" es $" + precioConDescuento;
    } else if (cupones[cupon.value]) {
        const precioConDescuento = ((parseInt(precio.value) * (100 - parseInt(cupones[cupon.value])))/100);
        console.log(precioConDescuento);
        resultado.innerText = "El cupon de descuento " + cupon.value + " tiene un "  + parseInt(cupones[cupon.value]) + "% de descuento, el precio original es de $" + parseInt(precio.value) +" y con el descuento es $" + precioConDescuento;
    }else {
        resultado.innerText = 'El cupon no es valido'
    }
    
}