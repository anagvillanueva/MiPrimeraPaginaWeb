document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.createElement('div');
    const lightboxImg = document.createElement('img');
    const closeButton = document.createElement('span'); 

    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '50%';
    lightbox.style.left = '50%';
    lightbox.style.transform = 'translate(-50%, -50%)';
    lightbox.style.display = 'none';
    lightbox.style.zIndex = '1000';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.padding = '10px';
    lightbox.style.borderRadius = '10px';
    
    lightboxImg.style.maxWidth = '90%';
    lightboxImg.style.maxHeight = '90%';
    lightboxImg.style.borderRadius = '5px';
    lightbox.appendChild(lightboxImg);

    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '15px';
    closeButton.style.fontSize = '20px';
    closeButton.style.cursor = 'pointer';
    lightbox.appendChild(closeButton);
    
    document.body.appendChild(lightbox);

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightboxImg.src = image.src;
            lightbox.style.display = 'block';
        });
    });

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox || event.target === closeButton) {
            lightbox.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
        }
    });
});

document.querySelector('#contactForm').addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="firstName"]').value;
    const email = document.querySelector('input[name="e-mail"]').value;
    const number = document.querySelector('input[name="cel"]').value;
    
    if (name === '' || email === '' || number === '') {
        alert('Todos los campos son obligatorios');
        e.preventDefault();
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido');
        e.preventDefault();
    }
});

const backToTopButton = document.getElementById("goTopBtn");

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const themeButton = document.getElementById('theme-toggle');

themeButton.addEventListener('click', () => {
    const theme = document.body.classList.toggle('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Aplicar tema oscuro si está guardado en localStorage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

const darkThemeStyles = document.createElement('style');
darkThemeStyles.textContent = `
    body.dark-theme {
        background-color: #333;
        color: #f5f5f5;
    }
    body.dark-theme header {
        background-color: #555;
    }
    body.dark-theme nav {
        background-color: #444;
    }
    body.dark-theme footer {
        background-color: #555;
    }
    body.dark-theme section {
        background-color: #444;
    }
    body.dark-theme nav a {
        color: #f5f5f5;
    }
    body.dark-theme footer button {
        background-color: #9370db;
    }
`;
document.head.appendChild(darkThemeStyles);
