// Add interactivity to the portfolio

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending the data
    console.log('Form submitted!', { name, email, message });

    // Provide feedback to the user
    alert('Thank you for reaching out! I will get back to you soon.');

    // Reset the form
    e.target.reset();
});
