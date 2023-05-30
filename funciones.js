/////////////////////////////////////////////////////////////////////////// ESCUCHA DE BOTONES //////////////////////////////////////////////////////////////////
document.querySelector("#btnIngresar").addEventListener("click", ingreso)
document.querySelector("#olvidada").addEventListener("click", codigo)
document.querySelector("#registrar").addEventListener("click", registro)
document.querySelector("#btnCambioContraseña").addEventListener("click", cambiopasscorrecto)
document.querySelector("#btnRegistrarse").addEventListener("click", validarRegistro)
document.querySelector("#btnVerificarCodigo").addEventListener("click", cambiarpass)
document.querySelector("#flecha").addEventListener("click", cambiarfoto)
document.querySelector("#reenviarcodigo").addEventListener("click", recuperarCodigo)
document.querySelector("#crearSolicitud").addEventListener("click", crearSolicitud)
document.querySelector("#enviarSolicitud").addEventListener("click", enviandoSolicitud)
document.querySelector("#btnComprobarEmpresa").addEventListener("click", ComprobarEmpresa)
document.querySelector("#consultarSolicitud").addEventListener("click", consultandoSolicitud)
document.querySelector("#informacionEstadistica").addEventListener("click", informacionEstad)
document.querySelector("#asignarSolicitud").addEventListener("click", asignandoSolicitud)
document.querySelector("#rollover").addEventListener("click", hacerRollover)
document.querySelector("#manifiesto").addEventListener("click", haciendoManifiesto)
document.querySelector("#habilitarImportadores").addEventListener("click", habilitandoImportadores)
document.querySelector("#listadeCarga").addEventListener("click", haciendoListadeCarga)
document.querySelector("#crearViajeBuque").addEventListener("click", creandoViajeBuque)
document.querySelector("#btnbuscarDescripción").addEventListener("click", buscandoPedidoPorDescripcion)
document.querySelector("#cancelarSolicitud").addEventListener("click", cancelarSolicitud)
document.querySelector("#enviarCancelacion").addEventListener("click", enviandoCancelacion)
document.querySelector("#btnActivar").addEventListener("click", habilitarImportadores)
document.querySelector("#btnMostrarPeligrosa").addEventListener("click", mostrarListasPeligrosas)
document.querySelector("#btnCrearViaje").addEventListener("click", crearBuque)
document.querySelector("#asignarLista").addEventListener("click", asignarViaje)
document.querySelector("#mostrarOpciones").addEventListener("click", mostrandoOpciones)
document.querySelector("#btnConfirmarRollover").addEventListener("click", haciendoRollover)

/////////////////////////////////////////////////////////////////////////// ESCUCHA DE BOTONES DE VOLVER Y CERRAR SESION //////////////////////////////////////////////////////////////////
document.querySelector("#cerrarsesion").addEventListener("click", cerrarsesion)
document.querySelector("#cerrarsesion1").addEventListener("click", cerrarsesion)

document.querySelector("#volver").addEventListener("click", volver)
document.querySelector("#volver2").addEventListener("click", volver)
document.querySelector("#volver3").addEventListener("click", volver)
document.querySelector("#volver4").addEventListener("click", volver2)
document.querySelector("#volver5").addEventListener("click", volver2)
document.querySelector("#volver6").addEventListener("click", volver2)
document.querySelector("#volver7").addEventListener("click", volver2)
document.querySelector("#volver8").addEventListener("click", volver3)
document.querySelector("#volver9").addEventListener("click", volver3)
document.querySelector("#volver10").addEventListener("click", volver3)
document.querySelector("#volver11").addEventListener("click", volver3)
document.querySelector("#volver12").addEventListener("click", volver3)
document.querySelector("#volver13").addEventListener("click", volver3)
/////////////////////////////////////////////////////////////////////////// Inicio, contadores y array de fotos //////////////////////////////////////////////////////////////////
inicio()
//Se invoca a la función creada mas adelante
avatar = ["/avatar/sinfoto.png", "/avatar/0.png", "/avatar/1.png", "/avatar/2.png", "/avatar/3.png", "/avatar/4.png", "/avatar/5.png", "/avatar/6.png", "/avatar/7.png", "/avatar/8.png", "/avatar/9.png", "/avatar/10.png", "/avatar/11.png"]
//Array que almacena las direcciones de las fotos usadas para el registro
let contador = 0
//Contador usado para ir cambiando de fotos y usarlo según la posición del array
let contadorImportadorID = 1
//Contador que almacena la cantidad de importadores creados
let contadorEmpresaID = 1
//Contador que almacena la cantidad de empresas creados
let contadorBuqueID = 1
//Contador que almacena la cantidad de buques creados
///////////////////////////////////////////////////////////////////////////// Arrays contenedores //////////////////////////////////////////////////////////////////
arrayImportadores = new Array()
//Array de importadores
arrayEmpresas = new Array()
//Array de empresas
arrayPedidos = new Array()
//Array de pedidos
arrayBuques = new Array()
//Array de buqeus
//////////////////////////////////////////////////////////////////////////////// FUNCIONES DE INICIO //////////////////////////////////////////////////////////////////
function inicio() {
    ocultarTodo()
    //Invocando función de ocultar todo creada mas adelante
    document.querySelector("#acceso").style.display = "block"
    //Se muestre la primera parte de la pagina, donde se accede
}

function ocultarTodo() {
    document.querySelector("#acceso").style.display = "none"
    document.querySelector("#ingresadoImportador").style.display = "none"
    document.querySelector("#ingresadoEmpresa").style.display = "none"
    document.querySelector("#cambiarcontraseña").style.display = "none"
    document.querySelector("#crearcuenta").style.display = "none"
    document.querySelector("#codigoseguridad").style.display = "none"
    document.querySelector("#creandoViajeBuque").style.display = "none"
    document.querySelector("#consultandoSolicitud").style.display = "none"
    document.querySelector("#cancelandoSolicitud").style.display = "none"
    document.querySelector("#informacionEstad").style.display = "none"
    document.querySelector("#asignandoSolicitud").style.display = "none"
    document.querySelector("#haciendoRollover").style.display = "none"
    document.querySelector("#haciendoManifiesto").style.display = "none"
    document.querySelector("#habilitandoImportadores").style.display = "none"
    document.querySelector("#haciendoListadeCarga").style.display = "none"
    document.querySelector("#creandoViaje").style.display = "none"
    document.querySelector("#selectRollover").style.display = "none"
    //Se ocultan todos los div creados en el HTML
}

function volver() {
    //Función para volver a atras cuando aún no se esta logueado
    ocultarTodo()
    //Se ocultan todos los div
    inicio()
    //Se muestra la primera pagina
}

function volver2() {
    //Función para volver a atras cuando aún se esta logueado como importador
    ocultarTodo()
    //Se oculta todo
    ingresadoImportador()
    //Se muestra el menú de importador
}

function volver3() {
    //Función para volver a atras cuando aún se esta logueado como empresa
    ocultarTodo()
    //Se oculta todo
    ingresadoEmpresa()
    //Se muestra el menú de empresa
}

function cerrarsesion() {
    ocultarTodo()
    //Se oculta todo
    inicio()
    //Se vuelve a la primera pagina
    estadoDesconectadoImportador()
    //Función que se fija en cada importador y si esta conectado con estado en true lo lleva a false
    estadoDesconectadoEmpresas()
    //Función que se fija en cada empresa y si esta conectado con estado en true lo lleva a false
}

//////////////////////////////////////////////////////////////////////////////// FUNCIONES DE INGRESO ////////////////////////////////////////////////////////////////////////////////
function ingreso() {
    let usuario = document.querySelector("#txtUsuario").value
    let contraseña = document.querySelector("#txtContraseña").value
    //Se leen los valores de usuario y contraseña utilizados para loguear
    if (filtrarIngresoImportador(usuario, contraseña)) {
        //Se utiliza una función creada mas abajo que revisa si el usuario o contraseña existe en el array de importadores
        ocultarTodo()
        //Se oculta todo
        alert("Ingreso exitoso como importador")
        //Se informa que ingreso como importador
        estadoConectadoImportador(usuario)
        //Función que cambia el estado del importador a true
        ingresadoImportador()
        //Muestra el menú de importador
    } else if (filtrarIngresoEmpresa(usuario, contraseña)) {
        //Se utiliza una función creada mas abajo que revisa si el usuario o contraseña existe en el array de empresas
        ocultarTodo()
        //Se oculta todo
        alert("Ingreso exitoso como empresa")
        //Se informa que ingreso como empresa
        estadoConectadoEmpresa(usuario)
        //Función que cambia el estado del empresa a true
        ingresadoEmpresa()
        //Muestra el menú de importador
    } else {
        alert("Datos incorrectos.")
        //Si no concuerda con ninguna de las dos funciones se informa que los datos son incorrectos
    }
}

function ingresadoImportador() {
    //Función para mostrar el menú de importador
    document.querySelector("#ingresadoImportador").style.display = "block"
    //Se muestra el menú de importador
}

function ingresadoEmpresa() {
    //Función para mostrar el menú de importador
    document.querySelector("#ingresadoEmpresa").style.display = "block"
    //Se muestra el menú de empresa
}


function filtrarIngresoImportador(usuario, contraseña) {
    //Función para saber si el usuario concuerda para conectarse como importador
    for (let elemento of arrayImportadores) {
        //Se recorre el array de importadores
        if (elemento.usuario == usuario && elemento.contraseña == contraseña) {
            //Si los datos ingresados concuerdan con los de algun importador
            return true
            //Retorna true
        }
    }
}

function filtrarIngresoEmpresa(usuario, contraseña) {
    //Función para saber si el usuario concuerda para conectarse como empresa
    for (let elemento of arrayEmpresas) {
        //Se recorre el array de empresas
        if (elemento.usuario == usuario && elemento.contraseña == contraseña) {
            //Si los datos ingresados concuerdan con los de algun importador
            return true
            //Retorna true
        }
    }
}

function estadoConectadoImportador(usuario) {
    //Función para transformar un importador a conectado
    for (let elemento of arrayImportadores) {
        //Se recorre el array de importadores
        if (elemento.usuario == usuario) {
            //Se fija si el usuario ingresado concuerda con el del array
            elemento.estado = true
            //Se cambia el estado a true para decir que esta conectado
        }
    }
}

function estadoConectadoEmpresa(usuario) {
    //Función para transformar un empresa a conectado
    for (let elemento of arrayEmpresas) {
        //Se recorre el array de empresas
        if (elemento.usuario == usuario) {
            //Se fija si el usuario ingresado concuerda con el del array
            elemento.estado = true
            //Se cambia el estado a true para decir que esta conectado
        }
    }
}

function estadoDesconectadoImportador() {
    //Funcion para convertir el importador a desconectado
    for (let elemento of arrayImportadores) {
        //Se recorre el array de importadores
        elemento.estado = false
        //Se transforman los estdos a false puesto que una sola cuenta puede estar logueada a la vez y se desactivan todas al desloguearse
    }
}

function estadoDesconectadoEmpresas() {
    //Funcion para convertir el empresa a desconectado
    for (let elemento of arrayEmpresas) {
        //Se recorre el array de empresas
        elemento.estado = false
        //Se transforman los estdos a false puesto que una sola cuenta puede estar logueada a la vez y se desactivan todas al desloguearse
    }
}
//////////////////////////////////////////////////////////////////////////////// FIN DE INGRESO ////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////// FUNCIONES CODIGO DE SEGURIDAD //////////////////////////////////////////////////////////////////
function codigo() {
    //Función para el código de seguridad
    ocultarTodo()
    //Se oculta todo
    document.querySelector("#codigoseguridad").style.display = "block"
    //Se muestra el div del código
}

function recuperarCodigo() {
    let correocodigo = document.querySelector("#txtCorreoCodigo").value
    //Se lee el valor
    if (correocodigo.length == 0) {
        //Si la longitud es 0 significa que no se escribio nada  y por eso se notificará al usuario
        alert("Introduzca un correo electrónico para buscar el código")
    } else if (filtrarCorreoCode(correocodigo)) {
        //Sino con una función busca el código a partir del correo dado
        alert(`Fue enviado el código a su correo electrónico.\n(El código es ${filtrarCorreoCode(correocodigo)})  `)
        //Se mostrará el código al usuario
    } else {
        alert("No existe cuenta con ese correo")
        //Si el correo no concuerda significa que no hay cuenta
    }
}

let usuarioCambiandoContraseña = []
//Variable para almacenar un usuario

function filtrarCorreoPass(email, contraseña) {
    //Función para conseguir el código a partir de un email y el código
    for (let elemento of arrayImportadores) {
        //Se recorre el array de importadores
        if ((elemento.correo == email) && (elemento.codeSeg == contraseña)) {
            //Se verifica si el correo concuerda con el correo del importador e igualmente con los códigos de seguridad
            usuarioCambiandoContraseña = elemento
            //Se almacena el usuario
            return true
            //Se retorna true
        }
    }
}

function filtrarCorreoCode(email) {
    //Funcion para buscar el código a partir del email
    for (let elemento of arrayImportadores) {
        //Se recorren los importadores
        if (elemento.correo == email) {
            //Si el correo del importador concuerda con el email ingresado
            return elemento.codeSeg
            //Se retorna el código
        }
    }
}
//////////////////////////////////////////////////////////////////////////////// FIN CODIGO DE SEGURIDAD //////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////// FUNCIONES CONTRASEÑA //////////////////////////////////////////////////////////////////
function validarcontraseña(contraseña) {
    let minuscula = false;
    let mayuscula = false;
    let numero = false;
    let longitud = false;
    //Se crean variables en falso de acuerdo a la cantidad de condiciones que pide la contraseña

    if (contraseña.length >= 5) {
        longitud = true;
        //Si la longitud de la contraseña es igual o mayor a 5 se convierte la variable en true
    }
    if (contraseña.match(/[a-z]/)) {
        //Se usa la función match para buscar
        minuscula = true;
        //Si la contraseña tiene letras minúsculas convierte la variable en true
    }
    if (contraseña.match(/[A-Z]/)) {
        //Se usa la función match para buscar
        mayuscula = true;
        //Si la contraseña tiene letras mayúsculas convierte la variable en true
    }
    if (contraseña.match(/[0-9]/)) {
        //Se usa la función match para buscar
        numero = true;
        //Si la contraseña tiene numeros convierte la variable en true
    }

    if (longitud && minuscula && mayuscula && numero) {
        return true;
        //Si todas las variables son true la contraseña es apta
    } else {
        return false;
        //Si todas las variables son false la contraseña no es apta
    }
}

function cambiarpass() {
    //Función para cambiar la contraseña
    ocultarTodo()
    //Se oculta todo
    let correocodigo = document.querySelector("#txtCorreoCodigo").value
    //Se toma el valor del correo
    let codigo = document.querySelector("#txtCodigo").value
    //Se toma el valor del código
    if (filtrarCorreoPass(correocodigo, codigo)) {
        //Si cumple con la función que verifica el código
        document.querySelector("#cambiarcontraseña").style.display = "block"
        //Se desbloquea el div para cambiar la contraseña
        alert("Código ingresado correctamente")
        //Se notifica que el codigo es correcto
    } else {
        alert("Código ingresado incorrecto")
        //Sino se notifica que no
        ocultarTodo()
        //Se oculta todo
        inicio()
        //Se vuelve al inicio
    }
}

function cambiopasscorrecto() {
    //Función para poder cambiar la contraseña
    ocultarTodo()
    //Se oculta todo
    let nuevapass = document.querySelector("#txtContraseñaNueva").value
    let nuevapassconfirmar = document.querySelector("#txtContraseñaNuevaConfirmar").value
    //Se toman los valores de la nueva contraseña
    if (nuevapass == nuevapassconfirmar) {
        //Si son iguales
        if (validarcontraseña(nuevapass)) {
            //Se verifica si cumple con la valdiacion
            usuarioCambiandoContraseña.contraseña = nuevapass
            //Se cambia la contraseña del importador en cuestión
            alert("Contraseña cambiada con éxito")
            //Se notifica que fue con éxito
        } else {
            alert("La contraseña no cumple con los requisitos")
            //Sino se notifica que no
        }
    } else {
        alert("Las contraseñas no son iguales.")
        //Se notifica que las contraseñas no son iguales
    }
    document.querySelector("#acceso").style.display = "block"
    //Se muestra el menú de acceso
}
//////////////////////////////////////////////////////////////////////////////// FIN DE CONTRASEÑA //////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////// FUNCIONES DE REGISTRO //////////////////////////////////////////////////////////////////
function sinfoto() {
    //Función para mostrar una foto por defecto
    document.querySelector("#sinfoto").src = avatar[0]
    //Se cambia ese valor al array 0 de las fotos que es el default
}

function registro() {
    //Función para activar el div del registro
    sinfoto()
    //Se establece la foto por default
    ocultarTodo()
    //Se oculta todo
    document.querySelector("#crearcuenta").style.display = "block"
    //Se muestra el div de registro
}

function validarRegistro() {
    let nombre = document.querySelector("#txtNombre").value
    let apellido = document.querySelector("#txtApellido").value
    let newusuario = document.querySelector("#txtUsuarioNew").value
    for (x in newusuario) {
        //Se recorre el usuario
        newusuario = newusuario.replace(" ", "")
        //Se reemplazan los espacios por vacios
    }
    let newcontraseña = document.querySelector("#txtContraseñaNew").value
    let prefijocorreo = document.querySelector("#txtCorreo").value
    let sufijocorreo = document.querySelector("#slcCorreo").value
    //Se toma los valores de todos los datos
    let correo = crearCorreo(prefijocorreo, sufijocorreo)
    //Se toman los prefijos y sufijos del correo para con una función crear uno
    let nombreCompleto = arreglarNombre(nombre, apellido)
    //Se convierten los nombres a la primera letra en mayúcula
    if (nombre.length == 0 || apellido.length == 0 || newusuario.length == 0) {
        alert("Rellene los campos")
        //Si los espacios son vacios se menciona que se rellenen
    } else {
        //Si estan rellenos
        if (validarcontraseña(newcontraseña) == false) {
            //Se comprueba si la contraseña es valida, si no es así
            alert("La contraseña no cumple con los requisitos.")
            //Se le comenta al usuario
        } else {
            //Sino crea un nuevo importador con los datos
            let nuevoImportador = new Importador(nombreCompleto, newusuario, newcontraseña, ruta, correo)
            //Se pushea el importador al array de importadores
            arrayImportadores.push(nuevoImportador)
            alert(`Usuario generado correctamente.`)
            //Se notifica que se creo el usuario
            document.querySelector("#crearcuenta").style.display = "none"
            document.querySelector("#acceso").style.display = "block"
            //Se bloquea el div y se devuelve a acceso
            return true
            //Se retorna true
        }
    }

}
let ruta = avatar[0]
//Se inicializa la ruta en la foto default

function cambiarfoto() {
    //Función para cambiar la foto
    if (contador >= 0 && contador <= 11) {
        //Si el contador esta entre 0 y 11 que son la cantidad de fotos
        contador++
        //Va aumentando
    } else if (contador == 12) {
        //Cuando sobrepase las 11
        contador = 0
        //Se vuelve a 0 para seguir mostrando las fotos
    }
    ruta = avatar[contador]
    //Se establece la ruta en el avatar según la foto en la que quedo
    document.querySelector("#sinfoto").src = ruta
    //Se muestra la foto según esa ruta
}

function crearCorreo(prefijo, sufijo) {
    //Función que corrige y crea un correo en base de un prefijo y sufijo dado
    for (let i in prefijo) {
        //Se recorre el prefijo
        prefijo = prefijo.replace(" ", "")
        //Si se encuentra un espacio se sustituye por vacio
        if (prefijo[i] == "@") {
            //Si encuentra un arroba detecta que el correo va desde el inicio hasta ahi
            let indice = prefijo.indexOf("@")
            //Se toma el indice del arroba
            prefijo = prefijo.slice(0, indice)
            //Se separa esa parte
        } else {
            //Sino hay arroba
            prefijo = prefijo
            //El prefijo queda igual
        }
    }
    let correo = prefijo + sufijo
    //Se crea el correo uniendo ambos datos
    return correo
    //Se retorna el corroe
}

function arreglarNombre(nombre, apellido) {
    //Función para arreglar los nombres
    nombre = nombre.trim()
    //Se le hace un trim al nombre
    for (x in nombre) {
        //Se recorre el nombre
        nombre = nombre.replace(" ", "")
        //Se reemplazan los espacios por vacios
    }
    apellido = apellido.trim()
    //Se le hace un trim al apellido
    for (i in apellido) {
        //Se recorre el apellido
        nombre = nombre.replace(" ", "")
        //Se reemplazan los espacios por vacios
    }
    nombre = nombre.toLowerCase()
    //Se convierte el nombre a minúsculas
    apellido = apellido.toLowerCase()
    //Se convierte el apellido a minúsculas
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    //Se le aplica al nombre las funciones para que a la primera letra se le haga mayúscula y se le sume el resto del texto
    apellido = apellido.charAt(0).toUpperCase() + apellido.slice(1);
    //Se le aplica al apellido las funciones para que a la primera letra se le haga mayúscula y se le sume el resto del texto
    let nombrecompleto = nombre + " " + apellido
    //Se suma el nombre, un espacio y el apellido
    return nombrecompleto
    //Se retorna el nombre
}

function generarCodigo() {
    //Se genera el código de seguridad
    let caracteres = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //Se crea una variable con los caracteres disponibles
    let codigo = "";
    //Una variable para almacenar el código
    for (let i = 0; i < 5; i++)
        //Se crea un for que se repetira 5 veces
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    //Cada vez al código sumara un caracter que es un número de un indice random redondeado del largo de la palabra caracteres
    return codigo;
    //Se retorna el código
}
//////////////////////////////////////////////////////////////////////////////// FIN DE REGISTRO //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////// ENVIO DE SOLICITUDES //////////////////////////////////////////////////////////////////
function crearSolicitud() {
    //Función para mostrar el div de la creación de solicitudes
    ocultarTodo()
    //Se oculta todo
    document.querySelector("#creandoViaje").style.display = "block"
    //Se muestra el div
}

function enviandoSolicitud() {
    //Función para ya enviar la solicitud
    let tipoCarga = document.querySelector("#slcTipoCarga").value
    let descripcion = document.querySelector("#txtDescripcion").value
    let puertoOrigen = document.querySelector("#txtPuerto").value
    let idEmpresa = parseInt(document.querySelector("#idEmpresa").value)
    let CantidadContenedores = parseInt(document.querySelector("#txtCantidadContenedores").value)
    let fechaPartida = document.querySelector("#txtFechaPartida").value
    //Se toman los valores
    for (let importador of arrayImportadores) {
        //Se recorre el array importadores
        if (importador.estado == true) {
            //Si el estado es true, es decir, esta conectado
            if (importador.activo == true) {
                //Si el usuario es activo
                if (verificarIDEmpresa(idEmpresa) && descripcion.length > 0 && puertoOrigen.length > 0 && CantidadContenedores > 0 && fechaPartida.length > 0 && modificarFecha(fechaPartida) >= FechaHoy()) {
                    //Si se cumple con una función que verifica el id de la empresa, que la descripcion, puerto de origen, fecha de partida y contenedores sea mayor a 0 y que ademas, la fecha sea superior o igual a la de hoy
                    let nuevoPedido = new Pedidos(tipoCarga, descripcion, puertoOrigen, idEmpresa, CantidadContenedores, modificarFecha(fechaPartida), obtenerIDImportador())
                    //Se crea una clase para el pedido con esos datos y el id del importador
                    importador.solicitudes = importador.solicitudes + 1
                    //Se aumenta el contador de solicitudes para ese importador
                    arrayPedidos.push(nuevoPedido)
                    //Se pushea el pedido
                    alert(`Pedido enviado correctamente a "${nombreEmpresaPorID(idEmpresa)}"`)
                    //Se notifica a quien fue el pedido
                    ocultarTodo()
                    //Se oculta todo
                    ingresadoImportador()
                    //Se vuelve al menu de importador
                } else {
                    alert("Alguno de los datos introducidos es incorrecto")
                    //Si no concuerda con el if se notifica que algun dato es incorrecto
                }
            } else {
                alert("Cuenta bloqueada, no puede solicitar una nueva carga")
                //Si la cuenta no es activa se notifica que está bloqueado
            }
        }
    }
}

function ComprobarEmpresa() {
    //Función para comprobar la empresa
    let idEmpresa = document.querySelector("#idEmpresa").value
    //Se toma el id
    if (verificarIDEmpresa(idEmpresa)) {
        //Se verifica con una función la id
        alert(`Su pedido será enviado a "${nombreEmpresaPorID(idEmpresa)}"`)
        //Se informa a onde será enviado por una funcion que devuelve el nombre de las empresas según su id
    } else {
        alert("Introduzca un id correcto.")
        //Sino concuerda se menciona que se introduzca un id correcto
    }
}

function verificarIDEmpresa(id) {
    //Función para verificar los id
    for (let elemento of arrayEmpresas) {
        //Se recorre el array de empresa
        if (elemento.id == id) {
            //Si es igual al id entregado
            return true
            //Se retorna true
        }
    }
}

function nombreEmpresaPorID(IDEmpresa) {
    //Función para obtener el nombre de una empresa según su id
    for (let elemento of arrayEmpresas) {
        //Se recorre el array de empresas
        if (elemento.id == IDEmpresa) {
            //Si el id es igual al dado
            return elemento.nombre
            //Retorna el nombre de esa id
        }
    }
}
////////////////////////////////////////////////////////////// FIN DE ENVIO DE SOLICITUDES //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////// CONSULTA DE SOLICITUDES //////////////////////////////////////////////////////////////////
function consultandoSolicitud() {
    //Función para la consulta de solicitudes
    ocultarTodo()
    //Se oculta todo
    document.querySelector("#consultandoSolicitud").style.display = "block"
    //Se muestra el div de la consulta
    let tabla = document.querySelector('#tablaSolicitud')
    //Se lee la tabla
    tabla.innerHTML =
        //Se modifica cada vez que se llame la función
        `
                        <tr>
                            <td><strong>Estado</strong></td>
                            <td><strong>Tipo</strong></td>
                            <td><strong>Descripción</strong></td>
                            <td><strong>Puerto de Origen</strong></td>
                            <td><strong>ID de la empresa</strong></td>
                            <td><strong>Nombre de la empresa</strong></td>
                            <td><strong>ID del importador</strong></td>
                            <td><strong>Nombre del importador</strong></td>
                            <td><strong>ID del viaje</strong></td>
                            <td><strong>Cantidad de contenedores</strong></td>
                            <td><strong>Fecha de partida</strong></td>
                            <td><strong>Fecha de llegada</strong></td>
                        </tr>
    `
    //Esto se hace para limpiar la lista
    consultarSolicitud()
    //Se invoca a una función que se encarga de la función
}

function consultarSolicitud() {
    //La función mencionada para consultar la función
    let tabla = document.querySelector('#tablaSolicitud')
    //Se lee de nuevo la tabla
    tabla.innerHTML =
        //Se modifican los valores para que no se repitan valores
        `
                        <tr>
                            <td><strong>Estado</strong></td>
                            <td><strong>Tipo</strong></td>
                            <td><strong>Descripción</strong></td>
                            <td><strong>Puerto de Origen</strong></td>
                            <td><strong>ID de la empresa</strong></td>
                            <td><strong>Nombre de la empresa</strong></td>
                            <td><strong>ID del importador</strong></td>
                            <td><strong>Nombre del importador</strong></td>
                            <td><strong>ID del viaje</strong></td>
                            <td><strong>Cantidad de contenedores</strong></td>
                            <td><strong>Nombre del buque</strong></td>
                            <td><strong>Fecha de partida</strong></td>
                            <td><strong>Fecha de llegada</strong></td>
                        </tr>
    `
    let IDImp = []
    //Variable para almacenar el id del importador
    for (let elemento of arrayImportadores) {
        //Se recorre el array de importadores
        if (elemento.estado == true) {
            //Si el estado es true quiere decir que ese importador esta logueado
            IDImp = elemento.id
            //Se captura la id
        }
    }

    for (let pedido of arrayPedidos) {
        //Se recorre el array de pedidos
        if (IDImp == pedido.IDimportador) {
            //Si el id del importador logueado es igual al id de los pedidos
            tabla.innerHTML +=
                //Se modifica la tabla
                `
                    <tr>
                        <td>${pedido.estado}</td>
                        <td>${pedido.tipo}</td>
                        <td>${pedido.descripcion}</td>
                        <td>${pedido.puertoO}</td>
                        <td>${pedido.IDempresa}</td>
                        <td>${nombreEmpresaPorID(pedido.IDempresa)}</td>
                        <td>${pedido.IDimportador}</td>
                        <td>${nombreImportadorPorID(pedido.IDimportador)}</td>
                        <td>${pedido.IDViaje}</td>
                        <td>${pedido.cantContendores}</td>
                        <td>${pedido.nombreBuque}</td>
                        <td>${pedido.fechaPartida}</td>
                        <td>${pedido.fechaLlegada}</td>
                    </tr>
        `
            //Se agregan los elementos para poder visualizarla
            //Se utilizaron dos funciones para poder conseguir mediante la id el nombre de la empresa e importador
        }
    }
}

function buscandoPedidoPorDescripcion() {
    //Función para mostrar los pedidos según su descripción
    let busqueda = document.querySelector("#txtBusqueda").value
    //Se lee el valor ingresado
    consultarSolicitudPorDesc(busqueda)
    //Se invoca a la función explicada adelante
}

function consultarSolicitudPorDesc(busqueda) {
    //Función para consultar las solicitudes por su descripción
    let tabla = document.querySelector('#tablaSolicitud')
    //Se lee la tabla
    tabla.innerHTML =
        //Se cambian los valores a unos por default
        `
                        <tr>
                            <td><strong>Estado</strong></td>
                            <td><strong>Tipo</strong></td>
                            <td><strong>Descripción</strong></td>
                            <td><strong>Puerto de Origen</strong></td>
                            <td><strong>ID de la empresa</strong></td>
                            <td><strong>Nombre de la empresa</strong></td>
                            <td><strong>ID del importador</strong></td>
                            <td><strong>Nombre del importador</strong></td>
                            <td><strong>ID del viaje</strong></td>
                            <td><strong>Cantidad de contenedores</strong></td>
                            <td><strong>Nombre del buque</strong></td>
                            <td><strong>Fecha de partida</strong></td>
                            <td><strong>Fecha de llegada</strong></td>
                        </tr>
    `
    let IDImp = []
    //Variable para almacenar el id del importador
    for (let elemento of arrayImportadores) {
        //Se recorre el array de importadores
        if (elemento.estado == true) {
            //Si el estado es true, es decir, que el usuario esta logueado se toma su id
            IDImp = elemento.id
            //Se almacena el id
        }
    }

    for (let pedido of arrayPedidos) {
        //Se recorre el array de pedidos
        if ((IDImp == pedido.IDimportador) && (pedido.descripcion.toLowerCase().includes(busqueda.toLowerCase()))) {
            //Si el id almacenado es igual al del importador almacenado en el pedido y la descripción incluye la busqueda dada por el usuario (se convierte en minúscula para mayor facilidad) se da comienzo a esta condición
            tabla.innerHTML +=
                //Se modifica la tabla
                `
                    <tr>
                        <td>${pedido.estado}</td>
                        <td>${pedido.tipo}</td>
                        <td>${pedido.descripcion}</td>
                        <td>${pedido.puertoO}</td>
                        <td>${pedido.IDempresa}</td>
                        <td>${nombreEmpresaPorID(pedido.IDempresa)}</td>
                        <td>${pedido.IDimportador}</td>
                        <td>${nombreImportadorPorID(pedido.IDimportador)}</td>
                        <td>${pedido.IDViaje}</td>
                        <td>${pedido.cantContendores}</td>
                        <td>${pedido.nombreBuque}</td>
                        <td>${pedido.fechaPartida}</td>
                        <td>${pedido.fechaLlegada}</td>
                    </tr>
        `
            //Se agregan los elementos para poder visualizarla
            //Se utilizaron dos funciones para poder conseguir mediante la id el nombre de la empresa e importador
        }
    }
}
////////////////////////////////////////////////////////////// FIN DE CONSULTA DE SOLICITUDES //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////// CANCELAR SOLICITUDES //////////////////////////////////////////////////////////////////
function cancelarSolicitud() {
    //Función para mostrar el div de cancelar la solicitud
    ocultarTodo()
    //Se oculta todo
    document.querySelector("#cancelandoSolicitud").style.display = "block"
    //Se muestra el div
}

function enviandoCancelacion() {
    //Función para cancelar la solicitud
    ocultarTodo()
    //Se oculta todo
    document.querySelector("#cancelandoSolicitud").style.display = "block"
    //Se muestra el div
    let IDSolicitud = document.querySelector("#txtIdCancelacion").value
    //Se toma el valor de la id entregado por el usuario
    eliminarPedido(IDSolicitud)
    //Se invoca una función para eliminar el pedido con esa ID
    if (IDSolicitud.length == 0) {
        //Si la longitud es 0, es decir que no se ingreso nada
        alert("Ingrese un ID")
        //Se le comenta que ingrese un id
    }
    ocultarTodo()
    //Se oculta todo
    ingresadoImportador()
    //Se vuelve al menú de importador
}

function eliminarPedido(IDSolicitud) {
    //Función para eliminar el pedido
    for (let elemento of arrayPedidos) {
        //Se recorre el array de pedidos
        if (((elemento.IDimportador == obtenerIDImportador()) && (IDSolicitud == elemento.IDViaje)) && (elemento.activo == false)) {
            //Si el id del importador en el pedido es igual a una función que devuelve el id del importador logueado, además, si la id dada es igual a la solicitud del pedido y no está activada
            let index = arrayPedidos.indexOf(elemento)
            //Se toma el indice de ese pedido en el array
            arrayPedidos.splice(index, 1);
            //Se elimina y no aumenta el contador de cancelaciones porque no era un pedido activo
            alert("Solicitud borrada con éxito")
            //Se notifica al usuario
        } else if (((elemento.IDimportador == obtenerIDImportador()) && (IDSolicitud == elemento.IDViaje)) && (elemento.activo == true)) {
            //Si el id del importador en el pedido es igual a una función que devuelve el id del importador logueado, además, si la id dada es igual a la solicitud del pedido y está activada
            for (let elemento2 of arrayImportadores) {
                //Se recorre el array de importadores
                if (elemento2.estado == true) {
                    //Si el importador esta conectado
                    if (elemento2.bloqueo <= 2) {
                        //Si tiene 2 o menos bloqueos (porque se inicializa en 0 y si se soloca 3 irá hasta 4)
                        elemento2.bloqueo = elemento2.bloqueo + 1
                        //El bloqueo aumentará en una unidad
                        elemento2.cancelaciones = elemento2.bloqueo
                        //Las cancelaciones tienen el mismo valor del bloqueo pero estos son usuados para luego calcular el porcentaje de cancelación
                        elemento.activo = false
                        //El estado del pedido pasa a falso, es decir cancelado
                        elemento.estado = "CANCELADO"
                        //Se cambia su estado a eso
                        elemento.fechaLlegada = "Sin asignar"
                        //La fecha de llegada vuelva a sin Asignar al no tener un buque definido
                        elemento.nombreBuque = "Sin asignar"
                        //El nombre del buque dentro del pedido vuelve a sin asignar al no tener un buque definido
                        for (let buque of arrayBuques) {
                            //Se recorre el array buques
                            if (elemento.nombreBuque == buque.nombre) {
                                //Si el nombre del buque en el pedido es igual al de algún buque (El que le corresponde)
                                aumentarContenedores(buque.nombre, elemento.cantContendores)
                                //Se utiliza una función para volver a aumentar sus contenedores
                            }
                        }
                        alert("Solicitud cancelada con éxito")
                        //Se notifica que se cancelo con éxito
                    } else {
                        //Sino, si se sobrepasan las 3 cancelaciones
                        elemento2.activo = false
                        //Se cambia el activo del importador a false
                        alert("Su cuenta ha sido desactivada por sobrepasar el límite de 3 cancelaciones")
                        //Se notifica que su cuenta esta desactivada
                    }
                }
            }
        }
    }
}
////////////////////////////////////////////////////////////// FIN DE CANCELAR SOLICITUDES //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////// INFORMACIÓN ESTADÍSTICA //////////////////////////////////////////////////////////////////
function informacionEstad() {
    //Función usada para cargar las estadísticas y el div de esta
    ocultarTodo()
    //Se oculta todo
    document.querySelector("#informacionEstad").style.display = "block"
    //Se muestra el div
    estadisticas()
    //Se carga la función de estadísticas parte 1
    estadisticasEmpresas()
    //Se carga la función de estadísticas parte 2
}

function estadisticas() {
    //Función para mostrar las estádisticas
    let porcentajeCancelaciones = document.querySelector("#estadistica1")
    let proximasLlegadas = document.querySelector("#estadistica2")
    //Se leen los dos valores de las tablas
    proximasLlegadas.innerHTML =
        `
    <td><strong>Próximas llegadas</strong></td>
    <td><strong>Viaje</strong></td
    `
    //Se establecen los valores por defecto
    let IDImp = []
    //Variable para alamcenar el id del importador
    for (let elemento of arrayImportadores) {
        //Recorro el array de importadores
        if (elemento.estado == true) {
            //Si el estado es true, es decir esta conectado
            IDImp = elemento.id
            //Se almacena su id en la variable
            for (let pedido of arrayPedidos) {
                //Recorro el array de pedidos
                if (IDImp == pedido.IDimportador) {
                    //Si el id importador del pedido es igual al almacenado
                    porcentajeCancelaciones.innerHTML =
                        `    
                            <td><strong>Porcentaje de cancelaciones</strong></td>
                            <td><strong>Cancelaciones</strong></td>
                            <td><strong>Total de solicitudes</strong></td>
                            <tr>
                                <td>${((elemento.cancelaciones/elemento.solicitudes)*100)}%</td>
                                <td>${elemento.cancelaciones}</td>
                                <td>${elemento.solicitudes}</td>
                            </tr>
                `
                    //Modifico la tabla de cancelaciones con los datos y calculo el porcentaje dividiendo las cancelaciones por el total y multiplicado 100
                    proximasLlegadas.innerHTML +=
                        `
                            <tr>
                                <td>${pedido.fechaLlegada}</td>
                                <td>${pedido.IDViaje}</td>
                            </tr>
                `
                    //Completamos la tabla de la fecha de llegada
                }
            }
        }
    }
}

function estadisticasEmpresas() {
    //Función similar a la anterior pero para la parte de empresas
    let porcentajeEmpresas = document.querySelector("#estadistica3")
    //Tomo el valor de la tabla
    porcentajeEmpresas.innerHTML =
        `
            <td><strong>Porcentaje de participación de empresas</strong></td>
            <td><strong>Solicitudes dirigidas</strong></td>
            <td><strong>Total</strong></td>
            <td><strong>Empresa</strong></td>
        `
    //La llevamos a un valor default
    let importador = []
    //Variable para almacenar el importador
    for (let elemento of arrayImportadores) {
        //Recorremos el array de importadores
        if (elemento.estado == true) {
            //Si el estado es true es decir, que esta conectado
            importador = elemento
            //Almacenamos ese importador en el elemento
        }
    }
    solicitudesTotales = importador.solicitudes
    //La cantidad de solicitudes totales es la parte de la clase importador llamada solicitudes
    for (let empresa of arrayEmpresas) {
        //Se recorre el array empresas
        let nPedidos = 0
        //Se inicializa el número de pedidos en 0
        for (let pedido of arrayPedidos) {
            //Se recorre el array pedidos
            if (importador.id == pedido.IDimportador &&
                pedido.IDempresa == empresa.id &&
                pedido.activo == true) {
                //Si el id del improtador es igual al importador del pedido, igual con las empresas y el pedido es activo
                nPedidos++
                //Se aumenta el número de pedidos
            }
        }
        if (nPedidos !== 0) {
            //Si el número es distinto a 0
            porcentajeEmpresas.innerHTML +=
                `
                    <td>${(nPedidos/solicitudesTotales)*100}%</td>
                    <td>${nPedidos}</td>
                    <td>${solicitudesTotales}</td>
                    <td>${empresa.id}</td>
                `
            //Se modifica la tabla del porcentajeEmpresas con los datos y el mismo metodo para calcular el porcentaje
        }
    }
}
////////////////////////////////////////////////////////////// FIN INFORMACIÓN ESTADÍSTICA //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////// CREANDO BUQUE //////////////////////////////////////////////////////////////////
function creandoViajeBuque() {
    //Se crea una función que mostrará el div de la creación de buques
    ocultarTodo()
    //Se oculta todo
    document.querySelector("#creandoViajeBuque").style.display = "block"
    //Se muestra el div
}

function crearBuque() {
    //Función para crear el buque
    let nombre = document.querySelector("#txtNombreBuque").value
    let cantidadContenedoresMaxima = parseInt(document.querySelector("#txtCantidadContenedoresMaxima").value)
    let fechaLlegada = document.querySelector("#txtFechaLlegada").value
    //Se toman los valores entregados
    for (let elemento of arrayEmpresas) {
        //Se recorre el array de empresas
        if (elemento.estado == true) {
            //Si esta conectado, es decir, que su estado es true
            id = elemento.id
            //Se almacena ese id
        }
    }
    if (nombre.length != "" && cantidadContenedoresMaxima > 0 && fechaLlegada != "" && modificarFecha(fechaLlegada) >= FechaHoy()) {
        //Si los valores son distintos a vacio, mayor a 0 o fechas superiores o iguales a la de hoy
        let nuevoBuque = new Buques(id, nombre, cantidadContenedoresMaxima, modificarFecha(fechaLlegada))
        //Se almacenan esos datos en un nuevo buque
        arrayBuques.push(nuevoBuque)
        //Se pushea en el array de buques
        alert("Buque creado")
        //Se notifica al usuario
        ocultarTodo()
        //Se oculta todo
        ingresadoEmpresa()
        //Se vuelve al ingreso de empresas
    } else {
        alert("Alguno de los datos introducidos es incorrecto")
        //Si no se cumple con lo pedido se notifica que algún dato esta mal
    }
}
////////////////////////////////////////////////////////////// FIN DE CREANDO BUQUE //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////// ASIGNANDO SOLICITUD //////////////////////////////////////////////////////////////////
function asignandoSolicitud() {
    //Función para mostrar la asignación de solicitudes
    ocultarTodo()
    //Se oculta todo
    document.querySelector("#asignandoSolicitud").style.display = "block"
    //Se muestra el div
    agregarSlcAsignar()
    //Se usa la función que agrega los elementos al slc

    function agregarSlcAsignar() {
        //Función para agregar los elementos al slc
        let viajes = document.querySelector("#slcListas")
        let buques = document.querySelector("#slcBuques")
        //Se leen los valores de los dos slc
        viajes.innerHTML =
            `
    <option>Elija un viaje</option>
    `
        buques.innerHTML =
            `
        <option>Elija un buque</option>
    `
        //Se modifcan los slc para tener un valor por default
        for (let elemento of arrayEmpresas) {
            //Se recorre el array empresas
            if (elemento.estado == true) {
                //Si es true significa que esta conectado
                IDEmp = elemento.id
                //Se almacena le id de la empresa conectada
            }
        }
        for (let pedido of arrayPedidos) {
            //Se recorre el array pedidos
            if (IDEmp == pedido.IDempresa) {
                //Si el id de la empresa es igual al id empresa dentro del pedido
                if (pedido.activo == false) {
                    //Se necesita que el pedido sea falso para no volver a asignar un pedido ya aprobado
                    for (let importador of arrayImportadores) {
                        //Se recorre el array importadores
                        if (importador.activo == true && pedido.IDimportador == importador.id) {
                            //Si el importador esta activo y los id de importador concuerdan
                            viajes.innerHTML +=
                                `
                            <option value="${pedido.IDViaje}">${pedido.IDViaje}</option>
                            `
                            //Se almacenan los valores en los slc
                        }
                    }
                }
            }
        }
        for (let buque of arrayBuques) {
            //Se recorre el array buques
            if (buque.idEmpresa == IDEmp) {
                //Si el id del buque es igual al id de la empresa
                buques.innerHTML +=
                    `
            <option value="${buque.id}">${buque.nombre} | ${buque.id}</option>
             `
                //Se almacena en el slc con el valor del id y se muestra su nombre e id
            }
        }
    }
}

function asignarViaje() {
    let viaje = document.querySelector("#slcListas").value
    let buques = document.querySelector("#slcBuques").value
    //Se leen los valores del slc de viaje y buque
    for (let pedido of arrayPedidos) {
        //Se recorre el array pedidos
        for (let buque of arrayBuques) {
            //Se recorre el array buques
            if (pedido.IDViaje == viaje && buque.id == buques) {
                //Si el id del pedido concuerda con el del viaje y el del buque con los de buque
                if (pedido.activo == false) {
                    //Si el pedido es falso
                    if (pedido.cantContendores <= buque.cantidadContenedoresMaxima) {
                        //Si la cantidad de contenedores del pedido es menor a la maxima del buque
                        if (pedido.fechaPartida <= buque.fechaLlegada) {
                            //Si la fecha de partida es menor a la de llegada
                            pedido.nombreBuque = buque.nombre
                            //Se le coloca el nombre del buque al pedido
                            pedido.fechaLlegada = buque.fechaLlegada
                            //Se asigna la fecha de llegada del buque
                            pedido.activo = true
                            //Se cambia a activo
                            buque.cantidadContenedoresMaxima = buque.cantidadContenedoresMaxima - pedido.cantContendores
                            //Al buque se le resta la cantidad de contenedores
                            pedido.estado = "CONFIRMADA"
                            //Cambia su estado a confirmado
                            pedido.idBuque = buque.id
                            //Se asigna el id del buque al pedido
                            alert(`Solicitud ${pedido.IDViaje} aprobada para el buque ${buque.nombre}`)
                            //Se notifica que se aprobo
                            ocultarTodo()
                            //Se oculta todo
                            ingresadoEmpresa()
                            //Se vuelve al ingreso de empresa
                        } else {
                            alert("Las fechas de llegada y partida presentan errores")
                            //Si la fecha de partida es mayor a la de llegada se menciona el error
                        }
                    } else {
                        alert(`Cantidad de contenedores no disponible, disponemos de ${buque.cantidadContenedoresMaxima}`)
                        //Si la cantidad de contenedores es mayor a la maxima del buque se menciona el error y la cantidad disponible
                    }
                } else {
                    alert("Solicitud ya activada")
                    //Si el acitvo del pedido es true significa que ya esta activa
                }
            }
        }
    }
}
////////////////////////////////////////////////////////////// FIN ASIGNANDO SOLICITUD //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////// HACER ROLLOVER //////////////////////////////////////////////////////////////////
function hacerRollover() {
    //Funcion para mostrar el rollover
    ocultarTodo()
    //Se oculta todo
    document.querySelector("#haciendoRollover").style.display = "block"
    //Se muestra el div
    document.querySelector("#slcListasRollover").disabled = false
    document.querySelector("#mostrarOpciones").disabled = false
    //Se habilita el uso del slc y boton
    slcRolloverViajes()
    //Se carga una función que almacena datos en el slc
}

function mostrandoOpciones() {
    //función para mostrar las opciones
    let viaje = document.querySelector("#slcListasRollover").value
    //Se toma el valor del slc
    for (let pedido of arrayPedidos) {
        //Se recorre el array pedidos
        if (pedido.IDViaje == viaje) {
            //SI el id viaje del pedido es igual con el seleccionado en el slc
            document.querySelector("#selectRollover").style.display = "block"
            //Se muestra el div para continuar
            document.querySelector("#slcListasRollover").disabled = true
            document.querySelector("#mostrarOpciones").disabled = true
            //Se deshabilita el slc y el boton
            slcRolloverBuques(pedido.fechaLlegada, pedido.cantContendores)
            //Se carga el slc del rollover con una función que toma los valores de la llegada y contenedores
        }
    }
}

function haciendoRollover() {
    //Función para hacer el rollover
    let idviaje = document.querySelector("#slcListasRollover").value
    let idbuque = document.querySelector("#slcBuquesRollover").value
    //Se leen los valores de los slc
    for (let pedido of arrayPedidos) {
        //Se recorre el array pedidos
        for (let buque of arrayBuques) {
            //Se recorre el array buques
            if (pedido.IDViaje == idviaje) {
                //Si el id viaje del pedido es igual al ingresado
                if (buque.id == idbuque) {
                    //Si el id del buque es igual al ingresado
                    if (pedido.idBuque == idbuque) {
                        //Si el id buque del pedido es igual al id ingresado
                        alert("No puede rollearlo a este buque porque ya esta asignado a el.")
                        //Se comenta que no se puede rollear al mismo viaje
                    } else {
                        aumentarContenedores(pedido.nombreBuque, pedido.cantContendores)
                        //Se utiliza una función que aumenta los contenedores del pedido
                        pedido.nombreBuque = buque.nombre
                        //Se asigna al pedido el nuevo nombre del buque
                        pedido.fechaLlegada = buque.fechaLlegada
                        //Se asigna la nueva fecha de llegada
                        pedido.idBuque = buque.id
                        //Se asigna el nuevo id
                        buque.cantidadContenedoresMaxima = buque.cantidadContenedoresMaxima - pedido.cantContendores
                        //Se resta la cantidad de contenedores
                        alert(`Pedido rolleado a ${buque.nombre}`)
                        //Se menciona a donde fue el rolleo
                        ingresadoEmpresa()
                        //Se vuelve al menu de ingreso de empresa
                        document.querySelector("#haciendoRollover").style.display = "none"
                        //Se oculta el ultimo div del rolleo
                    }
                }
            }
        }
    }
}

function slcRolloverViajes() {
    //Función para agregar los viajes al slc de rollover
    let viajesRollover = document.querySelector("#slcListasRollover")
    //Se  lee el slc del viaje
    viajesRollover.innerHTML =
        `
        <option>Elija un viaje</option>
    `
    //Se pone un valor default al slc
    for (let elemento of arrayEmpresas) {
        //Se recorre el array empresas
        if (elemento.estado == true) {
            //Si el estado es true esta conectado
            IDEmp = elemento.id
            //Se almacena la id en una variable
        }
    }

    for (let pedido of arrayPedidos) {
        //Se recorre el array pedidos
        if (IDEmp == pedido.IDempresa) {
            //Si el id empresa es igual al id empresa dentro del pedido
            if (pedido.activo == true) {
                //Si el pedido esta activo
                for (let importador of arrayImportadores) {
                    //Se recorre el array importadores
                    if (importador.activo == true && pedido.IDimportador == importador.id) {
                        //Si el importador esta activo y el id importador del pedido es igual al id del importador
                        viajesRollover.innerHTML +=
                            `
                                <option value="${pedido.IDViaje}">${pedido.IDViaje}</option>
                                `
                    }
                    //Se cambian los slc para almacenar los pedidos
                }
            }
        }
    }
}

function slcRolloverBuques(fecha, contenedores) {
    //Función para almacenar los buques en un rollover con parámetros de fecha y contenedores
    let buques = document.querySelector("#slcBuquesRollover")
    //Se lee el slc
    buques.innerHTML =
        `
        <option>Elija un buque</option>
    `
    //Se establece un valor default
    for (let elemento of arrayEmpresas) {
        //Se recorre el array de empresas
        if (elemento.estado == true) {
            //Si la empresa esta en true, que esta conectada
            IDEmp = elemento.id
            //Se almacena la id en una variable
        }
    }
    for (let buque of arrayBuques) {
        //Se recorre el array de buques
        if (buque.idEmpresa == IDEmp) {
            //Si el id empresa del buque concuerda con el id de la empresa
            if (buque.fechaLlegada >= fecha && buque.cantidadContenedoresMaxima >= contenedores) {
                //Si la fecha de llegada del buque es mayor a la fecha ingresada y la cantidad de contenedores maxima es mayor a los contenedores ingresados
                buques.innerHTML +=
                    `
                     <option value="${buque.id}">${buque.nombre} | ${buque.id}</option>
                `
                //Se almacena en el option los valores para seleccionar
            }
        }
    }
}
////////////////////////////////////////////////////////////// FIN HACIENDO ROLLOVER //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////// MANIFIESTO //////////////////////////////////////////////////////////////////
function haciendoManifiesto() {
    //Función para mostrar el div de manifiesto
    ocultarTodo()
    //Se oculta todo
    document.querySelector("#haciendoManifiesto").style.display = "block"
    //Se muestra el div
    let tabla = document.querySelector('#tablaManifiesto')
    //Se lee la tabla
    tabla.innerHTML =
        `
                    <tr>
                        <td><strong>Origen</strong></td>
                        <td><strong>Contenedor</strong></td>
                        <td><strong>Importador</strong></td>
                        <td><strong>Descripción</strong></td>
                        <td><strong>Tipo de Mercaderia</strong></td>
                    </tr>
    `
    //Se le asignan valores default
    verManifiesto()
    //Se activa una función para ver los manifiestos
}

function verManifiesto() {
    //Función para mostrar el manifiesto
    let tabla = document.querySelector('#tablaManifiesto')
    //Se lee la tabla
    let IDEmp = []
    //Variable para almacenar el id de la empresa
    tabla.innerHTML =
        `
                    <tr>
                        <td><strong>Origen</strong></td>
                        <td><strong>Contenedor</strong></td>
                        <td><strong>Importador</strong></td>
                        <td><strong>Descripción</strong></td>
                        <td><strong>Tipo de Mercaderia</strong></td>
                    </tr>
    `
    //Se establecen valores default
    for (let elemento of arrayEmpresas) {
        //Se recorre el array empresa
        if (elemento.estado == true) {
            //Si el estado es true quiere decir que la empresa esta conectada
            IDEmp = elemento.id
            //Se asigna el valor en una variable
        }
    }
    for (let pedido of arrayPedidos) {
        //Se recorre el array de pedidos
        if (IDEmp == pedido.IDempresa) {
            //Si el id de empresa almacenado es igual al id de empresa dentro del pedido
            if (pedido.activo == true) {
                //Si el pedido esta activo
                tabla.innerHTML +=
                    `
                    <tr>
                        <td>${pedido.puertoO}</td>
                        <td>${arrayPedidos[arrayPedidos.indexOf(pedido)].cantContendores}</td>
                        <td>${pedido.IDimportador}</td>
                        <td>${pedido.descripcion}</td>
                        <td>${pedido.tipo}</td>
                    </tr>
                `
                //Se muestran los valores en la tabla
            }
        }
    }
}
////////////////////////////////////////////////////////////// FIN MANIFIESTO //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////// FIN HABILITANDO IMPORTADORES //////////////////////////////////////////////////////////////////
function habilitandoImportadores() {
    //Función para mostrar el div e importadores a habilitar
    ocultarTodo()
    //Se oculta todo
    document.querySelector("#habilitandoImportadores").style.display = "block"
    //Se muestra el div
    importadoresDesactivados()
    //Se muestra la función que muestra la tabla
}

function habilitarImportadores() {
    //Función para habilitar importadores
    let ID = document.querySelector("#idHabilitar").value
    //Se lee el valor introducido
    activarImportador(ID)
    //Función para activar el importador según el id
}

function importadoresDesactivados() {
    //Función para mostrar los importadores
    let tabla = document.querySelector('#tablaImportadoresDeshabilitados')
    //Se lee la tabla
    tabla.innerHTML =
        `
    <tr>
        <td><strong>Estado</strong></td>
        <td><strong>Nombre</strong></td>
        <td><strong>ID</strong></td>
        <td><strong>Cancelaciones</strong></td>
    </tr>
    `
    //Se establecen valores default
    for (let importador of arrayImportadores) {
        //Se recorre el array importadores
        if (importador.activo == false) {
            //Si el importador no esta activo
            tabla.innerHTML +=
                `
        <tr>
            <td>${ActivoDesactivado(importador.activo)}</td>
            <td>${importador.nombre}</td>
            <td>${importador.id}</td>
            <td>${importador.bloqueo}</td>
        </tr>
        
        `
            //Se muestran sus datos
        }
    }
}

function activarImportador(ID) {
    //Función para activar el importador
    for (let elemento of arrayImportadores) {
        //Se recorre el array importadores
        if (elemento.activo == false) {
            //Si el activo del importador es falso
            if (elemento.id == ID) {
                //Si la id del importador es igual a la ingresada
                elemento.activo = true
                //Se cambia el activo a true
                elemento.bloqueo = 0
                //Se vuelve la cantidad de bloqueos a 0
                alert(`Usuario ${elemento.nombre} habilitado`)
                //Se notifica la acción
                ocultarTodo()
                //Se oculta todo
                ingresadoEmpresa()
                //Se vuelve al menú de empresas
                for (let pedido of arrayPedidos) {
                    //Se recorre el array pedidos
                    if (pedido.IDimportador == ID) {
                        //Si el id importador del pedido es igual al id ingresado
                        if (pedido.activo == false) {
                            //Si el activo del pedido es falso
                            pedido.estado = "IGNORADA"
                            //Su estado es ignorado
                        }
                    }
                }
            }
        }
    }
}
////////////////////////////////////////////////////////////// FIN HABILITANDO IMPORTADORES //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////// LISTA DE CARGA //////////////////////////////////////////////////////////////////
function haciendoListadeCarga() {
    //Función para mostrar la lista de carga
    ocultarTodo()
    //Se oculta todo
    document.querySelector("#haciendoListadeCarga").style.display = "block"
    //Se muestra el div
    agregarSlcPeligrosa()
    //Se usa una función para agregar a un slc los viajes peligrosos
}

function agregarSlcPeligrosa() {
    //Función para agregar al slc los viajes peligrosos
    let peligro = document.querySelector("#slcPeligrosas")
    //Se lee el slc
    peligro.innerHTML =
        `
        <option>Elija un viaje</option>
    `
    //Se establecen valores default
    for (let elemento of arrayEmpresas) {
        //Se recorre el array empresas
        if (elemento.estado == true) {
            //Si el estado del elemento es true significa que esta conectado
            IDEmp = elemento.id
            //Se almacena la id de la empresa
        }
    }

    for (let pedido of arrayPedidos) {
        //Se recorre el array de pedidos
        if (IDEmp == pedido.IDempresa) {
            //Si el id de la empresa es igual al id empres del pedido
            if (pedido.tipo == "CARGA_PELIGROSA") {
                //Si el tipo del pedido es igual a carga peligrosa
                if (pedido.activo == true) {
                    //Si el pedido es activo
                    peligro.innerHTML +=
                        `
                <option value="${pedido.IDViaje}">${pedido.IDViaje}</option>
                `
                    //Se almacenan los valores en un slc
                }
            }
        }
    }
}
////////////////////////////////////////////////////////////// FIN LISTA DE CARGA //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////// MOSTRAR PELIGROSAS //////////////////////////////////////////////////////////////////
function mostrarListasPeligrosas() {
    //Función para mostrar el div de listas peligrosas
    let id = document.querySelector("#slcPeligrosas").value
    //Se toma el valor del id
    mostrarPeligrosas(id)
    //Se usa una función según el id almacenar los pedidos peligrosos en un slc
}

function mostrarPeligrosas(IDViaje) {
    //Función para almacenar en el slc
    let tabla = document.querySelector('#tablaPeligrosas')
    //Se lee el valor de la tabla
    tabla.innerHTML =
        `
                        <tr>
                            <td><strong>Estado</strong></td>
                            <td><strong>Tipo</strong></td>
                            <td><strong>Descripción</strong></td>
                            <td><strong>Puerto de Origen</strong></td>
                            <td><strong>ID de la empresa</strong></td>
                            <td><strong>Nombre de la empresa</strong></td>
                            <td><strong>ID del importador</strong></td>
                            <td><strong>Nombre del importador</strong></td>
                            <td><strong>ID del viaje</strong></td>
                            <td><strong>Cantidad de contenedores</strong></td>
                            <td><strong>Nombre del buque</strong></td>
                            <td><strong>Fecha de partida</strong></td>
                            <td><strong>Fecha de llegada</strong></td>
                        </tr>
    `
    //Se establecen valores default
    let IDEmp = []
    //Variable para almacenar
    for (let elemento of arrayEmpresas) {
        //Se recorre el array empresas
        if (elemento.estado == true) {
            //Si el estado es true, que esta conectado
            IDEmp = elemento.id
            //Se almacena el id de la empresa
        }
    }

    for (let pedido of arrayPedidos) {
        //Se recorre el array pedidos
        if (IDEmp == pedido.IDempresa) {
            //Si el id de empresa concuerda con el id de empresa del pedido
            if (pedido.IDViaje == IDViaje) {
                //Si el id de lviaje del pedido es igual al id viaje ingresado
                if (pedido.activo == true) {
                    //Si el pedido es activo
                    tabla.innerHTML +=
                        `
                    <tr>
                        <td>${confirmadoInactiva(pedido.activo)}</td>
                        <td>${pedido.tipo}</td>
                        <td>${pedido.descripcion}</td>
                        <td>${pedido.puertoO}</td>
                        <td>${pedido.IDempresa}</td>
                        <td>${nombreEmpresaPorID(pedido.IDempresa)}</td>
                        <td>${pedido.IDimportador}</td>
                        <td>${nombreImportadorPorID(pedido.IDimportador)}</td>
                        <td>${pedido.IDViaje}</td>
                        <td>${pedido.cantContendores}</td>
                        <td>${pedido.nombreBuque}</td>
                        <td>${pedido.fechaPartida}</td>
                        <td>${pedido.fechaLlegada}</td>
                    </tr>
                      `
                    //Se modifican valores
                }
            }
        }
    }
}
////////////////////////////////////////////////////////////// FIN PELIGROSAS //////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////// FUNCIONES EXTRA, UTILIZADAS EN CLASES O COMPARTIDAS ///////////////////////////////////////////////////////////////
function aumentarContenedores(nombre, cantidad) {
    //Función para aumentar la cantidad de contenedores con dos parámetros
    for (let buque of arrayBuques) {
        //Se recorre el array de buques
        if (buque.nombre == nombre) {
            //Si el nombre del buque concuerda con el nombre dado
            buque.cantidadContenedoresMaxima += cantidad
            //Se aumenta la cantidad de contenedores según la cantidad dada
        }
    }
}

function nombreEmpresaPorID(IDEmpresa) {
    //Función que devuelve el nombre de una empresa según un id
    for (let elemento of arrayEmpresas) {
        //Se recorre el array empresas
        if (elemento.id == IDEmpresa) {
            //Si el id de una empresa concuerda con el dado
            return elemento.nombre
            //Devuelve su nombre
        }
    }
}

function nombreImportadorPorID(IDImportador) {
    //Función que devuelve el nombre de un importador según un id
    for (let elemento of arrayImportadores) {
        //Se recorre el array importador
        if (elemento.id == IDImportador) {
            //Si el id de un importador concuerda con el dado
            return elemento.nombre
            //Devuelve su nombre
        }
    }
}

function generarIDviaje() {
    //Función que genera un id de viaje
    let caracteres = "0123456789";
    //Variable que almacena los números
    let codigo = "";
    //Función para almacenar el código
    for (let i = 0; i < 5; i++)
        //For para crear el código
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    //Se almacena en el codigo caracteres con un indice random y redondeado por el largo de los caracteres
    return codigo;
    //Retorno el código
}

function obtenerIDImportador() {
    //Función para obtener el id del importador
    for (let elemento of arrayImportadores) {
        //Se recorre el array importadores
        if (elemento.estado == true) {
            //Si la empresa esta conectada y su estado es true
            return elemento.id
            //Se retorna el id
        }
    }
}

function confirmadoInactiva(bool) {
    //Función que según un booleano retorna un valor
    if (bool == true) {
        //Si es true
        return 'CONFIRMADA'
        //Retorna confirmada
    } else {
        //Sino
        return 'INACTIVA'
        //Retorna inactiva
    }
}

function ActivoDesactivado(bool) {
    //Función que según un booleano retorna un valor
    if (bool == true) {
        //Si es true
        return 'ACTIVADA'
        //Retorna confirmada
    } else {
        //Sino
        return 'INACTIVA'
        //Retorna inactiva
    }
}

function FechaHoy() {
    //Función para saber la fecha de hoy
    let fecha = new Date()
    //Se crea una variable con constructor date para conseguir la fecha actual
    let anio = fecha.getFullYear()
    //Se almacena el año con una función que devuelve el año de una fecha
    let mes = fecha.getMonth() + 1
    //Se almacena el mes con una función que devuelve el mes de una fecha
    let dia = fecha.getDate()
    //Se almacena el dia con una función que devuelve el dia de una fecha
    if (mes < 10) mes = `0${mes}`
    //Si el mes es menor a 10 se le agrega a la variable mes un dígito 0 y el número del mes
    if (dia < 10) dia = `0${dia}`
    //Si el dia es menor a 10 se le agrega a la variable dia un dígito 0 y el número del dia
    let mifecha = `${anio}${mes}${dia}`
    //A la variable mifecha se le juntan las variables de año, mes y dia
    return mifecha
    //Retorna la fecha
}

function modificarFecha(fecha) {
    //Función para modificar la fecha
    fecha = fecha.replace("-", "")
    fecha = fecha.replace("-", "")
    //Se reemplazan los guiones
    fecha = parseInt(fecha)
    //Se convierte a fecha el valor en números
    return fecha
    //Se retorna la fecha
}
/////////////////////////////////////////////////////// FIN FUNCIONES EXTRA, UTILIZADAS EN CLASES O COMPARTIDAS ///////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////// CLASES //////////////////////////////////////////////////////////////////////////////////
class Importador {
    constructor(nombre, usuario, contraseña, foto, correo) {
        this.nombre = nombre
        this.usuario = usuario
        this.contraseña = contraseña
        this.codeSeg = generarCodigo()
        this.foto = foto
        this.correo = correo
        this.activo = true
        this.id = contadorImportadorID
        contadorImportadorID++
        this.estado = false
        this.bloqueo = 0
        this.solicitudes = 0
        this.cancelaciones = 0
    }
}

class Empresa {
    constructor(nombre, usuario, contraseña, foto) {
        this.nombre = nombre
        this.usuario = usuario
        this.id = contadorEmpresaID
        contadorEmpresaID++
        this.contraseña = contraseña
        this.foto = foto
        this.estado = false
    }
}

class Buques {
    constructor(idEmpresa, nombre, cantidadContenedoresMaxima, fechaLlegada) {
        this.nombre = nombre
        this.cantidadContenedoresMaxima = cantidadContenedoresMaxima
        this.idEmpresa = idEmpresa
        this.fechaLlegada = fechaLlegada
        this.id = contadorBuqueID
        contadorBuqueID++
    }
}

class Pedidos {
    constructor(tipo, descripcion, puertoO, IDempresa, cantContendores, fechaPartida, IDimportador) {
        this.tipo = tipo
        this.descripcion = descripcion
        this.puertoO = puertoO
        this.IDempresa = IDempresa
        this.IDViaje = parseInt(generarIDviaje())
        this.IDimportador = IDimportador
        this.activo = false
        this.estado = "PENDIENTE"
        this.cantContendores = cantContendores
        this.nombreBuque = "Sin asignar"
        this.fechaLlegada = "Sin asignar"
        this.fechaPartida = fechaPartida
        this.idBuque = false
    }
}
////////////////////////////////////////////////////////////////////////// IMPORTADORES PRECARGADOS //////////////////////////////////////////////////////////////////////////////////
let Importador1 = new Importador("Jose Pedro", "Jope", "Jope23", "/avatar/0.png", "Jope23@gmail.com")
arrayImportadores.push(Importador1)
let Importador2 = new Importador("Martin Estovoz", "Martin", "Martin2", "/avatar/1.png", "MartinMataojo@gmail.com")
arrayImportadores.push(Importador2)
let Importador3 = new Importador("Romina Ronat", "Romina", "Rominat90", "/avatar/6.png", "Romi@gmail.com")
arrayImportadores.push(Importador3)
let Importador4 = new Importador("Michael Iñigo", "Michael", "Iñigo20", "/avatar/3.png", "Micha@gmail.com")
arrayImportadores.push(Importador4)
let Importador5 = new Importador("Ash Ketchup", "Pikachu", "Pikachu99", "/avatar/4.png", "AshPuebloPaleta@gmail.com")
arrayImportadores.push(Importador5)
////////////////////////////////////////////////////////////////////////// EMPRESAS PRECARGADAS //////////////////////////////////////////////////////////////////////////////////
let Empresa1 = new Empresa("Kalcom S.A", "kalcomsa", "Kalcomsa1", "/logoempresas/1.png")
arrayEmpresas.push(Empresa1)
let Empresa2 = new Empresa("Recurity GS", "RecGS", "Recu54", "/logoempresas/2.png")
arrayEmpresas.push(Empresa2)
let Empresa3 = new Empresa("OtonGam", "otong4m", "Otong125", "/logoempresas/3.png")
arrayEmpresas.push(Empresa3)
let Empresa4 = new Empresa("Boat&Fish", "fishboat", "Fish56", "/logoempresas/4.png")
arrayEmpresas.push(Empresa4)
////////////////////////////////////////////////////////////////////////// BUQUES PRECARGADOS //////////////////////////////////////////////////////////////////////////////////
let Buque1 = new Buques(1, "Saint Ferrein", 25, 20221120)
arrayBuques.push(Buque1)
let Buque2 = new Buques(2, "Securityontainer", 5, 20221122)
arrayBuques.push(Buque2)
let Buque3 = new Buques(3, "SuizkJAM", 10, 20221125)
arrayBuques.push(Buque3)
let Buque4 = new Buques(4, "FreshFish", 20, 20221211)
arrayBuques.push(Buque4)
////////////////////////////////////////////////////////////////////////// PEDIDOS PRECARGADOS //////////////////////////////////////////////////////////////////////////////////
let Pedido1 = new Pedidos("CARGA_GENERAL", "PRODUCTOS HIGIENICOS DE USO COTIDIANO", "CHINA", 1, 5, 20221114, 1)
arrayPedidos.push(Pedido1)
let Pedido2 = new Pedidos("REFRIGERADO", "PESCADOS Y OTROS ALIMENTOS DEL MAR", "JAPON", 4, 15, 20221118, 2)
arrayPedidos.push(Pedido2)
let Pedido3 = new Pedidos("CARGA_PELIGROSA", "EXPLOSIVOS", "INDIA", 2, 2, 20221121, 3)
arrayPedidos.push(Pedido3)
let Pedido4 = new Pedidos("CARGA_GENERAL", "CARGADORES DE CELULAR", "CHINA", 3, "10", 20221124, 4)
arrayPedidos.push(Pedido4)
let Pedido5 = new Pedidos("REFRIGERADO", "CONSERVA DE TOMATES", "ITALIA", 1, 6, 20221127, 5)
arrayPedidos.push(Pedido5)
////////////////////////////////////////////////////////////////////////// FIN CLASES //////////////////////////////////////////////////////////////////////////////////
function auxiliar() {
    //Función auxiliar para que al tener pedidos precargados el contador de solicitudes de cada importador no se inicialice en 0
    for (let pedido of arrayPedidos) {
        //Se recorre el array pedidos
        for (let importador of arrayImportadores) {
            //Se recorre el array importadores
            if (pedido.IDimportador == importador.id) {
                //Si el id importador del pedido es igual al id del importador
                importador.solicitudes++
                //Se aumentan las solicitudes de ese importador
            }
        }
    }
}
auxiliar()
//Se llama al auxiliar

//DATOS IMPORTADORES
//________________________
//Importador 1:
//Jope
//Jope23
//________________________
//Importador 2:
//Usuario: Martin
//Martin2
//________________________
//Importador 3:
//Usuario: Romina
//Contraseña: Rominat90
//________________________
//Importador 4:
//Usuario: Michael
//Contraseña: Iñigo20
//________________________
//Importador 5:
//Usuario: Pikachu
//Contraseña: Pikachu99
//________________________

//DATOS EMPRESAS
//________________________
//Empresa 1:
//Usuario: kalcomsa
//Contraseña: Kalcomsa1
//________________________
//Empresa 2:
//Usuario: RecGS
//Contraseña: Recu54
//________________________
//Empresa 3:
//Usuario: otong4m
//Contraseña: Otong125
//________________________
//Empresa 4:
//Usuario: fishboat
//Contraseña: Fish56
//________________________