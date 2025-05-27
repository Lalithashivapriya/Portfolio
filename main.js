// Toggle Icon Navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark"); // Toggle menu icon
    navbar.classList.toggle("active"); // Show/hide navbar
};

// Scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active"); // Remove active class from all links
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Add active class to current section link
            });
        }
    });

    // Sticky navbar effect
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // Remove toggle icon and close navbar on scroll
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
};

// Scroll Reveal Animations
ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js Animation for dynamic text
const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Database Developer", "Data Analyst"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// Show 'Read More' Section
const readMoreBtn = document.querySelector('.read-more-btn');
const readMoreContainer = document.getElementById('read-more-container');
const closeBtn = document.querySelector('.close-btn');

readMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    readMoreContainer.style.display = 'block'; // Show read more section
});

// Hide 'Read More' Section
closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    readMoreContainer.style.display = 'none'; // Hide read more section
});

// Show specific 'Read More' Section based on the clicked service
const readMoreBtns = document.querySelectorAll('.read-more-btn');
const closeBtns = document.querySelectorAll('.close-btn');
const readMoreContainers = document.querySelectorAll('.read-more-container');

readMoreBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const serviceId = this.getAttribute('data-service');
        document.getElementById(serviceId).style.display = 'block'; // Show specific service section
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentElement.parentElement.style.display = 'none'; // Hide service section
    });
});

// Project Details (Dynamic Content Display)
const projects = {
    python: [
        {
            title: "Snake Game (Python)",
            description: "A classic snake game built using Python with the Pygame library.",
            github: "https://github.com/shivapriya032005/Snake_game"
        },
        {
            title: "Dino Game (Python)",
            description: "A Python remake of the Chrome Dino game using Pygame.",
            github: "https://github.com/shivapriya032005/Dino.py"
        },
        {
            title: "Library Management System (Python, HTML, CSS, SQLite)",
            description: "A complete library management system powered by SQLite.",
            github: "https://github.com/shivapriya032005/LMS"
        },
        {
            title: "Stego (Python, HTML, CSS, MySQL)",
            description: "A project to encrypt and decrypt messages into images while providing security.",
            github: "https://github.com/shivapriya032005/Stego"
        }
    ],
    java: [
        {
            title: "Flappy Bird (Java)",
            description: "A Flappy Bird clone built using Java with basic physics and scoring.",
            github: "https://github.com/shivapriya032005/Flappy-bird"
        },
        {
            title: "Tic-Tac-Toe (Java)",
            description: "A simple two-player Tic-Tac-Toe game developed using Java Swing.",
            github: "https://github.com/shivapriya032005/Tic-Tac-Toe"
        },
        {
            title: "Student Grade Tracker (Java)",
            description: "A student grade tracking application with GPA/CGPA calculations.",
            github: "https://github.com/shivapriya032005/StudentGraddeTracker"
        },
        {
            title: "Simple Calculator (Java)",
            description: "A basic calculator built with Java supporting arithmetic operations.",
            github: "https://github.com/shivapriya032005/Simple-Calculator"
        }
    ],
    web: [
        {
            title: "Currency Converter (HTML, CSS, JS)",
            description: "A simple currency converter using HTML, CSS, and JavaScript.",
            github: "https://github.com/shivapriya032005/Currency_Converter"
        },
        {
            title: "Portfolio (HTML, CSS, JS)",
            description: "A responsive portfolio showcasing my skills and projects.",
            github: "https://github.com/shivapriya032005/Portfolio"
        },
        {
            title: "Library Management System (Python, HTML, CSS, SQLite)",
            description: "A complete library management system powered by SQLite.",
            github: "https://github.com/shivapriya032005/LMS"
        }
    ]
};

// Function to display selected project details
function showProjects(category) {
    const projectDetails = document.getElementById('project-details');
    projectDetails.innerHTML = ''; // Clear previous content
    const selectedProjects = projects[category];

    selectedProjects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-detail'); // Optional styling class

        projectElement.innerHTML = `
            <div class="project-header">
                <h4>${project.title}</h4>
                <button class="close-btn">X</button> <!-- Close button -->
            </div>
            <p>${project.description}</p>
            <a href="${project.github}" target="_blank">View on GitHub</a>
        `;

        // Event listener for close button
        const closeBtn = projectElement.querySelector('.close-btn');
        closeBtn.addEventListener('click', function() {
            projectDetails.style.display = 'none'; // Hide project details
        });

        projectDetails.appendChild(projectElement);
    });

    projectDetails.style.display = 'block'; // Show project details
}

// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none'; // Show selected slide
    });
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Loop to last slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Loop to first slide
    }
    showSlide(currentSlide);
}

// Initialize slider by showing the first slide
showSlide(currentSlide);
