document.getElementById("socials2").innerHTML = document.getElementById("socials").innerHTML;

let activeSection

function onScroll() {
  const sections = document.querySelectorAll(".section");
    let activeSection = null;
    let bestDistance = 0;

    sections.forEach(section => {
      const distance = section.getBoundingClientRect().y;
      if ((distance < 350 && distance >= bestDistance) || distance < bestDistance) {
        bestDistance = distance;
        activeSection = section;
      }
    });
  document.getElementsByClassName("navigation-active")[0]?.classList.remove("navigation-active");
  document.getElementById(`${activeSection.id}-nav`).classList.add("navigation-active");
};

onScroll();

window.addEventListener('scrollend', onScroll, { passive: true });