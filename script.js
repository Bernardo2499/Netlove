document.getElementById("añadir").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value.trim();
    const imagen = document.getElementById("imagen").value.trim();
    const seleccionadaPor = document.getElementById("seleccionadaPor").value.trim();
    const calificacion = document.getElementById("calificacion").value.trim();

    if (!nombre || !imagen || !seleccionadaPor || !calificacion || calificacion < 1 || calificacion > 5) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    const peliculasDiv = document.getElementById("peliculas");
    const peliculaHTML = `
        <div class="pelicula">
            <img src="${imagen}" alt="${nombre}">
            <h3>${nombre}</h3>
            <p>Seleccionada por: ${seleccionadaPor}</p>
            <p>Calificación: ${"⭐".repeat(calificacion)}</p>
        </div>
    `;
    peliculasDiv.innerHTML += peliculaHTML;

    document.getElementById("nombre").value = "";
    document.getElementById("imagen").value = "";
    document.getElementById("seleccionadaPor").value = "";
    document.getElementById("calificacion").value = "";
});
