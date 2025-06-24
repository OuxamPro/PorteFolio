// Navigation mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navigation active au scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animation des barres de compétences au scroll
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const barBottom = bar.getBoundingClientRect().bottom;
        
        if (barTop < window.innerHeight && barBottom > 0) {
            bar.style.width = bar.style.width || '0%';
        }
    });
};

// Observer pour les animations au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments pour les animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Animation des barres de compétences
window.addEventListener('scroll', animateSkillBars);

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Effet de parallaxe léger pour le hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animation des icônes au hover
document.querySelectorAll('.contact-item i').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Animation des cartes de projet au hover
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Typing effect pour le titre principal (optionnel)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Appliquer l'effet de typing au titre si désiré
// document.addEventListener('DOMContentLoaded', () => {
//     const title = document.querySelector('.hero-text h1');
//     if (title) {
//         typeWriter(title, 'Maxime Quesnel');
//     }
// });

// Préchargement des images (pour la photo professionnelle)
window.addEventListener('load', () => {
    // Ici vous pourrez ajouter le préchargement de la photo professionnelle
    // quand elle sera disponible
    console.log('Portfolio chargé avec succès !');
});

// Gestion des erreurs de chargement
window.addEventListener('error', (e) => {
    console.error('Erreur de chargement:', e);
});

// Performance monitoring
window.addEventListener('load', () => {
    if ('performance' in window) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Temps de chargement: ${loadTime}ms`);
    }
});

// Apparition au scroll (fadeInUp)
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 60) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);

// Animation des barres de compétences au scroll
function animateBars() {
    document.querySelectorAll('.bar-fill').forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        if (barTop < window.innerHeight - 40) {
            bar.style.width = bar.getAttribute('style').split('width:')[1];
            bar.classList.add('bar-animated');
        }
    });
}
window.addEventListener('scroll', animateBars);
document.addEventListener('DOMContentLoaded', animateBars);

// Effet hover sur les cartes projets et compétences
['.project-card', '.skill-card', '.contact-info.card', '.contact-form.card'].forEach(sel => {
    document.querySelectorAll(sel).forEach(card => {
        card.classList.add('reveal');
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.025)';
            card.style.boxShadow = '0 8px 32px rgba(37,99,235,0.13)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
});

// Effet sur les boutons
Array.from(document.querySelectorAll('.btn')).forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.06)';
        btn.style.boxShadow = '0 4px 16px rgba(37,99,235,0.13)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
        btn.style.boxShadow = '';
    });
});

// Effet sur les icônes de contact
Array.from(document.querySelectorAll('.contact-list i')).forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.25)';
        icon.style.transition = 'transform 0.2s';
        icon.style.color = '#1d4ed8';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = '';
        icon.style.color = '';
    });
}); 