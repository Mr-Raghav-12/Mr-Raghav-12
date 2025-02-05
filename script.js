//created by ai, i am weak in js.
let slideIndex = 1;
showSlides(slideIndex);
document.getElementById("year").textContent = new Date().getFullYear();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show current slide
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const skillElement = document.getElementById("skill");
const skills = ["Python Devloper", "Web Developer", "Data Analyst","Freelancer"];
let skillIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeSkill() {
  let currentSkill = skills[skillIndex];
  
  // Typing and deleting effect
  if (isDeleting) {
    skillElement.textContent = currentSkill.substring(0, charIndex--);
  } else {
    skillElement.textContent = currentSkill.substring(0, charIndex++);
  }

  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentSkill.length + 1) {
    setTimeout(() => {
      isDeleting = true;
    }, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    skillIndex = (skillIndex + 1) % skills.length;
  }

  setTimeout(typeSkill, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeSkill);
