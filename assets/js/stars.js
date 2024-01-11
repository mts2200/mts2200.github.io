function generateBoxShadow(n) {
  let boxShadow = "";
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * window.innerWidth) + "px";
    const y = Math.floor(Math.random() * window.innerHeight * 4) + "px";
    boxShadow += `${x} ${y} #FFF, `;
  }
  return boxShadow.slice(0, -2);
}

function fillStars() {
  const shadowsSmall = generateBoxShadow(window.innerHeight * 1.1);
  const shadowsMedium = generateBoxShadow(window.innerHeight * 0.5);
  const shadowsBig = generateBoxShadow(window.innerHeight * 0.3);

  const stars = document.getElementById("stars");
  const starsMedium = document.getElementById("stars-medium");
  const starsBig = document.getElementById("stars-big");

  stars.style.boxShadow = shadowsSmall;
  stars.style.animation = "animStar 50s linear infinite";

  const starsAfter = document.createElement("div");
  starsAfter.style.boxShadow = shadowsSmall;
  stars.appendChild(starsAfter);

  starsMedium.style.boxShadow = shadowsMedium;
  starsMedium.style.animation = "animStar 100s linear infinite";

  const starsMediumAfter = document.createElement("div");
  starsMediumAfter.style.boxShadow = shadowsMedium;
  starsMedium.appendChild(starsMediumAfter);

  starsBig.style.boxShadow = shadowsBig;
  starsBig.style.animation = "animStar 150s linear infinite";

  const starsBigAfter = document.createElement("div");
  starsBigAfter.style.boxShadow = shadowsBig;
  starsBig.appendChild(starsBigAfter);
}

fillStars()

window.addEventListener('resize', (e) => {
  fillStars()
});
