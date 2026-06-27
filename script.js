const stars = document.getElementById("stars");

// Create 300 stars
for (let i = 0; i < 300; i++) {
    const star = document.createElement("div");

    const size = Math.random() * 3 + 1;

    star.style.position = "absolute";
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.borderRadius = "50%";
    star.style.background = "white";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.opacity = Math.random();

    star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite alternate`;

    stars.appendChild(star);
}

// Gift Button
document.getElementById("gift").onclick = () => {
    alert("🎉 Happy Birthday Mashfia! 💜\n\nWishing you happiness, success and endless smiles.\n\nForever Yours,\nDaud ❤️");
};

// Add twinkle animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes twinkle{
    from{
        opacity:.2;
        transform:scale(.8);
    }
    to{
        opacity:1;
        transform:scale(1.4);
    }
}`;
document.head.appendChild(style);
