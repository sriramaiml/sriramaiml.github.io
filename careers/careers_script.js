// jQuery for button actions on Careers page
$(document).ready(function() {
    // Action for apply buttons
    $('.apply-btn').click(function() {
        alert("Your application for this position has been received!");
    });

    // Action for sitemap query buttons
    $('.query-btn').click(function() {
        alert("Query submitted! Our team will respond shortly.");
    });
});

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

