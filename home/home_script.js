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
