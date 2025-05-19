
function sendEmail() {
    const recipient = "swim360.project@gmail.com";
    const subject = encodeURIComponent("Inquiry");

    // Construct the mailto link
    const mailtoLink = `mailto:${recipient}?subject=${subject}`;

    // Open the mail client with the dynamically created mailto link
    window.location.href = mailtoLink;
}

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

/*
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch('https://formspree.io/f/myzwngkd', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.textContent = 'Thanks! Your message has been sent.';
            form.reset();
        } else {
            status.textContent = 'Oops! Something went wrong.';
        }
    } catch (error) {
        status.textContent = 'There was a problem submitting the form.';
    }
});
*/