
const productsData = [
    {
        id: 1,
        title: "Caftan Traditionnel en Soie",
        category: "Caftans", 
        description: "Caftan marocain en soie naturelle avec broderies faites main, parfait pour les occasions spéciales.",
        price: 2500,
        image: "styles/1.jpeg",
        badge: "Nouveau"
    },
    {
        id: 2,
        title: "Robe Takchita Moderne",
        category: "Takchitas",
        description: "Takchita élégante avec ceinture brodée, mélange parfait entre tradition et modernité.",
        price: 3200,
        image: "styles/2.webp",
        badge: "Best Seller"
    },
    {
        id: 3,
        title: "Jabadour en Velours",
        category: "Jabadours",
        description: "Jabadour traditionnel en velours avec motifs berbères, confortable et élégant.",
        price: 1800,
        image: "styles/3.webp",
        badge: "Promo"
    },
    {
        id: 4,
        title: "Gandoura Brodée",
        category: "Gandouras",
        description: "Gandoura légère en coton avec broderies fines, idéale pour les soirées d'été.",
        price: 1500,
        image: "styles/4.jpeg",
        badge: ""
    },
    {
        id: 5,
        title: "Selham Luxe",
        category: "Accessoires",
        description: "Selham marocain en laine fine avec broderies dorées, pour compléter votre tenue traditionnelle.",
        price: 1200,
        image: "styles/5.jpeg",
        badge: "Luxe"
    },
    {
        id: 6,
        title: "Babouches Brodées",
        category: "Accessoires", 
        description: "Babouches marocaines en cuir véritable avec motifs traditionnels brodés main.",
        price: 450,
        image: "styles/6.avif",
        badge: ""
    }
];

function displayProducts() {
    const container = document.getElementById('products-container');
    
    productsData.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product__card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        
        productCard.innerHTML = `
            <div class="product__image">
                <img src="${product.image}" alt="${product.title}">
                ${product.badge ? `<span class="product__badge">${product.badge}</span>` : ''}
            </div>
            <div class="product__info">
                <span class="product__category">${product.category}</span>
                <h3 class="product__title">${product.title}</h3>
                <p class="product__description">${product.description}</p>
                <div class="product__footer">
                    <span class="product__price">${product.price}</span>
                    <button class="product__btn">Commander</button>
                </div>
            </div>
        `;
        
        container.appendChild(productCard);
        
        // Animation d'apparition
        setTimeout(() => {
            productCard.classList.add('animate');
        }, 100);
    });
}

// Fonction pour observer les éléments et déclencher les animations
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product__card').forEach(card => {
        observer.observe(card);
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    animateOnScroll();
});

// Filtres (optionnel)
function filterProducts(category) {
    const cards = document.querySelectorAll('.product__card');
    cards.forEach(card => {
        const cardCategory = card.querySelector('.product__category').textContent;
        if (category === 'all' || cardCategory.toLowerCase() === category.toLowerCase()) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
// Initialize Swiper
new Swiper('.solidarity-carousel', {
slidesPerView: 1,
spaceBetween: 30,
loop: true,
autoplay: {
    delay: 3000,
    disableOnInteraction: false,
},
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
effect: 'fade',
fadeEffect: {
    crossFade: true
}
});

// Animate stats on scroll
const stats = document.querySelectorAll('.impact-stat .number');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        const target = entry.target;
        const value = parseInt(target.textContent);
        animateValue(target, 0, value, 2000);
        observer.unobserve(target);
    }
});
}, { threshold: 0.5 });

stats.forEach(stat => observer.observe(stat));

function animateValue(obj, start, end, duration) {
let startTimestamp = null;
const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
        window.requestAnimationFrame(step);
    }
};
window.requestAnimationFrame(step);
}
});




// Animation des particules
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    
    // Redimensionner le canvas pour remplir l'écran
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Configuration des particules
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 50 : 100;

    // Création des particules
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 2,
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 3 - 1.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.5 + 0.5,
            angle: Math.random() * Math.PI * 2 // Add angle for star shape
        });
    }
    
    // Animation des particules
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            // Mise à jour de la position
            p.x += p.speedX;
            p.y += p.speedY;
            
            // Rebond sur les bords
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
            
            // Draw star shape
            ctx.beginPath();
            for(let j = 0; j < 5; j++) {
                const angle = p.angle + (j * Math.PI * 2 / 5);
                const x = p.x + Math.cos(angle) * p.size;
                const y = p.y + Math.sin(angle) * p.size;
                if(j === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.closePath();
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;

            // Rotate star
            p.angle += 0.02;
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    // Gestion du redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    // Menu toggle pour mobile
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
    
    // Fermer le menu quand on clique sur un lien
    const links = document.querySelectorAll('.nav__links .link a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
    
    // Animation au scroll (à ajouter si vous avez d'autres sections)
    window.addEventListener('scroll', function() {
        // Vous pouvez ajouter des animations supplémentaires ici
    });
});

// Close menu when scrolling
window.addEventListener("scroll", () => {
if (navLinks.classList.contains("open")) {
navLinks.classList.remove("open");
menuBtn.classList.remove("active");
}
});

function animateNumber(element, target) {
let current = 0;
const duration = 2000; 
const steps = 50; 
const increment = target / steps;
const interval = duration / steps;

const counter = setInterval(() => {
current += increment;
if (current >= target) {
    current = target;
    clearInterval(counter);
}
element.textContent = Math.round(current);
}, interval);
}

const observerOptions = {
threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
    const stats = entry.target.querySelectorAll('.stat h3');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        animateNumber(stat, target);
    });
    observer.unobserve(entry.target);
}
});
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
const statsContainer = document.querySelector('.about__stats');
if (statsContainer) {
observer.observe(statsContainer);
}
});



 // Animation au scroll
 document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.contact__card, .contact__form').forEach(el => {
        observer.observe(el);
    });
    
    // Animation pour le titre
    const title = document.querySelector('.section__title');
    setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 100);
});





document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('testimonials-track');
    const dotsContainer = document.getElementById('testimonials-dots');
    const cards = document.querySelectorAll('.testimonial-card');
    const arrowLeft = document.querySelector('.testimonial-arrow.left');
    const arrowRight = document.querySelector('.testimonial-arrow.right');
    
    let currentIndex = 0;
    const totalCards = cards.length;
    
    // Créer les dots de navigation
    function createDots() {
        for (let i = 0; i < totalCards; i++) {
            const dot = document.createElement('div');
            dot.classList.add('testimonial-dot');
            if (i === 0) dot.classList.add('active');
            dot.dataset.index = i;
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    // Mettre à jour le carousel
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Mettre à jour les classes actives
        cards.forEach((card, index) => {
            card.classList.toggle('active', index === currentIndex);
        });
        
        // Mettre à jour les dots actifs
        document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Aller à un slide spécifique
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    // Navigation
    arrowLeft.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - 1;
        }
        updateCarousel();
    });
    
    arrowRight.addEventListener('click', () => {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });
    
    // Auto-scroll (optionnel)
    let autoScroll = setInterval(() => {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }, 5000);
    
    // Pause au survol
    const carousel = document.querySelector('.testimonials-container');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoScroll);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoScroll = setInterval(() => {
            if (currentIndex < totalCards - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }, 5000);
    });
    
    // Initialisation
    createDots();
    updateCarousel();
    
    // Swipe pour mobile (optionnel)
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe gauche
            arrowRight.click();
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe droite
            arrowLeft.click();
        }
    }
});


// Sélection des éléments du DOM
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

// Ajout d'un écouteur d'événement pour le clic sur le bouton menu
menuBtn.addEventListener('click', () => {
    // Basculer la classe 'show' sur les liens de navigation
    navLinks.classList.toggle('show');
    
    // Changer l'icône du menu en fonction de l'état
    const menuIcon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('show')) {
        menuIcon.classList.remove('ri-menu-line');
        menuIcon.classList.add('ri-close-line');
    } else {
        menuIcon.classList.remove('ri-close-line');
        menuIcon.classList.add('ri-menu-line');
    }
});

// Optionnel: Fermer le menu lorsqu'un lien est cliqué
const navItems = document.querySelectorAll('.nav__links .link a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
        const menuIcon = menuBtn.querySelector('i');
        menuIcon.classList.remove('ri-close-line');
        menuIcon.classList.add('ri-menu-line');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceItems = document.querySelectorAll('.service-item');
    
    // Filtrage des services
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            serviceItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});