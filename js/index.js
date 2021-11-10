//DECLARAR VARIABLES INICIALES

let nombreUsuario = "Jhon Florez";
let saldoCuenta = 50000;
let limiteDeExtraccion = 5000;
let claveCorrecta = 1234;

//DECLARAR LA FUNCION IniciarSesion
function iniciarSesion(){
    let claveIngresada = parseInt(prompt("Por favor ingresa tu código del cajero"));
    console.log(claveIngresada);

    //Verificar si la clave ingresada es igual a la clave correcta
    if (claveIngresada === claveCorrecta){
        alert(`Bienvenido/a ${nombreUsuario} a Home Banking`);
        document.body.style.display = "block";
        window.onload = function() {
            //Invocar las funciones que voy a ejecutar una vez se cargue el contenido de la pagina HTML
            cargarNombreEnPantalla();
            cargarSaldoEnPantalla();
            actualizarLimiteEnPantalla();
        }
    }
    else {
        saldoCuenta = 0;
        alert("Codigo incorrecto. Tu dinero ha sido retenido por seguirdad");
    }
}

//Invocar la Funcion
iniciarSesion();

//Funcion que actualiza el valor de las variables en el HTML
function cargarNombreEnPantalla(){
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function cargarSaldoEnPantalla(){
    document.getElementById("saldo-cuenta").innerHTML = `$ ${saldoCuenta}`;
}

function actualizarLimiteEnPantalla(){
    document.getElementById("limite-extraccion").innerHTML +=  limiteDeExtraccion;
}

//Funciones que se invocan al realizar una Accion (Evento) en HTML
function depositarDinero(){
    console.log("Hola ps")
    let dineroADepositar = parseInt(prompt("Ingrese la cantidad de dinero que desea depositar en su cuenta"));
    saldoCuenta += dineroADepositar;
    cargarSaldoEnPantalla();
}

//Eventos y control de estos en este caso al hacer click en un elemento en HTML
let extraerDinero = document.getElementById("extraer-dinero");
extraerDinero.addEventListener(`click`, extraerDineroBancario);

function extraerDineroBancario(){
    let dineroRetirar = parseInt(prompt("Ingrese la cantidad de dinero a retirar"));

    //Condiciones

    //1. No sobrepasar el limite del dinero a retirar
    //2.  La cantidad a retirar no puede ser mayor al saldo en cuenta
    //3. El dinero a retirar debe ser un entero a positivo

    //Resultado

    saldoCuenta -= dineroRetirar;
    cargarSaldoEnPantalla();

}