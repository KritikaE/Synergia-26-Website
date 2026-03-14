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
  let introStarted = false;

  function revealMainSiteImmediately() {
    if (loader) loader.style.display = "none";
    if (intro) intro.style.display = "none";
    if (root) root.style.display = "block";
  }

  function getSessionStorageSafe() {
    try {
      return window.sessionStorage;
    } catch (_) {
      return null;
    }
  }

  /* ===================== HAMBURGER MENU =====================
     Registered BEFORE the early-return check so the menu works
     on every page on every visit (not just first visit).
  ===================================================================== */
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });

    // Close menu when tapping outside on touch devices.
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (
        !mobileMenu.classList.contains("hidden") &&
        target instanceof Node &&
        !mobileMenu.contains(target) &&
        !menuToggle.contains(target)
      ) {
        mobileMenu.classList.add("hidden");
      }
    });
  }

  /* ===================== MOBILE HARDENING =====================
     Reduce media/animation load on small screens for smoother scrolling.
  ===================================================================== */
  function hardenMobileHome() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return;

    // Keep marquee lightweight on phones: avoid decoding duplicate videos.
    const stripVideos = document.querySelectorAll(".animate-scroll video");
    stripVideos.forEach((vid, index) => {
      if (!(vid instanceof HTMLVideoElement)) return;
      vid.preload = "metadata";
      if (index >= 5) {
        vid.style.display = "none";
      }
    });

  }

  // Non-home pages do not contain loader/intro/root. Exit safely after menu setup.
  const isHomePage = Boolean(loader && intro && root && video);
  if (!isHomePage) return;

  hardenMobileHome();

  /* ===================== KICK OFF =====================
     Check sessionStorage FIRST (before showing anything) so that
     on reload we never display the loader at all — CSS already hides
     it by default, so there is zero flash. */

  const safeSessionStorage = getSessionStorageSafe();
  const loaderSeen = safeSessionStorage?.getItem("loaderSeen") === "true";

  if (loaderSeen) {
    // Returning visit this session: skip straight to main site.
    revealMainSiteImmediately();
    return; // stop here — no terminal, no progress, no video
  }

  // First visit this session — reveal the loader, then start the sequence
  safeSessionStorage?.setItem("loaderSeen", "true");
  if (loader) loader.style.display = "flex";

  // Mobile-safe fallback: avoid being stuck on loader 0%.
  // Do NOT skip if intro video has already started.
  setTimeout(() => {
    const rootHidden = root && root.style.display !== "block";
    if (rootHidden && !introStarted) {
      revealMainSiteImmediately();
    }
  }, 6000);

  /* ===================== TYPEWRITER ===================== */
  const lines = [
    "> SAC_PROTOCOL ACTIVE...",
    "> BVRITH SYSTEMS ONLINE...",
    "> LAUNCHING SYNERGIA 2026..."
  ];

  function typeLine(text, element, speed = 30) {
    if (!element) return;
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
            introStarted = true;

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

  /* ===================== SMOOTH FADE TRANSITION ===================== */
  function showMainSite() {
    // Fade out the intro video slowly
    if (intro) {
      intro.style.transition = "opacity 1.5s ease-out";
      intro.style.opacity = "0";
    }

    // After fade completes, swap content and fade in main site
    setTimeout(() => {
      if (intro) intro.style.display = "none";
      if (root) {
        root.style.display = "block";
        root.style.opacity = "0";
        root.style.transition = "opacity 1.5s ease-in";
        
        // Trigger fade in
        setTimeout(() => {
          root.style.opacity = "1";
        }, 50);
      }
    }, 1500);
  }

  /* ===================== VIDEO END ===================== */
  if (video) {
    video.addEventListener("ended", () => {
      // Wait 1 second after video ends before transitioning to main site
      setTimeout(showMainSite, 1000);
    });
  }

  /* ===================== START SEQUENCE ===================== */
  startTerminal();
  startProgress();

});
