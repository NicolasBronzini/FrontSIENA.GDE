




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
  
btnSwitch.addEventListener("click", () => {
  
  displayItemUnico.classList.toggle("active");
  btnSwitch.classList.toggle("active");
  btnSwichItemUnico.classList.toggle("reactive");
  btnAsociaUnicoItem.classList.toggle("reactive");
  InputTipoDocuSIENA.classList.toggle("reactive");
  path_quitar.classList.toggle("reactive");
  path_colocar.classList.toggle("reactive")
});

btnSwichItemUnico.addEventListener("click", () => {
  displayItemUnico.classList.toggle("reactive");
  btnSwichItemUnico.classList.toggle("active");
  btnAsociaUnicoItem.classList.toggle("active");
  InputTipoDocuSIENA.classList.toggle("active");
  path_quitar.classList.toggle("active");
  path_colocar.classList.toggle("active")
  container_AltaFirmaBtn.classList.toggle("active")



 
});



 