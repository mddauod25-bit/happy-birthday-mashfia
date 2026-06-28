// ==============================
// Galaxy Birthday Website
// Part 3A
// ==============================

// ⭐ Create Twinkling Stars
const stars = document.getElementById("stars");

for(let i = 0; i < 120; i++){

    const star = document.createElement("div");

    const size = Math.random()*3 + 1;

    star.style.position = "absolute";
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.background = "white";
    star.style.borderRadius = "50%";

    star.style.left = Math.random()*100 + "%";
    star.style.top = Math.random()*100 + "%";

    star.style.opacity = Math.random();

    star.style.animation =
        `twinkle ${2 + Math.random()*4}s infinite alternate`;

    stars.appendChild(star);

}

// ⭐ Twinkle Animation
const style = document.createElement("style");

style.innerHTML = `
@keyframes twinkle{

from{
opacity:.2;
transform:scale(.8);
}

to{
opacity:1;
transform:scale(1.5);
}

}
`;

document.head.appendChild(style);

// 🎁 Gift Button
const gift = document.getElementById("giftButton");

const card = document.getElementById("card");

gift.onclick = ()=>{

card.scrollIntoView({

behavior:"smooth"

});

}

// ❤️ Floating Hearts
const hearts = document.getElementById("hearts");

setInterval(()=>{

const heart = document.createElement("div");

heart.innerHTML = "💜";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-50px";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.transition="all 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-110vh)";
heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},6500);

},1200);
// ==============================
// Part 3B - Shooting Stars
// ==============================

const shootingContainer = document.getElementById("shooting-stars");

function createShootingStar(){

    const star = document.createElement("div");

    star.style.position = "absolute";
    star.style.width = "3px";
    star.style.height = "3px";
    star.style.background = "white";
    star.style.boxShadow = "0 0 20px white";
    star.style.borderRadius = "50%";

    star.style.left = Math.random()*100 + "vw";
    star.style.top = Math.random()*40 + "vh";

    star.style.transition = "all 1.8s linear";

    shootingContainer.appendChild(star);

    setTimeout(()=>{

        star.style.transform =
        "translate(-350px,350px)";

        star.style.opacity = "0";

    },100);

    setTimeout(()=>{

        star.remove();

    },2000);

}

setInterval(createShootingStar,1800);


// ==============================
// Moon Glow Animation
// ==============================

const moon = document.querySelector(".moon");

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
// ==============================
// Part 3C - Gift Surprise
// ==============================

const giftButton = document.getElementById("giftButton");

giftButton.addEventListener("click", () => {

    document.body.style.transition = "background 2s";
    document.body.style.background =
    "linear-gradient(180deg,#180033,#050010,#000)";

    alert(
`🎉 Happy Birthday Mashfia! 💜

May your life be filled with happiness,
love, success and endless smiles.
    Love you from my heart. 

✨ You are truly special. ✨

Forever Yours,
Daud ❤️`
    );

});


// ==============================
// Sparkles
// ==============================

setInterval(() => {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random()*100+"vw";
    sparkle.style.top = Math.random()*100+"vh";
    sparkle.style.fontSize = (12+Math.random()*20)+"px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.opacity = "1";
    sparkle.style.transition = "all 2s linear";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.style.opacity = "0";
        sparkle.style.transform = "scale(2)";
    },100);

    setTimeout(() => {
        sparkle.remove();
    },2200);

},1500);
// ==============================
// Background Music
// ==============================

const bgMusic = document.getElementById("bgMusic");

// Play music when the user clicks anywhere for the first time
document.addEventListener("click", () => {
    bgMusic.play().catch(err => console.log(err));
}, { once: true });

// Also play when Gift Button is clicked
const giftBtn = document.getElementById("giftButton");

giftBtn.addEventListener("click", () => {
    bgMusic.play().catch(err => console.log(err));
});
// ==============================
// Premium Loader
// ==============================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.classList.add("hideLoader");

},2500);

});
// ==============================
// Premium Confetti Explosion
// ==============================

const confetti = document.getElementById("confetti");

function launchConfetti(){

const colors=[
"#ff4dff",
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

piece.style.animationDelay=Math.random()*0.8+"s";

piece.style.transform=
`rotate(${Math.random()*360}deg)`;

confetti.appendChild(piece);

setTimeout(()=>{

piece.remove();

},4500);

}

}

giftButton.addEventListener("click",launchConfetti);
// ===================================
// PREMIUM V3 - Balloons + Parallax
// ===================================

// Premium Loader
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hideLoader");

    }, 2200);

});

// Floating Balloons

const balloonContainer = document.getElementById("balloons");

const balloonColors = [
"#ff4fd8",
"#8a2be2",
"#00bfff",
"#ffd700",
"#ff6b6b",
"#ffffff"
];

function createBalloon(){

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.style.left = Math.random()*100 + "vw";

    balloon.style.background =
    balloonColors[Math.floor(Math.random()*balloonColors.length)];

    balloon.style.animationDuration =
    (8 + Math.random()*5) + "s";

    balloon.style.transform =
    "scale("+(0.8+Math.random()*0.6)+")";

    balloonContainer.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },14000);

}

setInterval(createBalloon,1200);


// 3D Galaxy Parallax

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*20;

const y=(e.clientY/window.innerHeight-.5)*20;

const galaxy=document.querySelector(".galaxy");

galaxy.style.transform=
`translate(${x}px,${y}px) scale(1.08)`;

});


// Premium Photo Glow

const photo=document.querySelector(".photo-frame");

photo.addEventListener("mouseenter",()=>{

photo.style.boxShadow=
"0 0 80px #ff66ff,0 0 120px #00bfff";

});

photo.addEventListener("mouseleave",()=>{

photo.style.boxShadow=
"0 0 35px #b84dff";

});


// Premium Gift Animation

giftButton.addEventListener("mouseenter",()=>{

giftButton.style.transform="scale(1.15)";

});

giftButton.addEventListener("mouseleave",()=>{

giftButton.style.transform="scale(1)";

});
// ======================================
// PREMIUM FIREWORKS ENGINE - PART 1
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

        this.radius = Math.random()*3+2;

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

        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

        ctx.fillStyle=this.color;

        ctx.shadowBlur=20;

        ctx.shadowColor=this.color;

        ctx.fill();

    }

}

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

colors[Math.floor(Math.random()*colors.length)]

)

);

}

}

function animateFireworks(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=particles.length-1;i>=0;i--){

particles[i].update();

particles[i].draw();

if(particles[i].life<=0){

particles.splice(i,1);

}

}

requestAnimationFrame(animateFireworks);

}

animateFireworks();
// ======================================
// PREMIUM FIREWORKS - PART 2
// ======================================

// Auto Fireworks every 3 seconds
setInterval(() => {

    explode(
        Math.random() * canvas.width,
        Math.random() * canvas.height * 0.6
    );

}, 3000);

// Massive Fireworks when Gift Button is clicked
giftButton.addEventListener("click", () => {

    for(let i = 0; i < 10; i++){

        setTimeout(() => {

            explode(
                Math.random() * canvas.width,
                100 + Math.random() * (canvas.height * 0.5)
            );

        }, i * 250);

    }

});

// Fireworks on mouse click
canvas.addEventListener("click", (e) => {

    explode(e.clientX, e.clientY);

});
// ==============================
// Premium Meteor Shower
// ==============================

const meteorContainer = document.getElementById("shooting-stars");

function createMeteor(){

    const meteor = document.createElement("div");

    meteor.className = "meteor";

    meteor.style.left = Math.random()*window.innerWidth + "px";
    meteor.style.top = Math.random()*250 + "px";

    meteor.style.animation =
        `meteorMove ${1+Math.random()}s linear forwards`;

    meteorContainer.appendChild(meteor);

    setTimeout(()=>{

        meteor.remove();

    },2000);

}

setInterval(createMeteor,1200);
// ======================================
// Intro Story Messages
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
text:"The moon, the stars and the whole galaxy are celebrating your birthday. Cuz I told them . It's your Birthday."
},

{
title:"🎂 Happy Birthday",
text:"Now it's time to open your special birthday surprise. 💜"
}

];

let currentPage = 0;

nextBtn.addEventListener("click",()=>{

currentPage++;

if(currentPage < introMessages.length){

title.innerHTML = introMessages[currentPage].title;
text.innerHTML = introMessages[currentPage].text;

}else{

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

},800);

}

});
