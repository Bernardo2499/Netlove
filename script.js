// Selección de elementos
const peliculasDiv = document.getElementById("peliculas");
const nombreInput = document.getElementById("nombre");
const seleccionadaPorInput = document.getElementById("seleccionadaPor");
const calificacionInput = document.getElementById("calificacion");
const añadirButton = document.getElementById("añadir");

// Función para añadir una película
añadirButton.addEventListener("click", () => {
    const nombre = nombreInput.value.trim();
    const seleccionadaPor = seleccionadaPorInput.value.trim();
    const calificacion = parseInt(calificacionInput.value.trim());

    // Validación
    if (!nombre || !seleccionadaPor || isNaN(calificacion) || calificacion < 1 || calificacion > 5) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    // Crear tarjeta de película
    const peliculaDiv = document.createElement("div");
    peliculaDiv.classList.add("pelicula");
    peliculaDiv.innerHTML = `
        <img src="https://via.placeholder.com/150x200?text=${encodeURIComponent(nombre)}" alt="${nombre}">
        <h3>${nombre}</h3>
        <p>Seleccionada por: ${seleccionadaPor}</p>
        <p>Calificación: ${"⭐".repeat(calificacion)}</p>
    `;

    // Añadir al catálogo
    peliculasDiv.appendChild(peliculaDiv);

    // Limpiar formulario
    nombreInput.value = "";
    seleccionadaPorInput.value = "";
    calificacionInput.value = "";
});
