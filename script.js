// ==============================
// Galaxy Birthday Website
// Part 3A
// ==============================

// ⭐ Create Twinkling Stars
const stars = document.getElementById("stars");

for(let i = 0; i < 250; i++){

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

},700);
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

},800);
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
