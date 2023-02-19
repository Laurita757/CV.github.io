//Formulario de Contacto.
document.getElementById("botonEnviar").addEventListener("click", function() {
    console.log("Probando el formulario")
    document.getElementById("botonEnviar").innerHTML = alert("La consulta ha sido enviada")
});

function myFunction() {
    let text = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = "You wrote: " + text;
  }