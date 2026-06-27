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
