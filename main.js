// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const button = item.querySelector('button');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');
        
        if (button && content && icon) {
            button.addEventListener('click', function() {
                const isOpen = !content.classList.contains('hidden');
                
                // Close all FAQ items
                faqItems.forEach(otherItem => {
                    const otherContent = otherItem.querySelector('.faq-content');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    if (otherContent && otherIcon) {
                        otherContent.classList.add('hidden');
                        otherIcon.classList.remove('rotate');
                    }
                });
                
                // Toggle current item
                if (isOpen) {
                    content.classList.add('hidden');
                    icon.classList.remove('rotate');
                } else {
                    content.classList.remove('hidden');
                    icon.classList.add('rotate');
                }
            });
        }
    });

    // Search functionality
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const resourceCards = document.querySelectorAll('.grid .bg-white');
            
            resourceCards.forEach(card => {
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const description = card.querySelector('p')?.textContent.toLowerCase() || '';
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = searchTerm ? 'none' : 'block';
                }
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation to resource cards
    const resourceCards = document.querySelectorAll('.grid .bg-white');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in-up');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    resourceCards.forEach(card => {
        observer.observe(card);
    });

    // Newsletter subscription
    const newsletterForm = document.querySelector('footer .flex');
    if (newsletterForm) {
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitButton = newsletterForm.querySelector('button');
        
        if (submitButton) {
            submitButton.addEventListener('click', function(e) {
                e.preventDefault();
                const email = emailInput?.value;
                
                if (email && isValidEmail(email)) {
                    // Simulate form submission
                    submitButton.innerHTML = '<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>';
                    
                    setTimeout(() => {
                        submitButton.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
                        if (emailInput) emailInput.value = '';
                        
                        setTimeout(() => {
                            submitButton.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>';
                        }, 2000);
                    }, 1500);
                } else {
                    alert('Please enter a valid email address');
                }
            });
        }
    }

    // Add hover effects to cards
    const cards = document.querySelectorAll('.bg-white');
    cards.forEach(card => {
        card.classList.add('card-hover');
    });

    // Handle window resize for mobile menu
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            mobileMenu?.classList.add('hidden');
        }
    });
});

// Utility function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    }
});

// Add typing effect to search placeholder
function typeWriterEffect() {
    const searchInput = document.querySelector('input[placeholder*="Search"]');
    if (searchInput) {
        const originalPlaceholder = searchInput.getAttribute('placeholder');
        let currentText = '';
        let index = 0;
        
        function type() {
            if (index < originalPlaceholder.length) {
                currentText += originalPlaceholder.charAt(index);
                searchInput.setAttribute('placeholder', currentText);
                index++;
                setTimeout(type, 100);
            }
        }
        
        // Start typing effect after a delay
        setTimeout(() => {
            searchInput.setAttribute('placeholder', '');
            type();
        }, 1000);
    }
}

// Initialize typing effect
setTimeout(typeWriterEffect, 2000);