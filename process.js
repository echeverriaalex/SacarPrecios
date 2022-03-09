function getPrecioCosto(){

    let preciocosto = parseFloat(document.getElementById("preciocosto").value);
    return preciocosto;
}

function getPorcentaje(){

    let porcentaje = parseFloat(document.getElementById("porcentaje").value);
    return porcentaje;
}

function clean(){

    //document.getElementById("formulario").reset();
}

function getPrecioFinal(){

    /* 
    var preciocosto = getPrecioCosto();
    console.log(preciocosto);

    var porcentaje = getPorcentaje();
    console.log(porcentaje);

    console.log(typeof(preciocosto));

    preciocosto = Number(preciocosto);
    console.log(typeof(preciocosto));
    */


    var precioPorcentaje = (getPorcentaje() * getPrecioCosto()) / parseFloat(100);
    var precioFinal = getPrecioCosto() + parseFloat(precioPorcentaje);

    
    //console.log(precioFinal);
    document.getElementById("preciofinal").innerHTML = precioFinal;
    //alert(precioFinal);
}