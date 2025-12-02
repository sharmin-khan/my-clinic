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