document.addEventListener("DOMContentLoaded", function() {
    // Fetch a random Bible verse from the Bible API
    fetch('https://bible-api.com/?random=verse')
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            console.log(data);  // Log the data to inspect the structure

            // Assuming the API response contains the 'text' and 'reference' fields
            const verseText = data.text;
            const verseReference = data.reference;

            // Display the verse in the 'bible-verse' element
            const verseElement = document.getElementById('bible-verse');
            verseElement.innerHTML = `<strong>${verseText}</strong> - ${verseReference}`;
        })
        .catch(error => {
            // Handle errors (e.g., API failure)
            const verseElement = document.getElementById('bible-verse');
            verseElement.innerHTML = "Sorry, we couldn't fetch a verse at this time.";
            console.error('Error fetching Bible verse:', error);
        });
});




document.getElementById("donation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const loadingContainer = document.getElementById("loading");
    const thankYouMessage = document.getElementById("thank-you-message");

    // Show loading indicator while processing the donation
    loadingContainer.style.display = "flex";
    thankYouMessage.style.display = "none"; // Hide thank you message

    // Simulate donation processing (you can replace this with actual API calls)
    setTimeout(function() {
        loadingContainer.style.display = "none"; // Hide loading spinner
        thankYouMessage.style.display = "block"; // Show thank you message
    }, 3000); // Simulating a 3-second processing time
});


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}




