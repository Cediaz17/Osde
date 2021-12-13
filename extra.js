/*function crearGrupo()
{
    let grupofamiliar=[];
        const persona = new Persona (sexo, edad);
        grupofamiliar.push(persona);
    return grupofamiliar;
}*/
/*function mostrarResultado(grupoFamiliar,plan)
{   
    //Imprimo el listado de Personas que componen el Grupo Familiar
    let idresultado = document.getElementById ("resultado");
    grupoFamiliar.forEach((persona, index) => {
        let p= document.createElement("p");
        p.innerHTML="Persona nro:" + (index+1) + " Edad: " + persona.edad;
        idresultado.appendChild(p);
    })
    //Imprimo el total del plan.
    let parrafo= document.createElement("p");
    const presupuesto = new Presupuesto (plan, grupoFamiliar);
    parrafo.innerHTML="El valor estimado del plan es:" + presupuesto.valor();
    idresultado.appendChild(parrafo);
}*/
//Ordenamos el grupo familiar por edad
/*function ordenarGrupo ()
{
    var grupoFamiliarOrdenado = [];
    grupoFamiliarOrdenado = grupofamiliar.map(element => element);
    var grupoFamiliarOrdenado = grupofamiliar;
    grupoFamiliarOrdenado.sort(function(a,b){return a.edad - b.edad;});
    console.log('Grupo Familiar Ordenados Por Edad');
    console.log(grupoFamiliarOrdenado);
    ---------------
    
*/mostrarResultado(listagrupoFamiliar,1);




const persona1= new Persona("F",32);
const persona2= new Persona("M",34);
const listagrupoFamiliar=[];
listagrupoFamiliar.push(persona1,persona2);


<div class="col-md-6">
<button id="listado"type="button" class="btn btn-primary">Listar Grupo</button>
</div>

///
                    


let miFormulario = document.getElementById("formulario");

datosPersona = {
    edad: persona.children[0].children[1].value,
    sexo: persona.children[1].children[1].value
}

const presupuesto = new Presupuesto (plan, grupoFamiliar);


let idresultado = document.getElementById ("resultado");
//Imprimo el total del plan.
let parrafo= document.createElement("p");
parrafo.innerHTML= 
idresultado.appendChild(parrafo);


presupuesto.nombreApellidoTitular  + " el valor estimado del plan es: " + presupuesto.valor()


let grupoFamiliarDiv = document.getElementById('grupoFamiliar')
let datosPersonaDiv = document.createElement('div')
datosPersonaDiv.innerHTML = `
<div class="col-6">
<label for="edad">Edad:</label>
<input type="number" name="edad" id="edad">
</div>
<div class="col-6">
<label for="sexo">Sexo:</label>
<input type="text" name="sexo" id="sexo">
</div>`
datosPersonaDiv.classList = ['row datosNewPersona']
grupoFamiliarDiv.appendChild(datosPersonaDiv)



let btnContinuar= document.getElementById("btnContinuar");
btnContinuar.addEventListener("click",ejecutarPrograma)

/*
const arreglo = [
    {
        clave: '123',
        valor: 6465    
    },
    {
        atributo1: '123',
        atributo2: 6465    
    }
]

arreglo.find(a => a.clave === valorDinamico)

const arreglo2 = [
    new NombreClase(123,464),
    new NombreClase(123,464),
    new NombreClase(123,464)
]

arreglo.forEach(elemento => {
    $('#selector').append(`
        DEscripcion: ${elemento.valor}
    `)
})
*/