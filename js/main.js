
        // Slider functionality
        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.slider-dot');
            const prevBtn = document.querySelector('.slider-btn.prev');
            const nextBtn = document.querySelector('.slider-btn.next');
            let currentSlide = 0;
            let slideInterval;

            // Function to show a specific slide
            function showSlide(n) {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                currentSlide = (n + slides.length) % slides.length;
                
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
            }

            // Function to show next slide
            function nextSlide() {
                showSlide(currentSlide + 1);
            }

            // Start auto-sliding
            function startSlideShow() {
                slideInterval = setInterval(nextSlide, 5000);
            }

            // Stop auto-sliding
            function stopSlideShow() {
                clearInterval(slideInterval);
            }

            // Event listeners for buttons
            nextBtn.addEventListener('click', () => {
                stopSlideShow();
                nextSlide();
                startSlideShow();
            });

            prevBtn.addEventListener('click', () => {
                stopSlideShow();
                showSlide(currentSlide - 1);
                startSlideShow();
            });

            // Event listeners for dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    stopSlideShow();
                    showSlide(index);
                    startSlideShow();
                });
            });

            // Initialize slider
            startSlideShow();

            // Animation on scroll
            const animatedElements = document.querySelectorAll('.feature-card, .notice-item, .problem-card, .contest-card, .topic-card, .discussion-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                observer.observe(el);
            });

            // Page navigation
         
        });
