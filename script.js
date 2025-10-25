
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    initConnectSection();
    initBackToTop();
    initFormValidation();
    initMobileMenu();
});

// Inicializa la sección Connect desplegable
 
function initConnectSection() {
    const connectLink = document.querySelector('a[href="#connect"]');
    const connectSection = document.getElementById('connect-section');
    
    if (connectLink && connectSection) {
        connectLink.addEventListener('click', function(e) {
            e.preventDefault();
            const isHidden = connectSection.getAttribute('aria-hidden') === 'true';
            
            if (isHidden) {
                connectSection.style.display = 'block';
                connectSection.setAttribute('aria-hidden', 'false');
                setTimeout(() => {
                    connectSection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                connectSection.style.display = 'none';
                connectSection.setAttribute('aria-hidden', 'true');
            }
        });
    }
}

//Scroll suave a la sección de contacto
function scrollToContact(e) {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Inicializa el botón "Volver arriba"

function initBackToTop() {
    const backToTopBtn = document.querySelector('.boton-arriba');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

//Valida formato de email
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

//Inicializa la validación del formulario
function initFormValidation() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        if (!name || !email || !message) return;
        
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const messageValue = message.value.trim();
        
        // Validar nombre
        if (nameValue.length < 3) {
            alert('Please enter a valid name (minimum 3 characters)');
            name.focus();
            return;
        }
        
        // Validar email
        if (!validateEmail(emailValue)) {
            alert('Please enter a valid email address');
            email.focus();
            return;
        }
        
        // Validar mensaje
        if (messageValue.length < 10) {
            alert('Please enter a message (minimum 10 characters)');
            message.focus();
            return;
        }
        
        // Si todo está bien
        alert('Message sent successfully! I will get back to you soon.');
        form.reset();
    });
}


