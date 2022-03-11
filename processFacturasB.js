function getPrecioCosto(){

    let preciocosto = parseFloat(document.getElementById("preciocosto").value);
    return preciocosto;
}

function getPorcentaje(){

    let porcentaje = parseFloat(document.getElementById("porcentaje").value);
    return porcentaje;
}

function getPorcentajeIVA(){

    let porcentajeIVA= parseFloat(document.getElementById("porcentajeIVA").value);
    return porcentajeIVA;
}

function clean(){

    //document.getElementById("formulario").reset();
}

function getPrecioDelIVA(){

    let precioDelIVA = (getPorcentajeIVA() * getPrecioCosto()) / parseFloat(100);
    return precioDelIVA;
}

function getPrecioConIVA(){

    let precioConIVA = getPrecioDelIVA() + getPrecioCosto();
    return precioConIVA;
}

function PrecioDelPorcentajeConIVA(){

    let precioDelPorcentaje = (getPorcentaje() * getPrecioConIVA()) / parseFloat(100);
    return precioDelPorcentaje;
}

function getPrecioFinalConIVA(){

    let precioFinal = PrecioDelPorcentajeConIVA() + getPrecioConIVA();
    document.getElementById("precioFinalConIVA").innerHTML = precioFinal;
}

/* FUNCIONES PARA CALCULAR SIN IVA  */

function getPrecioCostoSinIVA(){

    let preciocosto = parseFloat(document.getElementById("precioCostoSinIVA").value);
    return preciocosto;
}

function getPorcentajeSinIVA(){

    let porcentaje = parseFloat(document.getElementById("porcentajeSinIVA").value);
    return porcentaje;
}

function getPrecioPorcentajeSinIVA(){

    let precioPorcentaje = (getPorcentajeSinIVA() * getPrecioCostoSinIVA()) / parseFloat(100);
    return precioPorcentaje;
} 


function getPrecioFinalSinIVA(){

    let precioFinal = getPrecioPorcentajeSinIVA() + getPrecioCostoSinIVA();
    document.getElementById("precioFinalSinIVA").innerHTML = precioFinal;
}