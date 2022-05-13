const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const busqueda = document.querySelector('input').value;

    window.location.href = `busqueda.html?nombre=${busqueda}`;

    form.reset();
});