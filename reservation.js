let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  
  // Reset to first slide if at the end
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  
  // Change image every 3 seconds
  setTimeout(showSlides, 3000); 
}



document.addEventListener("DOMContentLoaded", function() {
    // Find all room galleries on the page
    const slideshowContainers = document.querySelectorAll('.room-slideshow-container');

    slideshowContainers.forEach((container) => {
        let slideIndex = 0;
        const slides = container.getElementsByClassName("roomSlides");

        function showSlides() {
            // Hide all slides in THIS container
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }    
            
            // Show the current slide
            if (slides[slideIndex - 1]) {
                slides[slideIndex - 1].style.display = "block";  
            }
            
            // Change image every 3 seconds
            setTimeout(showSlides, 3000); 
        }

        // Start the loop for this specific container
        if (slides.length > 0) {
            showSlides();
        }
    });
});