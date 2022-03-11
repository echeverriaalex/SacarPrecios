function getPrecioCosto(){

    let preciocosto = parseFloat(document.getElementById("precioCostoIVA").value);
    return preciocosto;
}

function getPorcentaje(){

    let porcentaje = parseFloat(document.getElementById("porcentajeA").value);
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