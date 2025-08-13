// Smooth scrolling to sections

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.timeline-item');
  
    const reveal = () => {
      const triggerBottom = window.innerHeight * 0.85;
  
      items.forEach(item => {
        const boxTop = item.getBoundingClientRect().top;
  
        if (boxTop < triggerBottom) {
          item.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', reveal);
    reveal(); // initial call
  });
  function toggleForm(formId) {
    const form = document.getElementById(formId);
    form.style.display = form.style.display === "flex" ? "none" : "flex";
  }
  // Testimonial slider
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
  testimonials[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % testimonials.length;
  testimonials[currentIndex].classList.add('active');
}

setInterval(showNextTestimonial, 4000); // change every 4 seconds

// Optional: Add scroll animation or interactivity later
document.addEventListener("DOMContentLoaded", () => {
    console.log("Footer loaded with animation");
  });
  document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-section");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("show");
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(aboutSection);
  });