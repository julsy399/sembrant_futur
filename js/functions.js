function mostrarDescripcion(element, estudis, rol, descripcion) {
    var descripcionMiembro = document.getElementById("descripcion-miembro");
    descripcionMiembro.innerHTML = "<h2>" + estudis + "</h2><h4>" + rol + "</h4><p>" + descripcion + "</p>";
    descripcionMiembro.style.display = "block";

    var imagenes = document.querySelectorAll('.miembro img');
            imagenes.forEach(img => img.classList.remove('active'));
            element.classList.add('active');
}
