// Filtro de Tipo de proceso ALTA
// Este al presionar el boton ALTA y al haber seleccionado que tipo de proceso va a usar.
// Mostrara el apartado requerido. []
// Este se crea filtrando el array de datos de altas.
// Luego se establecera un criterio de filtrado

// variable btn ALTA
let btn_AltaPresionado = document.querySelector("#btn_Alta")

// variable del select



let SelectAltas = document.querySelector('#cbxProceso');

cbxProceso.addEventListener('change', () => {

let AltasOptions = ['Pase EE','Firma','Caratulacion EE','Vinculación EE']

let Altas = SelectAltas.value;



let FiltroAltas = Alta => AltasOptions.elemento == Altas ;

let AltasFiltradas = AltasOptions.filter(FiltroAltas);

console.log(AltasFiltradas);


btn_AltaPresionado.addEventListener('click', () => {
        
// variables de los apartados

let ContainerFirma = document.querySelector(".Alta_Expedientes_Firma_Conteiner");
let ContainerCaratulacion = document.querySelector(".Alta_Expedientes_Caratulacion_Conteiner");
let ContainerPase = document.querySelector(".Alta_Expedientes_Pase_Conteiner");
let ContainerVinculacion = document.querySelector(".Alta_Expedientes_Vincular_Conteiner");




        if(Altas === AltasOptions[0]){
                ContainerPase.classList.toggle("ContainerPaseActive");
                console.log("Esto es pase");
               
        }
        else if(Altas === AltasOptions[1]){
                ContainerFirma.classList.toggle("ContainerFirmaActive");
                console.log("Esto Firma");
        }
        else if(Altas === AltasOptions[2]){
                ContainerCaratulacion.classList.toggle("ContainerCaratulacionActive");
                console.log("Esto Caratulacion");
        }
        else if(Altas === AltasOptions[3]){
                ContainerVinculacion.classList.toggle("ContainerVincularActive");
                console.log("Esto vinculacion");
        }else{
                
        }




        });
});


