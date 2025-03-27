// Form Validation for Registration
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form fields
            const fullName = document.getElementById('full-name').value.trim();
            const classSelection = document.getElementById('class').value;
            const school = document.getElementById('school').value.trim();
            const category = document.querySelector('input[name="category"]:checked');
            const email = document.getElementById('email').value.trim();
            
            // Simple validation
            if (!fullName || !classSelection || !school || !category || !email) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Form is valid - process submission
            processRegistration({
                fullName,
                class: classSelection,
                school,
                category: category.value,
                email
            });
        });
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function processRegistration(formData) {
    // In a real application, this would send data to a server
    console.log('Registration submitted:', formData);
    
    // Show success message
    alert(`Thank you for registering, ${formData.fullName}!\nWe've sent a confirmation to ${formData.email}`);
    
    // Reset form
    document.getElementById('registration-form').reset();
    
    // Redirect to homepage after 3 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 3000);
}