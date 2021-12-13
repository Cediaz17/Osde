
// Solicitamos al Usuario que ingrese El plan que quiere y cantidad de 
//personas en el Grupo familiar para mostrar un presupuesto estimado.
//Cuenta final con el valor basico del plan por la cantidad de familiares y con el valor iva correspondiente//
//Inicializo el array de presupuestos
localStorage.setItem('presupuestos',JSON.stringify([]))
let VALOR_DOLAR
class Presupuesto {
    // arrays de personas
    constructor(tipoPlan,grupoFamiliar,email,nombreApellidoTitular,trabajoTitular){
        this.tipoPlan=tipoPlan;
        this.grupoFamiliar=grupoFamiliar;
        this.email=email;
        this.nombreApellidoTitular=nombreApellidoTitular;
        this.trabajoTitular=trabajoTitular;
    }
    valor() {   
        var valorPlan = valorBasico (this.tipoPlan);
        //obtenemos la cantidad de personas que componen el grupo familiar//
        valorPlan= valorPlan*(this.grupoFamiliar.length);
        valorPlan= valorTotal(valorPlan);
        return valorPlan;
    }      
}
//constructor de persona//
class Persona {
    constructor(sexo,edad){
        this.sexo=sexo;
        this.edad=edad;
    }
}

// Declaracion de variables
let nombreI;
let planI;

//                     FUNCIONES
//Validador de Formulario 
function validarFormulario ()
{  
        if($("#iNombre").val().length <=2)
            {
                return[true, 1]
            }    
        if($("#plan").val() == "Elegí el plan que se ajusta a vos.")
            {
                return [true, 2]
            }
        if($("#trabajo").val() == "")
        {
            return[true, 3]
        }
        return [false, 0]
}                    
///seccion Informacion al Socio
function desplegarInfo(contenidoDesplegable)
{
    $("#informacionSocios").empty().append(contenidoDesplegable)
}

//Obtenemos el valor basico del plan (podemos ingresar 510 ,410 ,310 o 210)//

function valorBasico  (nombrePlan)
{
    return listadoPlanes.find(a => a.idPlan == nombrePlan).valorPlan

}

function convertirADolares (pesos)
{
    console.log(pesos/VALOR_DOLAR)
    return (pesos/VALOR_DOLAR).toFixed(2)
}
function eliminarPersonas ()
{
    let cant = "persona" + ($("#grupoFamiliar > div ").length -1)
    $(`#${cant}`).remove()
}
//Realiza la cuenta y ,muestra la cotizacion
function mostrarResultados(presupuesto)
{   
    $("#resultado").empty()
                   .css('display','none')
                   .delay(5000)
                   .append(`<div class=" container row">
                                <div class="col-6">
                                ${presupuesto.nombreApellidoTitular} el valor estimado en pesos del plan es: ${presupuesto.valor()}
                                </div>
                                <div class="col-6">
                                ${presupuesto.nombreApellidoTitular} el valor estimado en dolares del plan es: ${convertirADolares(presupuesto.valor())}
                                </div>
                            </div>`)
                   .fadeIn();
}
// Agrega forms para ingresar personas.
const agregarPersonas = () => {
    let cantidadHijos = $("#grupoFamiliar > div ").length
    if (cantidadHijos<= 3)
    {
        $("#grupoFamiliar").append(`
        <div class = "row datosNewPersona formularioDisenioExtra" id="persona${cantidadHijos}">
            <div class="col-6">
            <label for="edad">Edad:</label>
            <input type="number" required="true" step="1" min="1" name="edad" id="edad">
            </div>
            <div class="col-6">
                <label for="sexo">Sexo:</label>
                <input type="text" name="sexo" id="sexo">
            </div>
        </div>`).css('visibility','visible');
    } else{console.log("NO SE PUEDE")} // AGREGAR ventana 
}
function mostrarGrupo ()
{
    //Imprimo el listado de Personas que componen el Grupo Familiar
    let idresultado = document.getElementById ("listadoGrupo");
    listagrupoFamiliar.forEach((persona, index) => {
        let p= document.createElement("p");
        p.innerHTML="Persona nro:" + (index+1) + " Edad: " + persona.edad;
        idresultado.appendChild(p);
    })
}
function mostrarModalCarga()
{
    $("#modalCargando").fadeIn(2000).delay(1000).fadeOut(2000)
}
function mostrarMensajeErrorForm (indexError)
{
    console.log ("ERORRRR")
    $("#mensajeError").append(`
    <div class="modal" tabindex="-1"  id="mensajeDeError">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">Elegí con Libertad</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <p>${listadoMensajeError[indexError]}</p>
                </div>
            </div>
        </div>
    </div>
    `)
    $("#mensajeDeError").fadeIn(2000).delay(1000).fadeOut(2000)
}
function subtitulo ()
{
    let a = $("#inicio_Subtitulo-parrafo")

    console.log(a)
        a.fadeIn(2000)
}
function valorDolar ()
{
    const URL = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'
    $.get(URL, (response, status) => {
        if (status == 'success') {
            VALOR_DOLAR = parseFloat(response[0].casa.venta.replace("," , "."))
        }else{
            //Asigno un valor por defecta en caso de que el servicio no este disponible.
            VALOR_DOLAR = 100
        }
    })

}
function cargarDatosForm ()
{
    mostrarModalCarga();
    let nombreApellidoTitular= $("#iNombre").val();
    let tipoPlan=$("#plan").val();
    let email=$("#iEmail").val();
    let trabajoTitular=$("#trabajo").val();
    let listaPersonas = $(".datosNewPersona");
    let grupoFamiliar=[];
    for(const persona of listaPersonas){
        let sexo=persona.children[0].children[1].value;
        let edad =persona.children[0].children[1].value;
        let datoPersona = new Persona (sexo,edad);
        grupoFamiliar.push(datoPersona);
    }
    const presupuestoIn = new Presupuesto (tipoPlan, grupoFamiliar, email,nombreApellidoTitular, trabajoTitular)
    console.log(presupuestoIn);
    mostrarResultados(presupuestoIn);
    let presupuestoStorage = JSON.parse(localStorage.getItem('presupuestos'))
    presupuestoStorage.push(presupuestoIn)
    localStorage.setItem('presupuestos',JSON.stringify(presupuestoStorage))
}
// Ingresa La Primera etapa de los datos del Plan.
const ejecutarPrograma = (event) => {
    event.preventDefault()
    let resultado = validarFormulario ()
    if(resultado[0])
    {
        mostrarMensajeErrorForm(resultado[1])
    } else{
        cargarDatosForm()
    }
}

$(document).ready( () => {
    //   EVENTOS 
        /// cargar los primeros elementos
    subtitulo();
    valorDolar();
    /// Seccion info al socio
    $("#sucursales").click(() => desplegarInfo(listadoDesplegables[0]))
    $("#numerosUtiles").click(() => desplegarInfo(listadoDesplegables[1]))
    $("#formasPagos").click(() => desplegarInfo(listadoDesplegables[2]))
    $("#planesMostrar").click(() => desplegarInfo(listadoDesplegables[3]))
    
    //seccion calcular cotizacion
    $("#formulario").submit(ejecutarPrograma);
    $("#agregarPersona").click(agregarPersonas);
    $("#eliminarPersona").click(eliminarPersonas);
})

