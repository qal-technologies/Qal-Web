const AnimatedDiv = document.querySelector(".intro-info");

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      AnimatedDiv.classList.add("moveUpNfadeIn");
    }
  },
  { threshold: 0.6 }
);

observer.observe(AnimatedDiv);

window.onload = () => {
  const menu = document.querySelector("#menu-bar");
  menu.classList.add("dis-none");
};
