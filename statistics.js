const precio = document.querySelector('#precio')
const descuento = document.querySelector('#descuento')
const resultado = document.querySelector('#precioConDescuento')
const calcular = document.querySelector('#calcular')

calcular.addEventListener('click',calculoPrecioConDescuento);

function calculoPrecioConDescuento () {
    const precioConDescuento = ((parseInt(precio.value) * (100 - parseInt(descuento.value)))/100);
    console.log(precioConDescuento);
    resultado.innerText = precioConDescuento;
}