// ========================================
// GALAXY BIRTHDAY WEBSITE
// Part 1
// Initialization + Stars + Gift Scroll
// ========================================

// Main Elements
const stars = document.getElementById("stars");
const giftButton = document.getElementById("giftButton");
const card = document.getElementById("card");
const bgMusic = document.getElementById("bgMusic");

// =========================
// Create Twinkling Stars
// =========================

for (let i = 0; i < 120; i++) {

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

// =========================
// Twinkle Animation
// =========================

const style = document.createElement("style");

style.innerHTML = `

@keyframes twinkle{

0%{
opacity:.2;
transform:scale(.8);
}

100%{
opacity:1;
transform:scale(1.5);
}

}

`;

document.head.appendChild(style);

// =========================
// Gift Button Scroll
// =========================

giftButton.addEventListener("click", () => {

    card.scrollIntoView({

        behavior: "smooth"

    });

});
// ========================================
// PART 2
// Hearts + Sparkles + Background Music
// ========================================

// Floating Hearts
const hearts = document.getElementById("hearts");

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "💜";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-50px";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    heart.style.pointerEvents = "none";
    heart.style.transition = "all 6s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
            "translateY(-110vh)";

        heart.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        heart.remove();

    }, 6500);

}, 1200);


// ========================================
// Sparkles
// ========================================

setInterval(() => {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.fontSize =
        (12 + Math.random() * 18) + "px";

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


// ========================================
// Background Music
// ========================================

// প্রথম ক্লিকেই গান চালু হবে
document.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.volume = 0.6;

        bgMusic.play().catch(() => {});

    }

}, { once: true });


// Gift Button চাপলেও গান চালু হবে
giftButton.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.play().catch(() => {});

    }

});
// ========================================
// PART 3
// Shooting Stars + Meteors + Moon Glow
// ========================================

// Shooting Stars

const shootingContainer =
document.getElementById("shooting-stars");

function createShootingStar(){

    const star = document.createElement("div");

    star.style.position = "absolute";
    star.style.width = "3px";
    star.style.height = "3px";

    star.style.background = "#fff";
    star.style.borderRadius = "50%";

    star.style.boxShadow =
    "0 0 20px white";

    star.style.left =
    Math.random()*100 + "vw";

    star.style.top =
    Math.random()*40 + "vh";

    star.style.transition =
    "all 1.8s linear";

    shootingContainer.appendChild(star);

    setTimeout(()=>{

        star.style.transform =
        "translate(-350px,350px)";

        star.style.opacity="0";

    },100);

    setTimeout(()=>{

        star.remove();

    },2000);

}

setInterval(createShootingStar,1800);


// ========================================
// Premium Meteors
// ========================================

function createMeteor(){

    const meteor =
    document.createElement("div");

    meteor.className="meteor";

    meteor.style.left =
    Math.random()*window.innerWidth+"px";

    meteor.style.top =
    Math.random()*250+"px";

    meteor.style.animation =
    `meteorMove ${1+Math.random()}s linear forwards`;

    shootingContainer.appendChild(meteor);

    setTimeout(()=>{

        meteor.remove();

    },2000);

}

setInterval(createMeteor,1200);


// ========================================
// Moon Glow Animation
// ========================================

const moon =
document.querySelector(".moon");

if(moon){

setInterval(()=>{

moon.animate([

{
boxShadow:"0 0 35px white"
},

{
boxShadow:"0 0 90px #ffffff"
},

{
boxShadow:"0 0 35px white"
}

],{

duration:3000

});

},3000);

}
// ======================================
// PART 4 - Premium Fireworks Engine
// ======================================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

class Particle {

    constructor(x, y, color) {

        this.x = x;
        this.y = y;

        this.color = color;

        this.radius = Math.random() * 3 + 2;

        this.speedX = (Math.random() - 0.5) * 10;
        this.speedY = (Math.random() - 0.5) * 10;

        this.life = 100;

    }

    update() {

        this.x += this.speedX;
        this.y += this.speedY;

        this.speedY += 0.05;

        this.life--;

    }

    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = this.color;

        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;

        ctx.fill();

    }

}

function explode(x, y) {

    const colors = [

        "#ff4fd8",
        "#8a2be2",
        "#00bfff",
        "#ffd700",
        "#ffffff",
        "#ff6b6b"

    ];

    for (let i = 0; i < 80; i++) {

        particles.push(

            new Particle(

                x,
                y,

                colors[
                    Math.floor(Math.random() * colors.length)
                ]

            )

        );

    }

}

function animateFireworks() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    for (let i = particles.length - 1; i >= 0; i--) {

        particles[i].update();

        particles[i].draw();

        if (particles[i].life <= 0) {

            particles.splice(i, 1);

        }

    }

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

// Auto Fireworks

setInterval(() => {

    explode(

        Math.random() * canvas.width,

        Math.random() * canvas.height * 0.6

    );

}, 3000);

// Gift Button Fireworks

giftButton.addEventListener("click", () => {

    for (let i = 0; i < 10; i++) {

        setTimeout(() => {

            explode(

                Math.random() * canvas.width,

                100 +
                Math.random() * canvas.height * 0.5

            );

        }, i * 250);

    }

});

// Mouse Fireworks

canvas.addEventListener("click", (e) => {

    explode(

        e.clientX,

        e.clientY

    );

});
// ======================================
// PART 5
// Intro Story (Fixed Version)
// ======================================

const intro = document.getElementById("intro");
const title = document.getElementById("introTitle");
const text = document.getElementById("introText");
const nextBtn = document.getElementById("nextIntro");

// Intro Pages

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
text:"The moon, the stars and the whole galaxy are celebrating your birthday because I told them it's your Birthday. 💜"
},

{
title:"🎂 Happy Birthday",
text:"Now it's time to open your special birthday surprise."
}

];

let introPage = 0;

// Typing Effect

function typeWriter(element,message,speed=35){

clearInterval(element.timer);

element.innerHTML="";

let i=0;

element.timer=setInterval(()=>{

element.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(element.timer);

}

},speed);

}

// Show Page

function showIntro(index){

typeWriter(title,introMessages[index].title,40);

setTimeout(()=>{

typeWriter(text,introMessages[index].text,20);

},350);

}

// First Page

showIntro(0);

// Next Button

nextBtn.addEventListener("click",()=>{

introPage++;

if(introPage<introMessages.length){

showIntro(introPage);

}else{

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

// Start Music

if(bgMusic){

bgMusic.volume=.6;

bgMusic.play().catch(()=>{});

}

},600);

}

});
// ======================================
// PART 6
// Confetti + Heart Rain + Balloons +
// Parallax + Photo Glow
// ======================================

// -----------------------------
// Premium Confetti
// -----------------------------

const confetti = document.getElementById("confetti");

function launchConfetti(){

    const colors = [

        "#ff4fd8",
        "#8a2be2",
        "#00bfff",
        "#ffd700",
        "#ffffff",
        "#ff69b4"

    ];

    for(let i=0;i<180;i++){

        const piece=document.createElement("div");

        piece.className="confetti-piece";

        piece.style.left=Math.random()*100+"vw";

        piece.style.background=

        colors[Math.floor(Math.random()*colors.length)];

        piece.style.animationDelay=

        Math.random()*0.8+"s";

        piece.style.transform=

        `rotate(${Math.random()*360}deg)`;

        confetti.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },4500);

    }

}

giftButton.addEventListener("click",launchConfetti);


// -----------------------------
// Heart Rain
// -----------------------------

giftButton.addEventListener("click",()=>{

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


// -----------------------------
// Floating Balloons
// -----------------------------

const balloonContainer=

document.getElementById("balloons");

const balloonColors=[

"#ff4fd8",
"#8a2be2",
"#00bfff",
"#ffd700",
"#ff6b6b",
"#ffffff"

];

function createBalloon(){

    const balloon=document.createElement("div");

    balloon.className="balloon";

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.background=

    balloonColors[

    Math.floor(Math.random()*balloonColors.length)

    ];

    balloon.style.animationDuration=

    (8+Math.random()*5)+"s";

    balloon.style.transform=

    "scale("+(0.8+Math.random()*0.6)+")";

    balloonContainer.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },14000);

}

setInterval(createBalloon,1200);


// -----------------------------
// Galaxy Mouse Parallax
// -----------------------------

const galaxy=document.querySelector(".galaxy");

document.addEventListener("mousemove",(e)=>{

    if(!galaxy) return;

    const x=

    (e.clientX/window.innerWidth-.5)*20;

    const y=

    (e.clientY/window.innerHeight-.5)*20;

    galaxy.style.transform=

    `translate(${x}px,${y}px) scale(1.08)`;

});


// -----------------------------
// Premium Photo Glow
// -----------------------------

const photo=

document.querySelector(".photo-frame");

if(photo){

photo.addEventListener("mouseenter",()=>{

photo.style.boxShadow=

"0 0 80px #ff66ff,0 0 120px #00bfff";

});

photo.addEventListener("mouseleave",()=>{

photo.style.boxShadow=

"0 0 35px #b84dff";

});

}


// -----------------------------
// Gift Button Hover
// -----------------------------

giftButton.addEventListener("mouseenter",()=>{

giftButton.style.transform="scale(1.12)";

});

giftButton.addEventListener("mouseleave",()=>{

giftButton.style.transform="scale(1)";

});
// ======================================
// PART 7 - Gallery Hover Effects
// ======================================

const galleryItems = document.querySelectorAll(".gallery-img");

galleryItems.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.05)";
        img.style.transition = "0.4s";
        img.style.boxShadow =
        "0 0 35px #ff66ff, 0 0 60px #00bfff";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";
        img.style.boxShadow = "none";

    });

});

// ======================================
// Gallery Fade In Animation
// ======================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

},{
    threshold:0.15
});

galleryItems.forEach(img=>{

    img.style.opacity="0";
    img.style.transform="translateY(50px)";
    img.style.transition="all .8s ease";

    observer.observe(img);

});
// ======================================
// PART 8 - INTRO STORY SYSTEM
// ======================================

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
text:"The moon, the stars and the whole galaxy are celebrating your birthday because it's your special day."
},
{
title:"🎂 Happy Birthday",
text:"Now it's time to open your birthday surprise. 💜"
}
];

let currentPage = 0;

function showIntro(index){

title.textContent = introMessages[index].title;
text.textContent = introMessages[index].text;

}

showIntro(0);

nextBtn.addEventListener("click",()=>{

currentPage++;

if(currentPage < introMessages.length){

showIntro(currentPage);

}else{

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

// Start music after intro
bgMusic.play().catch(()=>{});

},600);

}

});
// ======================================
// PART 9 - Premium Gallery Lightbox
// ======================================

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

const closeLightbox = document.getElementById("closeLightbox");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

let currentImage = 0;

// ======================
// Open Image
// ======================

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentImage=index;

        lightbox.classList.add("show");

        lightboxImg.src=galleryImages[currentImage].src;

        document.body.style.overflow="hidden";

    });

});

// ======================
// Close
// ======================

function closeViewer(){

    lightbox.classList.remove("show");

    document.body.style.overflow="auto";

}

closeLightbox.addEventListener("click",closeViewer);

// ======================
// Previous
// ======================

function showPrevious(){

    currentImage--;

    if(currentImage<0){

        currentImage=galleryImages.length-1;

    }

    lightboxImg.src=galleryImages[currentImage].src;

}

prevPhoto.addEventListener("click",showPrevious);

// ======================
// Next
// ======================

function showNext(){

    currentImage++;

    if(currentImage>=galleryImages.length){

        currentImage=0;

    }

    lightboxImg.src=galleryImages[currentImage].src;

}

nextPhoto.addEventListener("click",showNext);

// ======================
// Close When Background Clicked
// ======================

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeViewer();

    }

});

// ======================
// Keyboard Controls
// ======================

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("show")) return;

    switch(e.key){

        case "ArrowLeft":
            showPrevious();
            break;

        case "ArrowRight":
            showNext();
            break;

        case "Escape":
            closeViewer();
            break;

    }

});
// ======================================
// PART 10 - Premium Gallery Lightbox
// ======================================

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

const closeLightbox = document.getElementById("closeLightbox");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

let currentImage = 0;

// Open Image
galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentImage = index;

        lightbox.classList.add("show");

        lightboxImg.src = galleryImages[currentImage].src;

    });

});

// Previous
function showPrev(){

    currentImage--;

    if(currentImage < 0){

        currentImage = galleryImages.length - 1;

    }

    lightboxImg.src = galleryImages[currentImage].src;

}

// Next
function showNext(){

    currentImage++;

    if(currentImage >= galleryImages.length){

        currentImage = 0;

    }

    lightboxImg.src = galleryImages[currentImage].src;

}

prevPhoto.addEventListener("click", showPrev);
nextPhoto.addEventListener("click", showNext);

// Close Button
closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

});

// Click outside image
lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("show");

    }

});

// Keyboard Controls
document.addEventListener("keydown", (e) => {

    if(!lightbox.classList.contains("show")) return;

    if(e.key === "ArrowLeft"){

        showPrev();

    }

    if(e.key === "ArrowRight"){

        showNext();

    }

    if(e.key === "Escape"){

        lightbox.classList.remove("show");

    }

});
