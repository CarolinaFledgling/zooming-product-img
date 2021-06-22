const img = document.querySelector(".img-card");

const zoomImg = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  console.log(x, y);
  // x provides the horizontal location our mouse cursors in browser
  // y provides the vertical location our mouse cursors in browser
  const imgX = img.offsetLeft;
  const imgY = img.offsetTop;
  //   location img

  const locationMouseX = (imgX - x) * -1;
  const locationMouseY = (imgY - y) * -1;

  img.style.transformOrigin = `${locationMouseX}px ${locationMouseY}px`;
  img.classList.add("zoom-img");
};

const resetImg = () => {
  img.classList.remove("zoom-img");
};

img.addEventListener("mousemove", zoomImg);
img.addEventListener("mouseout", resetImg);
