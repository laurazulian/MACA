document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('home-link').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '#home';
    });

    document.getElementById('nosotras-link').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '#nosotras';
    });

    document.getElementById('clientes-link').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '#clientes';
    });

    document.getElementById('servicios-link').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '#servicios';
    });

    document.getElementById('contacto-link').addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '#contacto';
    });
});
