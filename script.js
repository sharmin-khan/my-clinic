// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Desktop Links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("text-primary"));
    link.classList.add("text-primary");
  });
});

// Mobile Links
const mobileLinks = document.querySelectorAll(".mobile-nav-link");
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileLinks.forEach(l => l.classList.remove("text-primary"));
    link.classList.add("text-primary");
    // Mobile menu close after click
    document.getElementById("mobileMenu").classList.add("hidden");
  });
});

// Hero Image Slider

  const slides = document.getElementById('heroSlides');
let index = 0;
const totalSlides = slides.children.length;

setInterval(() => {
  index++;
  if(index >= totalSlides) index = 0; // loop back to first slide
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000); // every 3 seconds
