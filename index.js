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

// Crear botón de regreso al front
const btnRegresar = document.createElement("button");
btnRegresar.textContent = "⬅️ Volver al Front Principal";
btnRegresar.onclick = () => {
  window.location.href = "https://front-paas-production.up.railway.app/";
};

// Estilos opcionales
btnRegresar.style.marginTop = "20px";
btnRegresar.style.padding = "10px 20px";
btnRegresar.style.fontSize = "16px";
btnRegresar.style.cursor = "pointer";
btnRegresar.style.backgroundColor = "#4CAF50";
btnRegresar.style.color = "white";
btnRegresar.style.border = "none";
btnRegresar.style.borderRadius = "5px";

// Agregar al body
document.body.appendChild(document.createElement("br"));
document.body.appendChild(btnRegresar);

// Versión 1.0 - Probando GitHub Actions

// Activando GitHub Actions
