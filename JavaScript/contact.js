function sendEmail() {
    const recipient = "swim360.project@gmail.com";
    const subject = encodeURIComponent("Inquiry");

    // Construct the mailto link
    const mailtoLink = `mailto:${recipient}?subject=${subject}`;

    // Open the mail client with the dynamically created mailto link
    window.location.href = mailtoLink;
}