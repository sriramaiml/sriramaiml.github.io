// jQuery for form submit button on About Us page
$(document).ready(function() {
    // Action for submit button
    $('.submit-btn').click(function() {
        alert("Thank you for reaching out! We will respond to your inquiry soon.");
    });
});

// Jquery for filters
$(document).ready(function() {
    $('#helpSelect').change(function() {
        const selectedOption = $(this).val();
        let dynamicFields = '';

        // Clear previous dynamic fields
        $('#dynamic-fields').empty();

        // Conditionally add fields based on the selected option
        if (selectedOption === 'Product') {
            dynamicFields += `
                <div class="mb-3">
                    <label for="modelType" class="form-label">Model Type</label>
                    <select class="form-select" id="modelType" name="modelType">
                        <option selected>Choose...</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Staircase">Staircase</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="buildingType" class="form-label">Building Type</label>
                    <select class="form-select" id="buildingType" name="buildingType">
                        <option selected>Choose...</option>
                        <option value="New building">New building</option>
                        <option value="Existing Building with Lift">Existing Building with Lift</option>
                        <option value="Existing Building without Lift">Existing Building without Lift</option>
                    </select>
                </div>`;
        } else if (selectedOption === 'Service') {
            dynamicFields += `
                <div class="mb-3">
                    <label for="serviceType" class="form-label">Service Type</label>
                    <select class="form-select" id="serviceType" name="serviceType">
                        <option selected>Choose...</option>
                        <option value="AMC">AMC</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Repair">Repair</option>
                    </select>
                </div>`;
        } else if (selectedOption === 'Career') {
            dynamicFields += `
                <div class="mb-3">
                    <label for="jobCode" class="form-label">Job Code</label>
                    <select class="form-select" id="jobCode" name="jobCode">
                        <option selected>Choose...</option>
                        <option value="E001">E001</option>
                        <option value="S001">S001</option>
                        <option value="V001">V001</option>
                    </select>
                </div>`;
        }

        // Append the generated dynamic fields to the form
        $('#dynamic-fields').append(dynamicFields);
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