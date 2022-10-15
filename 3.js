//Rescatamos el elemento del DOM
var menu = document.getElementById('menu');
var menui = document.getElementById("menuinput");

var regis = document.getElementById("regis");
var obmenu = document.getElementById('obtener');
var or_apellidos = document.getElementById("apellidos");
var or_edad = document.getElementById("edadcolumn");

//Creamos una clase Persona para almacenar los datos
class Persona{
    constructor(id, nombre, apellido_p, apellido_m, fecha, edad){
        this.id = id;
        this.nombre = nombre;
        this.apellido_p = apellido_p;
        this.apellido_m = apellido_m;
        this.fecha = fecha;
        this.edad = edad;
    }
}

//Creamos un array para almacenar los objetos de tipo Persona
var personas = [];

//Funciones

//funcion menu
function Registrar()
{
    menu.style.display = "none";
    regis.style.display = "flex";
}
function Obtener()
{
    menu.style.display = "none";
    obmenu.style.display = "flex";
}
function Des_ap()
{
    menu.style.display = "none";
    or_apellidos.style.display = "flex";
}
function Des_edad()
{
    menu.style.display = "none";
    or_edad.style.display = "flex";
}


//Funcion para registrar
function sendR(){
    var id = document.getElementById("id");
    var nombre = document.getElementById("nombre");
    var apellido_p = document.getElementById("apellido_p");
    var apellido_m = document.getElementById("apellido_m");
    var texti = document.getElementById("text");

    Persona.id = validarInt(id.value);
    Persona.nombre = validarString(nombre.value);
    Persona.apellido_p = validarString(apellido_p.value);
    Persona.apellido_m = validarString(apellido_m.value);
    //Aqui utilice la funcion fecha que esta en el archivo 2.js
    Persona.fecha = fecha();

    if(Persona.id == 1)
    {
        texti.textContent = "El id debe ser un numero";
        id.value = "";
    }
    if(Persona.nombre == 1){
        texti.textContent = "El nombre no es valido";
        nombre.value = "";
    }
    if(apellido_p.value == 1){
            texti.textContent = "El apellido no es valido";
            apellido_p.value = "";
    }
    if(apellido_m.value == 1){
            texti.textContent = "El apellido no es valido";
            apellido_m.value = "";
    }
    if(Persona.fecha == 1 || Persona.fecha == 0){
        texti.textContent = "La fecha no es valida";
    }

    if (Persona.id != 1)
    {
        if(Persona.nombre !=1)
        {
            if(Persona.apellido_p !=1)
            {
                if(Persona.apellido_m !=1)
                {
                    if(Persona.fecha != 1 && Persona.fecha != 0)
                    {
                        var persona = new Persona(Persona.id, Persona.nombre, Persona.apellido_p, Persona.apellido_m, Persona.fecha, Persona.edad);
                        personas.push(persona);
                        texti.textContent = "Persona registrada";
                        console.log(personas);

                        id.value = "";
                        nombre.value = "";
                        apellido_p.value = "";
                        apellido_m.value = "";
                    }
                }
            }
        }
    }
}

//Funcion para validar que el id sea un numero
function validarInt(int){
    if(int == ""){
        return 1;
    }
    else{
        if(isNaN(int)){
            return 1;
        }
        else{
            console.log(int);
            return int;
        }
    }
}

//Funcion para validar que el nombre y apellido sean solo letras
function validarString(string)
{
    if(string.match(/^[a-zA-Z]+[a-zA-Z]+$/)){
        return string;
    }
    else{  
        if(string.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
            return string;
        }
        else{
            return 1;
        }
    }
}

//Funcion para obtener la edad
function sendOb(){
var obinput = document.getElementById("obinput");
var edadid = document.getElementById("edad");

    var text = obinput.value;
    var personaedad = personas.find(persona => persona.id == text);
    if(personaedad != null){
        fechaactual = new Date();
        fechanacimiento = new Date(personaedad.fecha);
        edad = fechaactual.getFullYear() - fechanacimiento.getFullYear();
        edadid.textContent = edad;
        
    }else{
        alert("No existe esa persona");
    }
    obinput.value = "";
}

//Funcion para ordenar por edad de menor a mayor
function desplegar_edad(){
    var list = document.getElementById("list");
    var aux;
    fechaactual = new Date();
    for (let i = 0; i < personas.length; i++) {
    fechanacimiento = new Date(personas[i].fecha);
    edad[i] = fechaactual.getFullYear() - fechanacimiento.getFullYear();
    personas[i].edad = edad[i];
    }
    for (let i = 0; i < personas.length; i++) {
        for (let j = 0; j < personas.length; j++) {
            if(personas[i].edad < personas[j].edad){
                aux = personas[i];
                personas[i] = personas[j];
                personas[j] = aux;
            }
        }
    }
    for (let i = 0; i < personas.length; i++) {
        var li = document.createElement("li");
        li.textContent = personas[i].nombre.toUpperCase();
        list.appendChild(li);
    }

}

//Funcion para ordenar por apellidos de la A a la Z
function desplegar_apellidos(){
    var listaper = document.getElementById("listapellidos");
    var aux;
    for (let i = 0; i < personas.length; i++) {
        for (let j = 0; j < personas.length; j++) {
            if(personas[i].apellido_p < personas[j].apellido_p){
                aux = personas[i];
                personas[i] = personas[j];
                personas[j] = aux;
            }
        }
    }
    for (let i = 0; i < personas.length; i++) {
        var li = document.createElement("li");
        li.textContent = personas[i].nombre.toUpperCase();
        listaper.appendChild(li);
    }

}

//Muncion btn para regresar al menu
function backmenu(){
    obmenu.style.display = "none";
    regis.style.display = "none";
    or_apellidos.style.display = "none";
    or_edad.style.display = "none";
    menu.style.display = "flex";
}