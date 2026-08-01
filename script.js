// ======================================
// Typing Effect
// ======================================

const typing = document.getElementById("typing");

if (typing) {

    const words = [
        "BSIT Student",
        "Frontend Developer",
        "UI Enthusiast",
        "Future Software Engineer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!isDeleting) {

            typing.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {

                isDeleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typing.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {

                isDeleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeEffect, isDeleting ? 70 : 120);

    }

    typeEffect();

}



// ======================================
// Dark Mode
// ======================================

const themeBtn = document.getElementById("theme");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const icon = themeBtn.querySelector("i");

        if (icon) {

            if (document.body.classList.contains("dark-mode")) {

                icon.classList.replace("fa-moon", "fa-sun");

            } else {

                icon.classList.replace("fa-sun", "fa-moon");

            }

        }

    });

}



// ======================================
// Active Navbar
// ======================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

function activeMenu() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activeMenu);

activeMenu();



// ======================================
// Smooth Scroll
// ======================================

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
// ======================================
// Scroll Animations
// ======================================

const timelineItems = document.querySelectorAll(".timeline-item");
const achievementCards = document.querySelectorAll(".achievement-card");
const certificateCards = document.querySelectorAll(".certificate-card");

function revealElements(elements) {

    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {

            element.classList.add("show");

        }

    });

}



// ======================================
// Skills Progress Animation
// ======================================

const skillSection = document.querySelector(".skills");

const progressBars = document.querySelectorAll(".progress");

const skillValues = {

    html:95,

    css:90,

    js:80,

    responsive:90,

    ui:75,

    git:70

};

let skillsAnimated = false;

function animateSkills() {

    if (!skillSection || skillsAnimated) return;

    const sectionTop = skillSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 120) {

        progressBars.forEach(bar => {

            Object.keys(skillValues).forEach(key => {

                if (bar.classList.contains(key)) {

                    bar.style.width = skillValues[key] + "%";

                }

            });

        });

        skillsAnimated = true;

    }

}



// ======================================
// Main Scroll Animation
// ======================================

function handleScrollAnimations() {

    if (timelineItems.length) {

        revealElements(timelineItems);

    }

    if (achievementCards.length) {

        revealElements(achievementCards);

    }

    if (certificateCards.length) {

        revealElements(certificateCards);

    }

    animateSkills();

}

window.addEventListener("scroll", handleScrollAnimations);

handleScrollAnimations();
// ======================================
// Back To Top + Navbar Effects
// ======================================

const navbar = document.querySelector(".navbar");
const topBtn = document.getElementById("topBtn");

let lastScroll = 0;

function handleNavbarAndTopButton() {

    const currentScroll = window.pageYOffset;

    // ==========================
    // Navbar Background
    // ==========================

    if (navbar) {

        if (currentScroll > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    // ==========================
    // Hide / Show Navbar
    // ==========================

    if (navbar) {

        if (currentScroll > lastScroll && currentScroll > 100) {

            navbar.classList.add("hide");

        }

        else {

            navbar.classList.remove("hide");

        }

    }

    // ==========================
    // Back To Top Button
    // ==========================

    if (topBtn) {

        if (currentScroll > 400) {

            topBtn.style.display = "flex";

        }

        else {

            topBtn.style.display = "none";

        }

    }

    lastScroll = currentScroll;

}

window.addEventListener("scroll", handleNavbarAndTopButton);

handleNavbarAndTopButton();



// ======================================
// Back To Top Click
// ======================================

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



// ======================================
// Preloader
// ======================================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }

});