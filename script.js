// Inicializa a biblioteca AOS (se estiver usando)
AOS.init({ duration: 1000, once: true });

// Inicializa o EmailJS com seu USER_ID
emailjs.init("xBWQDP41I_QOvcKQM");

document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Envia o formulário usando EmailJS
    emailjs.sendForm(
        "service_m1o6gpb",   // SERVICE_ID do serviço criado
        "template_p4wnpon",  // TEMPLATE_ID do template criado
        this                      // formulário atual (this = formContato)
    )
    .then(function() {
        alert('Mensagem enviada! Obrigado pelo contato 😊');
        e.target.reset(); // limpa o formulário
    }, function(error) {
        alert('Erro ao enviar a mensagem: ' + JSON.stringify(error));
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
            header.style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.5)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.3)';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all sections and service items
    document.querySelectorAll('section, .service-item, .portfolio-item, .testimonial-item').forEach(el => {
        observer.observe(el);
    });

    // Enhanced hover effects for service items
    const serviceItems = document.querySelectorAll(".service-item");
    serviceItems.forEach((item, index) => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateY(-15px) scale(1.02)";
            item.style.boxShadow = "0 0 40px rgba(0, 240, 255, 0.8)";
            item.style.borderColor = "#0080ff";
            
            // Add glow effect to icon
            const icon = item.querySelector('.service-icon');
            if (icon) {
                icon.style.filter = "drop-shadow(0 0 20px #00f0ff)";
                icon.style.transform = "scale(1.1)";
            }
        });
        
        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateY(0) scale(1)";
            item.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.3)";
            item.style.borderColor = "#00f0ff";
            
            // Reset icon
            const icon = item.querySelector('.service-icon');
            if (icon) {
                icon.style.filter = "drop-shadow(0 0 10px #00f0ff)";
                icon.style.transform = "scale(1)";
            }
        });

        // Add click effect
        item.addEventListener("click", () => {
            item.style.animation = "pulse 0.3s ease";
            setTimeout(() => {
                item.style.animation = "";
            }, 300);
        });
    });

    // Enhanced hover effects for portfolio items
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05) rotateY(5deg)";
            item.style.boxShadow = "0 0 40px rgba(0, 240, 255, 0.8)";
        });
        
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1) rotateY(0deg)";
            item.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.3)";
        });
    });

    // Testimonial hover effects
    const testimonialItems = document.querySelectorAll(".testimonial-item");
    testimonialItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateY(-10px)";
            item.style.boxShadow = "0 0 30px rgba(0, 240, 255, 0.6)";
            item.style.borderLeftColor = "#0080ff";
        });
        
        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateY(0)";
            item.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.3)";
            item.style.borderLeftColor = "#00f0ff";
        });
    });

    // Contact form enhancements
    const contactForm = document.querySelector(".contact-form");
    const formInputs = document.querySelectorAll(".contact-form input, .contact-form textarea");
    
    // Add focus effects to form inputs
    formInputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.style.transform = "translateY(-3px)";
            input.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.5)";
        });
        
        input.addEventListener("blur", () => {
            input.style.transform = "translateY(0)";
            input.style.boxShadow = "none";
        });

        // Add typing effect
        input.addEventListener("input", () => {
            input.style.borderColor = input.value ? "#0080ff" : "#00f0ff";
        });
    });

    // Form submission with animation
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Loading animation
            submitBtn.textContent = "Enviando...";
            submitBtn.style.background = "linear-gradient(135deg, #ff0080, #8000ff)";
            submitBtn.disabled = true;
            
            // Simulate sending
            setTimeout(() => {
                submitBtn.textContent = "Enviado!";
                submitBtn.style.background = "linear-gradient(135deg, #00ff80, #00ff00)";
                
                // Show success message
                showNotification("Mensagem enviada com sucesso! Em breve entraremos em contato.", "success");
                
                // Reset form
                contactForm.reset();
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = "linear-gradient(135deg, #00f0ff, #0080ff)";
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #00f0ff, #0080ff);
            color: #0a0a0a;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
            z-index: 10000;
            font-weight: 600;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Dynamic background particles (simple version)
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: #00f0ff;
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.7;
            animation: particle-float 10s linear infinite;
        `;
        
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        }, 10000);
    }

    // Add particle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particle-float {
            to {
                transform: translateY(-${window.innerHeight + 100}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Create particles periodically
    setInterval(createParticle, 2000);

    // Logo animation on load
    const logo = document.querySelector('.logo img');
    if (logo) {
        logo.style.animation = 'pulse 2s ease-in-out infinite';
    }

    // Add loading class removal after page load
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
    });

    // Keyboard navigation enhancement
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open modals or reset focus
            document.activeElement.blur();
        }
    });

    // Add smooth reveal animation to elements as they come into view
    const revealElements = document.querySelectorAll('h2, .service-item, .portfolio-item, .testimonial-item');
    revealElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
    });

    // Trigger animations when elements are in view
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    console.log('🚀 Garra Inc Technology - Site carregado com sucesso!');
});

