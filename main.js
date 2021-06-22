const img = document.querySelector(".img-card");

const zoomImg = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  console.log(x, y);
};

img.addEventListener("mousemove", zoomImg);
