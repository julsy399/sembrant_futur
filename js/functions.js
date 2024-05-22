function mostrarDescripcion(estudis, rol, descripcion) {
    var descripcionMiembro = document.getElementById("descripcion-miembro");
    descripcionMiembro.innerHTML = "<h2>" + estudis + "</h2><h4>" + rol + "</h4><p>" + descripcion + "</p>";
    descripcionMiembro.style.display = "block";
}

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});