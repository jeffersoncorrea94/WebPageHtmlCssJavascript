document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('imageGallery');

    const imagePath = 'assets/galery/';
    const cantidadImagenes = 10;
    var  imageNames = [];
    for (var i = 1; i <= cantidadImagenes; i++) { 
        var newImageName = 'imagen' + i + '.jpeg';
        imageNames.push(newImageName);
    }
    
    // Crear elementos de imagen y agregar al contenedor
    imageNames.forEach(function (imageName) {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image');

        const img = document.createElement('img');
        img.src = imagePath + imageName;
        img.alt = 'Imagen';
        
        imageContainer.appendChild(img);
        galleryContainer.appendChild(imageContainer);
    });
});
