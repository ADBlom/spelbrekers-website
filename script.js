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







(function(){
  const viewport = document.getElementById('viewport');
  const track = document.getElementById('track');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const images = Array.from(track.querySelectorAll('img'));
 
  let currentIndex = 0;
  let gap = 16;
 
  // Compute the translateX needed to center each image, clamped so we
  // never scroll past the first/last image (which would show blank space).
  function getTargets(){
    const viewportWidth = viewport.clientWidth;
    const trackWidth = track.scrollWidth;
    const maxTranslate = Math.max(0, trackWidth - viewportWidth);
 
    let offset = 0;
    const targets = images.map((img, i) => {
      const w = img.getBoundingClientRect().width;
      const center = offset + w / 2 - viewportWidth / 2;
      offset += w + gap;
      return center;
    });
 
    return targets.map(t => Math.min(Math.max(t, 0), maxTranslate));
  }
 
  function update(animate = true){
    const targets = getTargets();
    const x = targets[currentIndex];
 
    track.style.transition = animate
      ? 'transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)'
      : 'none';
    track.style.transform = `translateX(${-x}px)`;
 
    // Hide an arrow once we're already at its edge target, since going
    // further would either repeat the same position or reveal empty space.
    const atStart = targets[currentIndex] <= 0.5;
    const atEnd = currentIndex === images.length - 1;
 
    prevBtn.classList.toggle('is-hidden', currentIndex === 0);
    nextBtn.classList.toggle('is-hidden', atEnd);
  }
 
  function goTo(index){
    currentIndex = Math.min(Math.max(index, 0), images.length - 1);
    update(true);
  }
 
  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));
 
  // Recompute (without animating) on resize, since image widths/viewport change.
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => update(false), 100);
  });
 
  // Wait for all images to load so getBoundingClientRect() widths are correct.
  let loaded = 0;
  images.forEach(img => {
    if (img.complete) {
      loaded++;
    } else {
      img.addEventListener('load', () => {
        loaded++;
        if (loaded === images.length) update(false);
      });
      img.addEventListener('error', () => {
        loaded++;
        if (loaded === images.length) update(false);
      });
    }
  });
  if (loaded === images.length) update(false);
})();