document.getElementById("donation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const loadingContainer = document.getElementById("loading");
    const thankYouMessage = document.getElementById("thank-you-message");

    loadingContainer.style.display = "flex";
    thankYouMessage.style.display = "none";

    setTimeout(function() {
        loadingContainer.style.display = "none"; 
        thankYouMessage.style.display = "block"; 
    }, 3000); 
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