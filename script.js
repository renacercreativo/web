
    let cond =document.getElementById('diseño');
let conw =document.getElementById('web');
let conm =document.getElementById('marketing');

function mostrard(){
cond.style.display='block';
conw.style.display='none';
conm.style.display='none';
}

function mostrarw(){
    cond.style.display='none';
    conw.style.display='block';
    conm.style.display='none';


}

function mostrarm(){
    cond.style.display='none';
    conw.style.display='none';
    conm.style.display='block';


}

function girar1(){
    document.getElementById('adrian1').style.display='none';
    document.getElementById('adrian2').style.display='block';
}

function girar2(){
    document.getElementById('david1').style.display='none';
    document.getElementById('david2').style.display='block';
}

function girar3(){
    document.getElementById('fred1').style.display='none';
    document.getElementById('fred2').style.display='block';
}

function regresar1(){
    document.getElementById('adrian1').style.display='block';
    document.getElementById('adrian2').style.display='none';
}

function regresar2(){
    document.getElementById('david1').style.display='block';
    document.getElementById('david2').style.display='none';
}

function regresar3(){
    document.getElementById('fred1').style.display='block';
    document.getElementById('fred2').style.display='none';
}

function desplegar(){
    document.getElementById('desplegable').style.display='flex';
    document.getElementById('des').style.display='none';
    document.getElementById('ocu').style.display='flex';
}

function ocultar(){
    document.getElementById('desplegable').style.display='none';
    document.getElementById('des').style.display='flex';
    document.getElementById('ocu').style.display='none';
}

/**nuevas funciones  */

function saludar(){
    let nombre=document.getElementById("nombre").value;
    let texto1=document.getElementById("texto1");
    let texto2=document.getElementById("texto2");
    let parrafo2=document.getElementById("parrafo2");

    if(nombre!==""){
        texto1.style.display="none";
        texto2.style.display="block";
        parrafo2.innerHTML =nombre +"," +" Te invito a explorarme. Aquí encontrarás variedad de temas relacionados con animales, plantas y la belleza natural de nuestro planeta, así como retos intelectuales de ciencia. "
    }else{
        alert("Vamos, dime tu nombre")
    };

}


function saludar(){
    let nombre=document.getElementById("nombre").value;
    let texto1=document.getElementById("texto1");
    let texto2=document.getElementById("texto2");
    let parrafo2=document.getElementById("parrafo2");

    if(nombre!==""){
        texto1.style.display="none";
        texto2.style.display="flex";
        parrafo2.innerHTML = nombre +"," +"será un placer ayudarte el dia de hoy"
    }else{
        alert("Vamos, dime tu nombre")
    };

}

function siguiente(siguienteId) {
    // Obtener el elemento que se va a mostrar
    let elemento = document.getElementById(siguienteId),
     saludonombre = document.getElementById('parrafo2');

    saludonombre.style.display='none';
    
    // Obtener el botón que activó la función
    let botonActivo = event.target.closest('div'); // Encuentra el contenedor del botón

    // Ocultar el contenedor del botón
    if (botonActivo) {
        botonActivo.parentElement.style.display = 'none';
    }

    // Mostrar el nuevo elemento
    elemento.style.display = 'flex';

    document.getElementById('parafo2')
}

