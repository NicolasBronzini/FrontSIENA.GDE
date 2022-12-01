
// Variables BTN Caratulaxion
let btnTrataUnicaCaratulacion = document.querySelector('#switchTrataUnicaCaratulacion')
let btnAsociaCaratulacion = document.querySelector('#switchAsociaExpedienteCaratulacion')
let btnAsociacionSienaCaratulacion = document.querySelector('#switchAsociacionSIENACaratulacion')
let btnMotivoInternoEECaratulacion = document.querySelector('#switchMotivoInternoEECaratulacion')
let btnAsociaciaUnicoEECaratulacion2 = document.querySelector('#switchAsociaUnicoEEPase2')
// Funcion CLICK BTN Trata Unica Caratulacion
btnTrataUnicaCaratulacion.addEventListener("click", () => {
  
 
    btnTrataUnicaCaratulacion.classList.toggle("active");
  });
// Funcion CLICK BTN Asocia Expediente 
btnAsociaCaratulacion.addEventListener("click", () => {

  btnAsociaCaratulacion.classList.toggle("active"); 
  });
  // Funcion CLICK BTN Asocia Expediente  SIENA
  btnAsociacionSienaCaratulacion.addEventListener("click", () => {
    btnAsociacionSienaCaratulacion.classList.toggle("active");
  });
  // Funcion CLICK BTN Asocia Unico Expediente 
  btnMotivoInternoEECaratulacion.addEventListener("click", () => {
    btnMotivoInternoEECaratulacion.classList.toggle("active");
  });
  
  
// BTN FIRMA

  //Permite asociacion y activa el siguiente btn
  let btnSwitch = document.querySelector("#SwichAsociacion");
  let displayItemUnico = document.querySelector(".btn_Unico_Item")
  //Btn Asocia a unico Item
  let InputTipoDocuSIENA = document.querySelector("#div_InputTipoDocumentoSIENA");
  let btnSwichItemUnico = document.querySelector("#SwichItemUnico");
  let btnAsociaUnicoItem = document.querySelector("#InputActiveEntidad");
  let path_quitar = document.querySelector("#UbicacionPath2");
  let path_colocar =document.querySelector("#UbicacionPath");
  let container_AltaFirmaBtn = document.querySelector("#Alta_firma_container_btn")

  // Funciones click btn
  btnSwitch.addEventListener("click",BtnPermiteAsociar );

  function BtnPermiteAsociar(){
        displayItemUnico.classList.toggle("active");
    btnSwitch.classList.toggle("active");
    btnSwichItemUnico.classList.toggle("reactive");
    btnAsociaUnicoItem.classList.toggle("reactive");
    InputTipoDocuSIENA.classList.toggle("reactive");
    path_quitar.classList.toggle("reactive");
    path_colocar.classList.toggle("reactive")

      btnSwichItemUnico.addEventListener("click",BtnSwichItemUnico );

      function BtnSwichItemUnico()  {
        displayItemUnico.classList.toggle("reactive");
        btnSwichItemUnico.classList.toggle("active");
        btnAsociaUnicoItem.classList.toggle("active");
        InputTipoDocuSIENA.classList.toggle("active");
        path_quitar.classList.toggle("active");
        path_colocar.classList.toggle("active")
        container_AltaFirmaBtn.classList.toggle("active")
       
    };

  
}




// Variables BTN PASE

let btnDestinoPase = document.querySelector('#switchDestinoUnicoPase')
let btnAsociaPase = document.querySelector('#switchAsociaExpedientePase')
let btnAsociacionSienaPase = document.querySelector('#switchAsociacionSIENA')
let btnAsociaciaUnicoEEPase = document.querySelector('#switchAsociaUnicoEEPase')
let btnAsociaciaUnicoEEPase2 = document.querySelector('#switchAsociaUnicoEEPase2')


// Funcion CLICK BTN Destino Unico Pase
btnDestinoPase.addEventListener("click", () => { 
    btnDestinoPase.classList.toggle("active");
  });

// Funcion CLICK BTN Asocia Expediente 
  btnAsociaPase.addEventListener("click", () => {
    btnAsociaPase.classList.toggle("active");  
  });
  // Funcion CLICK BTN Asocia Expediente 
  btnAsociacionSienaPase.addEventListener("click", () => {
   btnAsociacionSienaPase.classList.toggle("active");
  });
  // Funcion CLICK BTN Asocia Unico Expediente 
  btnAsociaciaUnicoEEPase.addEventListener("click", () => {
    btnAsociaciaUnicoEEPase.classList.toggle("active");
  });
   // Funcion CLICK BTN Asocia Unico Expediente 
   btnAsociaciaUnicoEEPase2.addEventListener("click", () => {
    btnAsociaciaUnicoEEPase2.classList.toggle("active");
  });
  



// Variables BTN Vinculacion

let btnAsociaUnicoItemPrincipalVincular = document.querySelector('#SwitchAsociaUnicoEEPrincipalVincular');
let btnAsociacionSienaVincular = document.querySelector('#SwitchAsociaSienaVincular');
let btnAsociaciaUnicoEEVincular = document.querySelector('#SwitchAsociaUnicoItemVincular');

// Funcion CLICK BTN Destino Unico Vincular
btnAsociaUnicoItemPrincipalVincular.addEventListener("click", () => {
  
    btnAsociaUnicoItemPrincipalVincular.classList.toggle("active");
  });

// Funcion CLICK BTN Asocia Expediente Siena
btnAsociacionSienaVincular.addEventListener("click", () => {
  
 
    btnAsociacionSienaVincular.classList.toggle("active");
    
  });
  // Funcion CLICK BTN Asocia Expediente Principal
  btnAsociaciaUnicoEEVincular.addEventListener("click", () => {
  btnAsociaciaUnicoEEVincular.classList.toggle("active");
  });
  