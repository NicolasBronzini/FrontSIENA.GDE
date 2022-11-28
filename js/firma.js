class Firma {
    constructor(id, referencia, firmante, tipoDocumento, path, permiteAsociacion) {
        this.id = id;
        this.referencia = referencia;
        this.firmante = firmante;
        this.tipoDocumento = tipoDocumento;
        this.path = path;
        this.permiteAsociacion = permiteAsociacion;
    }
}

class Firma_Compleja extends Firma{
    constructor(id, referencia, firmante, tipoDocumento, path, permiteAsociacion, asociaItem, entidad, tipoDeDocumentoSiena){
        super(id, referencia, firmante, tipoDocumento, path, permiteAsociacion);
        
        this.asociaItem = asociaItem;
        this.entidad = entidad;
        this.tipoDeDocumentoSiena = tipoDeDocumentoSiena;
    }
}

export{
    Firma,
    Firma_Compleja
}