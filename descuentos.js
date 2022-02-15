
function precioDescuento(precio, descuento){
    const descuentoPagar = 100 - descuento;
    const valorPagar = (precio * descuentoPagar)/100;
    return valorPagar;
}

const cupones = [
    "basico", "intermedio", "experto", "avanzado"
]

function descuentoP(){
    const inputPrecio = document.getElementById("precio");
    const precio = inputPrecio.value;
    const inputCupon = document.getElementById("cupon");
    const cupon = inputCupon.value;

    let descuento;

    if (!cupones.includes(cupon)){
        alert("el cupon "+cupon+" no es valido");
    }else{
        switch(cupon){
            case cupones[0]:
                descuento = 10;
            break;
            case cupones[1]:
                descuento = 15;
            break;
            case cupones[2]:
                descuento = 20;
            break;
            case cupones[3]:
                descuento = 25;
            break;
        }
    }

    const pDescuento = document.getElementById("descuento");
    pDescuento.innerText = descuento;
    const totalDescuento = precioDescuento(precio, descuento);
    const resultado = document.getElementById("resultado");
    resultado.innerText = "el precio con descuento es de: $" + totalDescuento;
   
}