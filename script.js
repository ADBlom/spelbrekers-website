document.getElementById("socials2").innerHTML = document.getElementById("socials").innerHTML;

let activeSection

function onScroll() {
  console.log(window.scrollY);
  if(window.scrollY < 780) {
    activeSection = "home-nav"
  }
  if(window.scrollY >= 780 && window.scrollY < 4300) {
    activeSection = "producties-nav"
  }
  if(window.scrollY >= 4300 && window.scrollY < 5600) {
    activeSection = "over-ons-nav"
  }
  if(window.scrollY >= 5600) {
    activeSection = "steun-ons-nav"
  }
  document.getElementsByClassName("navigation-active")[0]?.classList.remove("navigation-active");
  document.getElementById(activeSection).classList.add("navigation-active");
};

onScroll();

window.addEventListener('scrollend', onScroll, { passive: true });