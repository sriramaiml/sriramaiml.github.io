// jQuery for button actions on Brochures page
$(document).ready(function() {
    // Action for download buttons
    $('.download-btn').click(function() {
        const file = $(this).data('file');
        window.location.href = file;
    });

    // Action for sitemap query buttons
    $('.query-btn').click(function() {
        alert("Query submitted! Our team will respond shortly.");
    });
});
