// Navbar Code for transparent background

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            // Make navigation solid
            nav.style.background = 'rgba(26, 11, 46, 0.95)';
        } else {
            // Make navigation semi-transparent
            nav.style.background = 'rgba(26, 11, 46, 0.10)';
        }
    }
});

// Find the registration form
const registrationForm = document.getElementById('registrationForm');

if (registrationForm) {
    
    // Listen for form submission
    registrationForm.addEventListener('submit', function(e) {
        
        // Stop page from reloading
        e.preventDefault();
        
        // Get name from form
        const name = document.getElementById('fullname').value;
        // Get email from form
        const email = document.getElementById('email').value;
        // Get phone number from form
         const phone = document.getElementById('phone').value;
        // Find success message
        const successMsg = document.getElementById('successMessage');
        
        // If success message exists
        if (successMsg) {
            // Show success message
            successMsg.classList.add('show');
            // Now hide the form and display the message
            this.style.display = 'none';
        }
        // Print to console
        console.log('Registration submitted:', name, email);
    });
}

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    // Toggle menu on icon click
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Change icon between hamburger and X
        if (navLinks.classList.contains('active')) {
            this.classList.remove('fa-bars');
            this.classList.add('fa-xmark');
        } else {
            this.classList.remove('fa-xmark');
            this.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking any link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        });
    });

}


