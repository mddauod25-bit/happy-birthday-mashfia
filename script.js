// Create moving stars
const stars = document.getElementById("stars");

for (let i = 0; i < 250; i++) {
  const star = document.createElement("div");

  star.style.position = "absolute";
  star.style.width = Math.random() * 3 + 1 + "px";
  star.style.height = star.style.width;
  star.style.background = "white";
  star.style.borderRadius = "50%";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.opacity = Math.random();

  stars.appendChild(star);
}

// Gift Button
const gift = document.getElementById("gift");

gift.addEventListener("click", () => {
    alert("🎉 Happy Birthday Mashfia! 💜\n\nWishing you endless happiness and beautiful moments.\n\nForever Yours,\nDaud ❤️");
});
