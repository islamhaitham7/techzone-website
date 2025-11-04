let toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})


const track = document.querySelector('.card-track');
const cards = document.querySelectorAll('.card');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;
const cardsPerView = 3;

function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 30;
    const move = index * cardWidth;
    track.style.transform = `translateX(-${move}px)`;
}

nextBtn.addEventListener('click', () => {
    if (index < cards.length - cardsPerView) {
        index++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateSlider();
    }
});


window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});



const button = document.querySelector(".btn");
const aboutSection = document.querySelector(".contact-section");

button.addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
});
