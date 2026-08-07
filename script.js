/* ==========================================================================
   METALLICA FAN PORTAL - INTERACTIVITY & DYNAMIC LOGIC (PARTE 5)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initCounterAnimation();
});

// 1. Alteração de estilo do Header ao rolar a página
function initHeaderScroll() {
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.style.background = 'rgba(4, 4, 6, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.8)';
        } else {
            header.style.background = 'rgba(7, 7, 9, 0.92)';
            header.style.boxShadow = 'none';
        }
    });
}

// 2. Animação de contagem regressiva/progressiva nos números do Hero
function initCounterAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(stat => {
                    const targetStr = stat.getAttribute('data-target');
                    if (targetStr) {
                        const target = parseInt(targetStr);
                        let count = 0;
                        const increment = Math.ceil(target / 40);
                        const timer = setInterval(() => {
                            count += increment;
                            if (count >= target) {
                                stat.innerText = target + 'M+';
                                clearInterval(timer);
                            } else {
                                stat.innerText = count + 'M+';
                            }
                        }, 40);
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    const heroSection = document.querySelector('.hero-stats-grid');
    if (heroSection) {
        observer.observe(heroSection);
    }
}

// 3. Manipulação de Envio do Formulário do Fan Club
function handleFormSubmit() {
    const form = document.getElementById('fifthMemberForm');
    const feedback = document.getElementById('formFeedback');

    form.style.display = 'none';
    feedback.classList.add('active');
}

// 4. Rolar suavemente de volta ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
