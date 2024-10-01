// Toggle Icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}

//scroll section active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links =>{
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

//Sticky navbar
let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);

//remove toggle icon and navbar
menuIcon.classList.remove("fa-xmark");
navbar.classList.remove("active");
};

//scroll reveal
ScrollReveal({
    distance: "80px",
    duration: 2000,
    Delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

//Typed js
const typed = new Typed(".multiple-text",{
    strings: ["Frontend Developer", "Database Developer", "Game Developer"],
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
    readMoreContainer.style.display = 'block';
});

// Hide 'Read More' Section
closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    readMoreContainer.style.display = 'none';
});


// Show specific 'Read More' Section based on the clicked service
const readMoreBtns = document.querySelectorAll('.read-more-btn');
const closeBtns = document.querySelectorAll('.close-btn');
const readMoreContainers = document.querySelectorAll('.read-more-container');

// Function to show the selected service details
readMoreBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const serviceId = this.getAttribute('data-service');
        document.getElementById(serviceId).style.display = 'block';
    });
});

// Function to hide the 'Read More' container when 'Close' is clicked
closeBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentElement.parentElement.style.display = 'none';
    });
});

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
            description: "A simple currency converter using HTML, CSS, and JavaScript.",
            github: "https://github.com/shivapriya032005/Portfolio"
        },
        {
            title: "Library Management System (Python, HTML, CSS, SQLite)",
            description: "A complete library management system powered by SQLite.",
            github: "https://github.com/shivapriya032005/LMS"
        }
    ]
};

function showProjects(category) {
    const projectDetails = document.getElementById('project-details');
    projectDetails.innerHTML = ''; // Clear any existing content
    const selectedProjects = projects[category];

    selectedProjects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <a href="${project.github}" target="_blank">View on GitHub</a>
        `;
        projectDetails.appendChild(projectElement);
    });

    projectDetails.style.display = 'block'; // Show the details section
}





