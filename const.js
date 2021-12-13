const listadoDesplegables = [
    `<div class="col">
        <div class="card card-body infoAlSocio_Card">
            Para reducir la propagación del coronavirus, algunas de nuestras sucursales se mantienen cerradas hasta nuevo aviso.
            <br>
            Si tu centro de atención más próximo todavía está cerrado o si preferís quedarte en tu casa, te invitamos a descubrir todas las gestiones que podés hacer en la app OSDE Móvil y en la página web, sin moverte de tu casa.
        </div>
    </div>`,
    `<div class="col">
            <div class="card card-body infoAlSocio_Card">
                <span class="riesgo">RIESGO DE VIDA</span>
                <h4>
                0810.666.1111
                </h4>
            </div>
            <div class="card card-body infoAlSocio_Card">
                <span class="atencion">ATENCIÓN AL SOCIO</span>
                <a class="tel-contacto-wp" href="https://wa.me/5491148729000" target="_blank" style="color: white;">
                    <h4>11.4872.9000</h4>
                    <h4>0810.555.6733</h4>
                </a>
            </div>
            <div class="card card-body infoAlSocio_Card">
                <span class="asistencia">ASISTENCIA MÉDICA</span>
                <a class="tel-contacto-wp" href="https://wa.me/5491148729100" target="_blank" style="color: white;">      
                    <h3>11.4872.9100</h3>
                </a>
            </div>
    </div>`,
    `<div class="col">
        <div class="card card-body infoAlSocio_Card">
            A fin de que encuentres la forma de pago más adecuada a tus necesidades, describimos a continuación, todas las posibilidades que OSDE te brinda a la hora de abonar tus cuotas.
        </div>
        <div class="card card-body infoAlSocio_Card">
            <div class="row">
                <div class="col-6">
                    <h6>Pago a través de Internet:</h6>
                    <ul>
                    <li>Red Banelco</li>
                    <li>Web OSDE - Empresas</li>
                    <li>Pago Fácil en línea</li>
                    <li>Visa</li>
                    <li>Red Link</li>
                    <li>Web OSDE - Socio</li>
                    <li>App OSDE Movil - Solo para socios</li>
                    </ul>
                </div>
                <div class="col-6">
                        <h6>Pago Presencial</h6>
                        <ul>
                        <li>Cobro Express</li>
                        <li>Bancos</li>
                        <li>Pago Fácil (con o sin talón de Pago)</li>
                        <li>Provincia Net (Ex Bapropagos)</li>
                        <li>Rapi Pago (con o sin talón de Pago)</li>
                        </ul>
                </div>
            </div>
        </div>
    </div>`,
    `<div class="col">
    <div class="card card-body infoAlSocio_Card">
    Elegí tu grupo familiar y cotizá la mejor cobertura médica prepaga.
    <br>
    Te contactaremos a la brevedad para ayudarte en lo que necesites.
    </div>
</div>`
]
const listadoPlanes = [
    {
        idPlan: 510,
        valorPlan: 1000,
        descripcionPlan: "sasas"
    },
    {
        idPlan: 410,
        valorPlan: 7000,
        descripcionPlan: "sasas"
    },
    {
        idPlan: 310,
        valorPlan: 5000,
        descripcionPlan: "sasas"
    },
    {
        idPlan: 210,
        valorPlan: 300,
        descripcionPlan: "sasas"
    },
]

const listadoMensajeError = [
    "", 
    "Debe ser un Nombre valido, por favor volvelo a intentar", 
    "Debe ser un Plan valido, por favor volvelo a intentar",
    "Debe ser un Trabajo valido, por favor volvelo a intentar"
]

const valorIva = (a) => a * 0.21;
const valorTotal = (a) => valorIva(a) + a;