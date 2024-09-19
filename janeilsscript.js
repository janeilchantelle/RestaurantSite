let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  

    setTimeout(showSlides, 4000); 
}
function submitFeedback(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Display feedback message
    let feedbackMessage= document.getElementById("feedback-message");
    feedbackMessage.textContent = `Thank you, ${name}! Your feedback has been submitted. We will be in touch with you within 24-48 hours.`;

    // Optionally, you can clear the form after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

