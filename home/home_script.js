// // Example of a jQuery task (can be customized or expanded as needed)

// $(document).ready(function() {
//     // Example task: Log a message when a product card button is clicked
//     $('.product-card button').click(function() {
//         window.location.href = "aboutus/aboutus.html";
//     });
// });

// Solution for issue 1: Collapse navbar on outside click
document.addEventListener('click', function (event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarCollapse.classList.contains('show') && 
        !navbarToggler.contains(event.target) && 
        !navbarCollapse.contains(event.target)) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
    }
});

// Ensure active page is highlighted
document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
        if (link.getAttribute('href').includes(currentPath)) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
});


// Entry Animation
document.addEventListener('DOMContentLoaded', () => {
    const leftDoor = document.querySelector('.left');
    const rightDoor = document.querySelector('.right');
    const liftDoors = document.querySelector('.lift-doors');
    const content = document.querySelector('.content');
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        // Hide the lift doors and show content immediately on mobile
        if (liftDoors) {
            liftDoors.style.display = 'none';
        }
        if (content) {
            content.style.display = 'block';
        }
    } else {
        // Animate the doors opening on non-mobile devices
        if (leftDoor && rightDoor) {
            leftDoor.style.transform = 'translateX(-100%)';
            rightDoor.style.transform = 'translateX(100%)';

            // Show the content after the animation
            setTimeout(() => {
                if (content) {
                    content.style.display = 'block';
                }
            }, 2000); // Match the duration of the animation
        } else {
            console.error("Doors not found");
        }
    }
});



// Contact Card
document.addEventListener("DOMContentLoaded", function () {
    const contactCard = document.querySelector(".contact-card");
    contactCard.addEventListener("mouseenter", () => {
        contactCard.style.opacity = "1";
    });
    contactCard.addEventListener("mouseleave", () => {
        contactCard.style.opacity = "0.6";
    });
});

