const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const memoryBtn = document.getElementById("memoryBtn");

/* OPEN LOVE LETTER */

openBtn.addEventListener("click", async () => {

    // Play background music
    try {
        await music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
    } catch (error) {
        musicBtn.innerHTML = "🎵 Play Music";
    }

    // Pink hearts and sparkles falling
    const icons = ["💗", "💕", "💖", "♡", "✨", "🌸"];

    for (let i = 0; i < 80; i++) {

        const item = document.createElement("div");

        item.innerHTML =
            icons[Math.floor(Math.random() * icons.length)];

        item.classList.add("falling");

        item.style.left = Math.random() * 100 + "vw";

        item.style.fontSize =
            (Math.random() * 18 + 16) + "px";

        item.style.animationDuration =
            (Math.random() * 3 + 3) + "s";

        item.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 7000);
    }

    // Opening transition
    opening.style.opacity = "0";
    opening.style.transition = "opacity 1s ease";

    setTimeout(() => {

        opening.style.display = "none";
        mainContent.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1000);

});

/* MEMORY BUTTON */

memoryBtn.addEventListener("click", () => {

    document.getElementById("memories").scrollIntoView({
        behavior: "smooth"
    });

});

/* MUSIC BUTTON */

musicBtn.addEventListener("click", async () => {

    if (music.paused) {

        try {
            await music.play();
            musicBtn.innerHTML = "⏸ Pause Music";
        } catch (error) {
            musicBtn.innerHTML = "🎵 Play Music";
        }

    } else {

        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";

    }

});

/* PHOTO SLIDER */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let sliderInterval;

function showSlide(index) {

    if (!slides.length) return;

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");

    if (dots[index]) {
        dots[index].classList.add("active");
    }

}

function nextSlide() {

    currentSlide = (currentSlide + 1) % slides.length;

    showSlide(currentSlide);

}

// Auto change photos every 4 seconds
if (slides.length > 1) {

    sliderInterval = setInterval(nextSlide, 4000);

}

// Click dots to select a photo
dots.forEach((dot, index) => {

    dot.style.cursor = "pointer";

    dot.addEventListener("click", () => {

        currentSlide = index;
        showSlide(currentSlide);

    });

});

/* FLOATING HEARTS */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    const icons = ["💗", "💕", "♡", "🌸", "💖"];

    heart.innerHTML =
        icons[Math.floor(Math.random() * icons.length)];

    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (Math.random() * 16 + 14) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 8) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 14000);

}

// Create floating hearts periodically
setInterval(createHeart, 900);

/* INITIAL STATE */

showSlide(0);
