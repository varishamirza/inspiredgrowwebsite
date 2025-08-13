// Placeholder for future interactivity
console.log("Grocery On Wheels landing page loaded.");
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Booking Confirmed! Thank you for choosing Grocery On Wheels.');
  });
  // Optional: Add subtle animation on scroll (basic example)
window.addEventListener("scroll", () => {
    const images = document.querySelectorAll("img");
  
    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        img.classList.add("animate__fadeInUp");
      }
    });
  });
  