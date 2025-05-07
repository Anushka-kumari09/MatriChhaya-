document.getElementById('appointment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('patientName').value;
    document.getElementById('form-message').textContent = `Thank you, ${name}, your appointment has been booked!`;
    this.reset();
});

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.classList.remove('hide');
    return;
  }

  if (currentScroll > lastScroll) {

    navbar.classList.add('hide');
  } else {
    
    navbar.classList.remove('hide');
  }

  lastScroll = currentScroll;
});

function callNow() {
    window.location.href = "tel:+911234567890";
}

function whatsappNow() {
    window.open("https://wa.me/911234567890", "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });

  let lastScrollTop = 0;
  let scrollDirection = 'down';
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    scrollDirection = (currentScroll > lastScrollTop) ? 'down' : 'up';
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const el = entry.target;
      if (entry.isIntersecting && scrollDirection === 'down' && !el.classList.contains('animated')) {
        el.classList.contains('animate'); 
        el.classList.contains('animated')
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });

  const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  if (i < 0) index = slideImages.length - 1;
  else if (i >= slideImages.length) index = 0;
  else index = i;

  slides.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));


let startX = 0;
slides.addEventListener('touchstart', (e) => startX = e.touches[0].clientX);
slides.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) showSlide(index + 1); 
  if (endX - startX > 50) showSlide(index - 1); 
});