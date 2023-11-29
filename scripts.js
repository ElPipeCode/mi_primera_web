document.querySelector('.animated-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    alert(`Nombre: ${nombre}\nEmail: ${email}\nContraseña: ${password}`);
});