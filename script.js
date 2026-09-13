document.getElementById("socials2").innerHTML = document.getElementById("socials").innerHTML;





// desktop


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




// mobile


const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu after tapping a link (mobile)
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }