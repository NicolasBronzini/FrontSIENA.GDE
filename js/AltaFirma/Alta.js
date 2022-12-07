import {buildTable, refreshTable, hideColumns} from "./tabla.js";
import { validarAltaFirma } from "./validaciones.js";
import { Firma, Firma_Compleja } from "./firma.js";


//SwichAsociacion btn
//SwichItemUnico btn
// btnGuardar btn
//btnCancelar btn
//btnProcesar btn

const altas = [];
window.addEventListener("load", () => {        
    let lista = chequearPrimeraVez();
    buildTable(lista);
});


let btnGuardar = document.getElementById("btnGuardarFirma");
btnGuardar.addEventListener("click", ()=>{
    let inputs = getDatosFromAlta();
    if(validarAltaFirma(inputs))
    {
        let firma = new Firma(Math.floor(Math.random() * 100001), inputs[0], inputs[1], inputs[2], inputs[3])
        altas.push(firma);
        if(document.getElementById("tabla_alta_firma") != null){
            localStorage.setItem('lista_altas_firma', JSON.stringify(altas));
            refreshTable(altas);
        }else{
            localStorage.setItem('lista_altas_firma', JSON.stringify(altas));
            buildTable(altas);
        }
    }else{
        alert('No se pueden dejar campos vacios');
    }
});

//guardo en el storage
function chequearPrimeraVez(){
    let lista = null;
    if(localStorage.getItem('si_fue_visitada')){
        lista = JSON.parse(localStorage.getItem('lista_altas_firma'));
        return lista;
    }
    
    localStorage.setItem('si_fue_visitada', true);
    localStorage.setItem('lista_altas_firma', JSON.stringify(lista));
    lista = JSON.parse(localStorage.getItem('lista_altas_firma'));
    return lista; 
}

//Me quedo con los datos del form de alta
function getDatosFromAlta(){
    let arrValido = [];
    let NombreDelDocumento = document.getElementById("cbxProceso").value
    let referencia = document.getElementById("referencia_alta_proceso_masivo_firma").value;
    let firmante = document.getElementById("firmante_alta_proceso_masivo_firma").value;
    let tipoDeDocumento = document.getElementById("tipoDeDocumento_alta_proceso_masivo_firma").value;
    let path ="./archivo.txt";

    arrValido.push(NombreDelDocumento);
    arrValido.push(referencia);
    arrValido.push(firmante);
    arrValido.push(tipoDeDocumento);
    arrValido.push(path);

    return arrValido;
}

//Valor Btn de AltaCompleja

//meter un storage


// Btn cancelar 

let BtnCancelarFirmaAlta = document.getElementById("btnCancelarFirma")

BtnCancelarFirmaAlta.addEventListener("click", ()=>{

    //Delete item
    function removeItem(lista) {
        if (lista.target.classList.contains("btnCancelarFirma")) {
          if (confirm("Estas Seguro que deseas borrar los datos cargados?")) {
            let li = lista.target.parentElement;
            let index = Array.prototype.indexOf.call(itemList.children, li);
            removeLocalStorage(index);
            itemList.removeChild(li);
          }
        }
      }
      
      function removeLocalStorage(index){
        let store = JSON.parse(localStorage.getItem("lista_altas_firma")) || [];
        store.splice(index, 1);
        localStorage.setItem('lista_altas_firma', JSON.stringify(store));
      }
      
      
})