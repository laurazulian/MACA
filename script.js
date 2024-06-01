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
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Validación básica
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        // Si la validación es exitosa, puedes enviar el formulario aquí
        alert("Form submitted successfully!");
        form.submit(); // Quita este comentario para enviar el formulario de verdad
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// selector
const menuButton = document.querySelector('.button-menu');
    const mainNav = document.querySelector('.main-nav');
    
    menuButton.addEventListener('click', function() {
        mainNav.classList.toggle('show');
        menuButton.classList.toggle('close');
    });