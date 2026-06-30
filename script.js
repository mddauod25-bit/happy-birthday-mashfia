// ======================================
// GALAXY BIRTHDAY WEBSITE
// CLEAN VERSION
// Part 1 / 6
// ======================================

"use strict";

// ======================================
// ELEMENTS
// ======================================

const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");
const giftButton = document.getElementById("giftButton");
const card = document.getElementById("card");
const bgMusic = document.getElementById("bgMusic");
const loader = document.getElementById("loader");
const galaxy = document.querySelector(".galaxy");
const moon = document.querySelector(".moon");

// ======================================
// PREMIUM LOADER
// ======================================

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hideLoader");

    }, 2200);

});

// ======================================
// TWINKLING STARS
// ======================================

for (let i = 0; i < 150; i++) {

    const star = document.createElement("div");

    const size = Math.random() * 3 + 1;

    star.style.position = "absolute";
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.background = "#fff";
    star.style.borderRadius = "50%";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.opacity = Math.random();

    star.style.animation =
        `twinkle ${2 + Math.random() * 4}s infinite alternate`;

    stars.appendChild(star);

}

// ======================================
// STAR ANIMATION
// ======================================

const style = document.createElement("style");

style.innerHTML = `

@keyframes twinkle{

0%{
opacity:.2;
transform:scale(.7);
}

100%{
opacity:1;
transform:scale(1.6);
}

}

`;

document.head.appendChild(style);

// ======================================
// GIFT BUTTON
// ======================================

giftButton.addEventListener("click", () => {

    card.scrollIntoView({

        behavior: "smooth"

    });

});

// ======================================
// AUTO MUSIC
// ======================================

document.addEventListener("click", () => {

    bgMusic.play().catch(() => {});

}, { once: true });

// ======================================
// END OF PART 1
// ======================================
// ======================================
// CLEAN VERSION
// Part 2 / 6
// Floating Hearts + Sparkles +
// Moon Glow + Shooting Stars + Meteors
// ======================================

// 💜 Floating Hearts

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "💜";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-40px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.pointerEvents = "none";
    heart.style.transition = "all 6s linear";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = "translateY(-110vh)";
        heart.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        heart.remove();

    }, 6200);

}, 1200);


// ======================================
// Sparkles
// ======================================

setInterval(() => {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.fontSize = (12 + Math.random() * 18) + "px";

    sparkle.style.pointerEvents = "none";
    sparkle.style.transition = "all 2s linear";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.style.opacity = "0";
        sparkle.style.transform = "scale(2)";

    }, 100);

    setTimeout(() => {

        sparkle.remove();

    }, 2200);

}, 1500);


// ======================================
// Moon Glow
// ======================================

if (moon) {

    setInterval(() => {

        moon.animate([

            {
                boxShadow: "0 0 30px white"
            },

            {
                boxShadow: "0 0 90px white"
            },

            {
                boxShadow: "0 0 30px white"
            }

        ], {

            duration: 3000

        });

    }, 3000);

}


// ======================================
// Shooting Stars
// ======================================

const shootingContainer =
document.getElementById("shooting-stars");

function createShootingStar() {

    if (!shootingContainer) return;

    const star = document.createElement("div");

    star.style.position = "absolute";
    star.style.width = "3px";
    star.style.height = "3px";
    star.style.background = "#fff";
    star.style.borderRadius = "50%";
    star.style.boxShadow = "0 0 20px white";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 35 + "vh";

    star.style.transition = "all 1.8s linear";

    shootingContainer.appendChild(star);

    setTimeout(() => {

        star.style.transform =
        "translate(-350px,350px)";

        star.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        star.remove();

    }, 2000);

}

setInterval(createShootingStar, 1800);


// ======================================
// Premium Meteors
// ======================================

function createMeteor() {

    if (!shootingContainer) return;

    const meteor = document.createElement("div");

    meteor.className = "meteor";

    meteor.style.left =
    Math.random() * window.innerWidth + "px";

    meteor.style.top =
    Math.random() * 250 + "px";

    shootingContainer.appendChild(meteor);

    setTimeout(() => {

        meteor.remove();

    }, 2000);

}

setInterval(createMeteor, 1300);


// ======================================
// End Of Part 2
// ======================================
// ======================================
// CLEAN VERSION
// Part 3 / 6
// Balloons + Galaxy Parallax +
// Photo Glow + Gift Hover + Confetti
// ======================================

// 🎈 Floating Balloons

const balloonContainer = document.getElementById("balloons");

const balloonColors = [
    "#ff4fd8",
    "#8a2be2",
    "#00bfff",
    "#ffd700",
    "#ff6b6b",
    "#ffffff"
];

function createBalloon() {

    if (!balloonContainer) return;

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.background =
    balloonColors[Math.floor(Math.random() * balloonColors.length)];

    balloon.style.animationDuration =
    (8 + Math.random() * 5) + "s";

    balloon.style.transform =
    `scale(${0.8 + Math.random() * 0.6})`;

    balloonContainer.appendChild(balloon);

    setTimeout(() => {

        balloon.remove();

    }, 14000);

}

setInterval(createBalloon, 1200);


// ======================================
// Galaxy Mouse Parallax
// ======================================


document.addEventListener("mousemove", (e) => {

    if (!galaxy) return;

    const x =
    (e.clientX / window.innerWidth - 0.5) * 20;

    const y =
    (e.clientY / window.innerHeight - 0.5) * 20;

    galaxy.style.transform =
    `translate(${x}px, ${y}px) scale(1.08)`;

});


// ======================================
// Premium Photo Glow
// ======================================

const photo = document.querySelector(".photo-frame");

if (photo) {

    photo.addEventListener("mouseenter", () => {

        photo.style.boxShadow =
        "0 0 80px #ff66ff,0 0 120px #00bfff";

    });

    photo.addEventListener("mouseleave", () => {

        photo.style.boxShadow =
        "0 0 35px #b84dff";

    });

}


// ======================================
// Gift Button Hover
// ======================================

giftButton.addEventListener("mouseenter", () => {

    giftButton.style.transform = "scale(1.12)";

});

giftButton.addEventListener("mouseleave", () => {

    giftButton.style.transform = "scale(1)";

});


// ======================================
// Premium Confetti
// ======================================

const confetti =
document.getElementById("confetti");

function launchConfetti() {

    if (!confetti) return;

    const colors = [
        "#ff4fd8",
        "#8a2be2",
        "#00bfff",
        "#ffd700",
        "#ffffff",
        "#ff6b6b"
    ];

    for (let i = 0; i < 180; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti-piece";

        piece.style.left =
        Math.random() * 100 + "vw";

        piece.style.background =
        colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay =
        Math.random() * 0.8 + "s";

        piece.style.transform =
        `rotate(${Math.random() * 360}deg)`;

        confetti.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 4500);

    }

}

giftButton.addEventListener("click", launchConfetti);


// ======================================
// End Of Part 3
// ======================================
// ======================================
// CLEAN VERSION
// Part 4 / 6
// Premium Fireworks Engine
// ======================================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let particles = [];

class Particle{

    constructor(x,y,color){

        this.x = x;
        this.y = y;

        this.color = color;

        this.radius = Math.random()*3 + 2;

        this.speedX = (Math.random()-0.5)*10;
        this.speedY = (Math.random()-0.5)*10;

        this.life = 100;

    }

    update(){

        this.x += this.speedX;
        this.y += this.speedY;

        this.speedY += 0.05;

        this.life--;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI*2
        );

        ctx.fillStyle = this.color;

        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;

        ctx.fill();

    }

}


// ======================================
// Explosion Function
// ======================================

function explode(x,y){

    const colors=[

        "#ff4fd8",
        "#8a2be2",
        "#00bfff",
        "#ffd700",
        "#ffffff",
        "#ff6b6b"

    ];

    for(let i=0;i<80;i++){

        particles.push(

            new Particle(

                x,
                y,

                colors[
                    Math.floor(
                        Math.random()*colors.length
                    )
                ]

            )

        );

    }

}


// ======================================
// Animation Loop
// ======================================

function animateFireworks(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    for(let i=particles.length-1;i>=0;i--){

        particles[i].update();

        particles[i].draw();

        if(particles[i].life<=0){

            particles.splice(i,1);

        }

    }

    requestAnimationFrame(
        animateFireworks
    );

}

animateFireworks();


// ======================================
// Auto Fireworks
// ======================================

setInterval(()=>{

    explode(

        Math.random()*canvas.width,

        Math.random()*canvas.height*0.6

    );

},3000);


// ======================================
// Gift Button Fireworks
// ======================================

giftButton.addEventListener("click",()=>{

    for(let i=0;i<10;i++){

        setTimeout(()=>{

            explode(

                Math.random()*canvas.width,

                100+
                Math.random()*
                canvas.height*0.5

            );

        },i*250);

    }

});


// ======================================
// Mouse Click Fireworks
// ======================================

canvas.addEventListener("click",(e)=>{

    explode(

        e.clientX,

        e.clientY

    );

});


// ======================================
// End Of Part 4
// ======================================
// ======================================
// CLEAN VERSION
// Part 5 / 6
// Intro Story + Gift Surprise
// ======================================

// Intro Elements
const intro = document.getElementById("intro");
const title = document.getElementById("introTitle");
const text = document.getElementById("introText");
const nextBtn = document.getElementById("nextIntro");

const introMessages = [

{
title:"💜 Hey Mashfia...",
text:"Daud made something special just for you..."
},

{
title:"🐼 A Little Surprise",
text:"Every smile of yours makes someone's world brighter. ✨"
},

{
title:"🌙 Tonight...",
text:"The moon, the stars and the whole galaxy are celebrating your birthday because it's your special day. 💜"
},

{
title:"🎂 Happy Birthday",
text:"Now it's time to open your birthday surprise..."
}

];

let currentPage = 0;

// Show Intro
function showIntro(index){

    title.innerHTML = introMessages[index].title;
    text.innerHTML = introMessages[index].text;

}

showIntro(0);

// Next Button
nextBtn.addEventListener("click",()=>{

    currentPage++;

    if(currentPage < introMessages.length){

        showIntro(currentPage);

    }else{

        intro.style.opacity="0";

        setTimeout(()=>{

            intro.style.display="none";

            bgMusic.play().catch(()=>{});

        },600);

    }

});


// ======================================
// Gift Surprise
// ======================================

giftButton.addEventListener("click",()=>{

    document.body.classList.add("surprise-mode");

    card.classList.add("show");

    // Heart Rain

    for(let i=0;i<60;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.className="rain-heart";

            heart.innerHTML="💜";

            heart.style.left=Math.random()*100+"vw";

            heart.style.fontSize=
            (18+Math.random()*25)+"px";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },5000);

        },i*80);

    }

});


// ======================================
// End Of Part 5
// ======================================
// ======================================
// CLEAN VERSION
// Part 6 / 6
// Final Popup + Gallery Lightbox
// ======================================

// ======================================
// Final Popup
// ======================================

const popup = document.getElementById("finalPopup");
const closePopup = document.getElementById("closePopup");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
    document.body.scrollHeight - window.innerHeight;

    if(scrollTop > pageHeight - 150){

        popup.classList.add("show");

    }

});

closePopup.addEventListener("click", () => {

    popup.classList.remove("show");

});


// ======================================
// Gallery Lightbox
// ======================================

const galleryImages =
document.querySelectorAll(".gallery-img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

const closeLightbox =
document.getElementById("closeLightbox");

const prevPhoto =
document.getElementById("prevPhoto");

const nextPhoto =
document.getElementById("nextPhoto");

let currentImage = 0;


// Open Image

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentImage = index;

        lightbox.classList.add("show");

        lightboxImg.src =
        galleryImages[currentImage].src;

    });

});


// Close

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});


// Previous

prevPhoto.addEventListener("click",()=>{

    currentImage--;

    if(currentImage < 0){

        currentImage =
        galleryImages.length - 1;

    }

    lightboxImg.src =
    galleryImages[currentImage].src;

});


// Next

nextPhoto.addEventListener("click",()=>{

    currentImage++;

    if(currentImage >= galleryImages.length){

        currentImage = 0;

    }

    lightboxImg.src =
    galleryImages[currentImage].src;

});


// Close when background clicked

lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        lightbox.classList.remove("show");

    }

});


// Keyboard Controls

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("show")) return;

    if(e.key === "ArrowRight"){

        nextPhoto.click();

    }

    if(e.key === "ArrowLeft"){

        prevPhoto.click();

    }

    if(e.key === "Escape"){

        closeLightbox.click();

    }

});


// ======================================
// Finished
// Happy Birthday Mashfia 💜
// Made by Daud ❤️
// ======================================
