const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

const videos = document.querySelectorAll('.hero-slider .slides video');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(i) {
    videos.forEach(v => {
        v.classList.remove('active');
        v.pause();
    });

    index = (i + videos.length) % videos.length;

    videos[index].classList.add('active');
    videos[index].currentTime = 0;
    videos[index].play();
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);

showSlide(0);

document.querySelectorAll(".hero-slider video").forEach(video => {
    video.addEventListener("loadedmetadata", () => {
        if (video.videoHeight > video.videoWidth) {
            video.classList.add("vertical");
        } else {
            video.classList.add("horizontal");
        }
    });
});

const slider = document.getElementById("slider");

    const cards = Array.from(slider.children);
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        slider.appendChild(clone);
    });
