function getPrecioCostoSinIVA(){

    let preciocosto = parseFloat(document.getElementById("precioCostoSinIVA").value);
    return preciocosto;
}

function getPorcentajeSinIVA(){

    let porcentaje = parseFloat(document.getElementById("porcentajeSinIVA").value);
    return porcentaje;
}

function getCantidadBulto(){

    let cantidadBulto = parseFloat(document.getElementById("cantidadBulto").value);
    return cantidadBulto;
}

function getPrecioPorcentajeSinIVA(){

    let precioPorcentaje = (getPorcentajeSinIVA() * getPrecioCostoSinIVA()) / parseFloat(100);
    return precioPorcentaje;
}

function getPrecioFinalSinIVA(){

    let precioFinal = getPrecioCostoSinIVA() + getPrecioPorcentajeSinIVA();
    document.getElementById("precioFinalUnidadSinIVA").innerHTML = "$ " + precioFinal; 

    //let precioFinalUnidad = precioFinalBulto / getCantidadBulto();
    //document.getElementById("precioFinalUnidadSinIVA").innerHTML = precioFinalUnidad;  

    //let precioFinalBulto = getPrecioPorcentajeSinIVA() + getPrecioCostoSinIVA();
    //document.getElementById("precioFinalBultoSinIVA").innerHTML = precioFinalBulto;

     
    
}

/*
function cleanInputs(){

    document.getElementById("precioCostoSinIVA").reset();
    document.getElementById("porcentajeSinIVA").reset();
    document.getElementById("cantidadBulto").reset();
}
*/