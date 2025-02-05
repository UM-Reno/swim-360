function toggleDocumentEmbed() {
    // Get the element with the class "documentEmbed"
    const documentEmbed = document.querySelector('.documentEmbed');

    // Toggle the display between 'none' and 'block'
    if (documentEmbed.style.display === 'none') {
        documentEmbed.style.display = 'block';
    }
    else {
        documentEmbed.style.display = 'none';
    }
}

function highlightPaper(idToHighlight) {
    // Highlight the paragraph with id "1"
    const elementToHighlight = document.getElementById(idToHighlight);
    elementToHighlight.classList.add("highlight");

    // Add event listener to remove highlight when hovered over
    elementToHighlight.addEventListener('mouseenter', function () {
        elementToHighlight.classList.remove("highlight");
    });
}

window.onload = function () {
    // Check if the URL contains the query parameter "openSource"
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('openSource')) {
        var urlParam = urlParams.get('openSource')

        switch (urlParam) {
            case '0':
                toggleDocumentEmbed(); // Call the function if the condition is met
                break;

            default:
                try {
                    highlightPaper(urlParam); // Try to call highlightPaper
                } catch (error) {
                    console.log("Invalid Paper ID Sent.");
                }
                break;
        }
    }
};
