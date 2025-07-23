console.log("Selamat datang di portofolio saya!");


function showText(id) {
  document.querySelectorAll('.photo-text').forEach(el => {
    el.style.opacity = 0;
  });

  const target = document.getElementById(id);
  target.style.opacity = 1;
}


let index = 0;
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlide();
});

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});

function updateSlide() {
  track.style.transform = `translateX(-${index * 300}px)`;
}
