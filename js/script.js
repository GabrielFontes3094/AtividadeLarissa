const pageButtons = document.querySelectorAll(".pageButton");
const iframeContainer = document.getElementById("iframeContainer");

pageButtons.forEach(button => {
    button.addEventListener("click", () => {
        const pagePath = button.getAttribute("data-page");
        
        const iframe = document.createElement("iframe");
        iframe.src = pagePath;
        iframe.width = "100%";
        iframe.height = "500px";
        iframe.frameBorder = "0";
        
        iframeContainer.innerHTML = "";
        iframeContainer.appendChild(iframe);
    });
});

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                scrollToTarget(target);
            }
        });
    });

    // Function to scroll to the target with smooth animation
    function scrollToTarget(target) {
        const startPosition = window.pageYOffset;
        const targetPosition = target.getBoundingClientRect().top + startPosition;
        const distance = targetPosition - startPosition;
        const startTime = performance.now();
        const duration = 1000; // Adjust the duration as desired (in milliseconds)

        function animate(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easeProgress = easeInOutCubic(progress);
            window.scrollTo(0, startPosition + distance * easeProgress);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    // Easing function for smooth animation
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    const animElements = document.querySelectorAll('.anim-element');

    function checkScroll() {
        animElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) { // ajuste o valor conforme necessário
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
        });
    }
    
    window.addEventListener('scroll', checkScroll);