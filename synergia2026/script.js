document.addEventListener("DOMContentLoaded", () => {

  /* ===================== ELEMENTS ===================== */
  const line1        = document.getElementById("line1");
  const line2        = document.getElementById("line2");
  const line3        = document.getElementById("line3");
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");
  const loader       = document.getElementById("loader");
  const intro        = document.getElementById("intro");
  const root         = document.getElementById("root");
  const video        = document.getElementById("butterflyVideo");
  const flash        = document.getElementById("flash");

  /* ===================== TYPEWRITER ===================== */
  const lines = [
    "> SAC_PROTOCOL ACTIVE...",
    "> BVRITH SYSTEMS ONLINE...",
    "> LAUNCHING SYNERGIA 2026..."
  ];

  function typeLine(text, element, speed = 30) {
    let i = 0;
    const interval = setInterval(() => {
      element.textContent = text.slice(0, i);
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
  }

  function startTerminal() {
    typeLine(lines[0], line1);
    setTimeout(() => typeLine(lines[1], line2), 500);
    setTimeout(() => typeLine(lines[2], line3), 1000);
  }

  /* ===================== PROGRESS BAR ===================== */
  function startProgress() {
    let progress = 0;

    const interval = setInterval(() => {
      progress += 2;
      if (progressFill) progressFill.style.width = progress + "%";
      if (progressText) progressText.textContent  = progress + "%";

      if (progress >= 100) {
        clearInterval(interval);

        // Brief pause so "100%" registers visually
        setTimeout(() => {

          // Fade out loader
          if (loader) loader.style.opacity = "0";

          // After fade completes, hide loader and start video
          setTimeout(() => {
            if (loader) loader.style.display = "none";

            // Show intro panel
            if (intro) intro.style.display = "flex";

            // Play video — controlled here, NOT via autoplay attr
            if (video) {
              video.currentTime = 0;
              video.play().catch(() => {
                // Autoplay blocked by browser policy → skip to main site
                showMainSite();
              });
            }
          }, 500); // matches loader's CSS transition: 0.5s

        }, 200);
      }
    }, 40);
  }

  /* ===================== FLASH + REVEAL =====================
     Timeline:
       t=0ms   → .flash-in added, opacity → 1   (fast 0.12s ease-in)
       t=120ms → .flash-in removed              (CSS switches to 0.4s ease-out)
       t=150ms → opacity → 0, swap DOM          (fade-out begins while content swaps)
                 intro hidden, root shown
  ===================================================================== */
  function showMainSite() {
    if (!flash) {
      // Fallback: no flash element found, swap immediately
      if (intro) intro.style.display = "none";
      if (root)  root.style.display  = "block";
      return;
    }

    // FLASH IN — fast punch
    flash.classList.add("flash-in");
    flash.style.opacity = "1";

    // Switch CSS transition to slow fade-out
    setTimeout(() => {
      flash.classList.remove("flash-in");
    }, 120);

    // Swap content while flash is fading out
    setTimeout(() => {
      flash.style.opacity = "0";
      if (intro) intro.style.display = "none";
      if (root)  root.style.display  = "block";
    }, 150);
  }

  /* ===================== VIDEO END ===================== */
  if (video) {
    video.addEventListener("ended", showMainSite);
  }

  /* ===================== KICK OFF ===================== */

  // Skip loader if user has already seen it this session
  if (sessionStorage.getItem('loaderSeen')) {
    if (loader) loader.style.display = "none";
    if (root)   root.style.display   = "block";
    return; // stop here — no terminal, no progress, no video
  }

  // First visit this session — mark it, then play the full intro
  sessionStorage.setItem('loaderSeen', 'true');
  startTerminal();
  startProgress();

});
