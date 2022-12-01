function validarAltaFirma(arr)
{
    for(let i = 0; i< arr.length; i++){
        if(arr[i] == "" || arr[i] == null || arr[i] == "Seleccionar"){
            return false;
        }
    }
    return true;
}

export{
    validarAltaFirma
}