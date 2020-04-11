console.info("© 2020 VisuallData. All Rights Reserved");

const setWidth = () => {
  document.getElementsByTagName("img").item(0).width = window.innerWidth * 0.8;
};

window.addEventListener("resize", setWidth);
window.addEventListener("load", setWidth);
