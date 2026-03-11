// Icons (if lucide exists)
if (window.lucide && lucide.createIcons) {
  lucide.createIcons();
}

// Loader -> Intro Video -> Site
document.addEventListener("DOMContentLoaded", () => {

  const loader = document.getElementById("loader");
  const intro = document.getElementById("intro");
  const video = document.getElementById("butterflyVideo");
  const site = document.getElementById("root");

  // Initial state
  if (intro) intro.style.display = "none";
  if (site) site.style.display = "none";

  // Show loader for a few seconds
  setTimeout(() => {

    if (loader) loader.style.display = "none";

    if (intro) {
      intro.style.display = "block";
      if (video) video.play().catch(()=>{});
    }

  }, 3500);

  // After video ends show site
  if (video) {
    video.addEventListener("ended", () => {
      if (intro) intro.style.display = "none";
      if (site) site.style.display = "block";
    });
  }

});


// Navbar scroll effect
window.addEventListener("scroll", () => {

  const nav = document.querySelector("nav");

  if (!nav) return;

  if (window.scrollY > 50) {
    nav.classList.add("bg-black/95");
    nav.classList.remove("bg-black/85");
  } else {
    nav.classList.add("bg-black/85");
    nav.classList.remove("bg-black/95");
  }

});