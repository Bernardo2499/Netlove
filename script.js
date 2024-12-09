document.getElementById('movie-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const selector = document.getElementById('selector').value;
    const rating = document.getElementById('rating').value;

    const catalog = document.querySelector('.catalog');
    const movie = document.createElement('div');
    movie.classList.add('movie');

    movie.innerHTML = `
        <img src="images/default.jpg" alt="${title}">
        <h2>${title}</h2>
        <p>Seleccionada por: ${selector}</p>
        <p>Calificación: ${'⭐'.repeat(rating)}</p>
    `;

    catalog.appendChild(movie);

    // Limpiar el formulario
    document.getElementById('movie-form').reset();
});
