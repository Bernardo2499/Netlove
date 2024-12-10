document.getElementById("añadir").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value.trim();
    const imagenInput = document.getElementById("imagen");
    const seleccionadaPor = document.getElementById("seleccionadaPor").value;
    const calificacion = document.querySelector('input[name="calificacion"]:checked');

    if (!nombre || !imagenInput.files[0] || !calificacion) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const peliculasDiv = document.getElementById("peliculas");
        const peliculaHTML = `
            <div class="pelicula">
                <img src="${e.target.result}" alt="${nombre}">
                <h3>${nombre}</h3>
                <p>Seleccionada por: ${seleccionadaPor}</p>
                <p>Calificación: ${"⭐".repeat(calificacion.value)}</p>
            </div>
        `;
        peliculasDiv.innerHTML += peliculaHTML;

        // Limpiar formulario
        document.getElementById("nombre").value = "";
        imagenInput.value = "";
        document.querySelector('input[name="calificacion"]:checked').checked = false;
    };

    reader.readAsDataURL(imagenInput.files[0]);
});
