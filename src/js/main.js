// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Go Vibe website loaded successfully!');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation and submission handling
    const contactForm = document.querySelector('.contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const serviceSelect = document.getElementById('service');
            
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                isValid = false;
                showError(nameInput, 'Name is required');
            } else {
                removeError(nameInput);
            }
            
            if (!emailInput.value.trim()) {
                isValid = false;
                showError(emailInput, 'Email is required');
            } else if (!isValidEmail(emailInput.value)) {
                isValid = false;
                showError(emailInput, 'Please enter a valid email address');
            } else {
                removeError(emailInput);
            }
            
            if (!serviceSelect.value) {
                isValid = false;
                showError(serviceSelect, 'Please select a service');
            } else {
                removeError(serviceSelect);
            }
            
            if (!messageInput.value.trim()) {
                isValid = false;
                showError(messageInput, 'Message is required');
            } else {
                removeError(messageInput);
            }
            
            if (isValid) {
                // In a real application, you would send the form data to a server
                // For now, we'll just show a success message
                const formData = {
                    name: nameInput.value,
                    email: emailInput.value,
                    service: serviceSelect.value,
                    message: messageInput.value
                };
                
                console.log('Form submitted successfully:', formData);
                
                // Create a modern success notification
                const notification = document.createElement('div');
                notification.className = 'success-notification';
                notification.innerHTML = `
                    <div style="background: linear-gradient(45deg, #a2b372, #c49fd5); color: white; padding: 20px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); position: fixed; bottom: 30px; right: 30px; z-index: 1000; max-width: 350px; display: flex; align-items: center;">
                        <div style="background: rgba(255,255,255,0.2); border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                            <i class="fas fa-check" style="color: white;"></i>
                        </div>
                        <div>
                            <h4 style="margin: 0 0 5px 0; font-weight: 600;">Message Sent!</h4>
                            <p style="margin: 0; opacity: 0.9; font-size: 0.9rem;">Thanks! We'll get back to you soon.</p>
                        </div>
                    </div>
                `;
                document.body.appendChild(notification);
                
                // Remove notification after 5 seconds
                setTimeout(() => {
                    notification.style.opacity = '0';
                    notification.style.transform = 'translateY(20px)';
                    notification.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 500);
                }, 5000);
                
                contactForm.reset();
            }
        });
    }
    
    // Helper functions for form validation
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
        
        if (!formGroup.querySelector('.error-message')) {
            errorElement.className = 'error-message';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        input.style.borderColor = '#bf5151';
    }
    
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
        
        input.style.borderColor = '#ddd';
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Mobile menu toggle functionality for responsive design
    const createMobileMenu = () => {
        const header = document.querySelector('header');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.setAttribute('aria-label', 'Toggle menu');
        mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
        mobileMenuBtn.style.display = 'none';
        
        // Add mobile menu button to the header
        const nav = document.querySelector('nav');
        nav.appendChild(mobileMenuBtn);
        
        // Add styles for mobile view
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .mobile-menu-btn {
                    display: block !important;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 5px;
                }
                
                .mobile-menu-btn span {
                    display: block;
                    width: 25px;
                    height: 3px;
                    background-color: white;
                    margin: 5px 0;
                    transition: 0.3s;
                }
                
                .nav-links {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background-color: #2c3e50;
                    flex-direction: column;
                    padding: 1rem 0;
                }
                
                .nav-links.show {
                    display: flex !important;
                }
                
                .nav-links li {
                    margin: 0.5rem 0;
                    text-align: center;
                }
                
                .nav-links a {
                    display: block;
                    padding: 0.5rem;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('show');
            
            // Animate burger icon
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach(span => {
                span.classList.toggle('active');
            });
        });
    };
    
    // Initialize mobile menu
    createMobileMenu();
    
    // Add animation to service cards on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .hero h1, .hero p, .hero .cta-button, section h2');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Add custom animation for hero elements
                    if (entry.target.classList.contains('cta-button')) {
                        entry.target.style.animationName = 'pulse';
                        entry.target.style.animationDuration = '2s';
                        entry.target.style.animationIterationCount = 'infinite';
                    }
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    };
    
    // Initialize animations
    animateOnScroll();
    
    // Add typing effect to the hero section to emphasize AI coding theme
    const createTypingEffect = () => {
        const codeElement = document.querySelector('.hero-graphics');
        if (!codeElement) return;
        
        const originalText = codeElement.innerHTML;
        codeElement.innerHTML = "";
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                codeElement.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 40);
            }
        };
        
        setTimeout(typeWriter, 1000);
    };
    
    // Initialize typing effect
    createTypingEffect();
    
    // Create floating code particles in the background of the hero section
    const createCodeParticles = () => {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        const codeSnippets = [
            '{ AI }',
            '< LLM >',
            'func()',
            '// Vibe',
            '# Go',
            '/* ML */',
            '=> Code',
            '@ Prompt',
            '&lt;/&gt;'
        ];
        
        // Create a container for the particles
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.position = 'absolute';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.overflow = 'hidden';
        particlesContainer.style.zIndex = '1';
        hero.insertBefore(particlesContainer, hero.firstChild);
        
        // Create particles
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'code-particle';
            particle.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            
            // Random styling
            particle.style.position = 'absolute';
            particle.style.color = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`;
            particle.style.fontSize = `${Math.random() * 0.8 + 0.6}rem`;
            particle.style.fontFamily = 'monospace';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.transform = 'rotate(' + (Math.random() * 40 - 20) + 'deg)';
            particle.style.opacity = '0';
            particle.style.animation = `fadeIn ${Math.random() * 2 + 2}s ease-out ${Math.random() * 3}s forwards`;
            
            particlesContainer.appendChild(particle);
        }
    };
    
    // Initialize code particles
    createCodeParticles();
});