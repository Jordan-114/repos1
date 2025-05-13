// Crear título
const titulo = document.createElement("h1");
titulo.textContent = "¡Hola mundo con JavaScript!";
document.body.appendChild(titulo);



// Crear botón
const boton = document.createElement("button");
boton.textContent = "Haz clic aquí";
boton.onclick = () => alert("¡Gracias por visitar!");
document.body.appendChild(boton);

// Estilos desde JavaScript
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.marginTop = "50px";
document.body.style.backgroundColor = "#f2f2f2";
