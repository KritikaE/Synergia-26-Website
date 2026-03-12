document.addEventListener("DOMContentLoaded", () => {

const lines = [
"> SAC_PROTOCOL ACTIVE...",
"> BVRITH SYSTEMS ONLINE...",
"> LAUNCHING SYNERGIA 2026..."
];

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const loader = document.getElementById("loader");

const mainContent = document.getElementById("mainContent");
const intro = document.getElementById("intro");
const root = document.getElementById("root");

const video = document.getElementById("butterflyVideo");
const flash = document.getElementById("flash");


/* ================= TYPEWRITER ================= */

function typeLine(text, element, speed = 30) {

  let i = 0;

  const interval = setInterval(() => {

    element.textContent = text.slice(0, i);

    i++;

    if (i > text.length) {
      clearInterval(interval);
    }

  }, speed);

}


/* ================= TERMINAL ================= */

function startTerminal() {

  typeLine(lines[0], line1);

  setTimeout(() => typeLine(lines[1], line2), 500);

  setTimeout(() => typeLine(lines[2], line3), 1000);

}


/* ================= PROGRESS BAR ================= */

function startProgress() {

  let progress = 0;

  const interval = setInterval(() => {

    progress += 2;

    progressFill.style.width = progress + "%";
    progressText.textContent = progress + "%";

    if (progress >= 100) {

      clearInterval(interval);

      setTimeout(() => {

        /* fade loader */
        loader.style.opacity = "0";

        setTimeout(() => {

          loader.style.display = "none";

          /* show intro */
          mainContent.style.display = "block";
          intro.style.display = "flex";

          if (video) video.play();

        }, 500);

      }, 200);

    }

  }, 40);

}


/* ================= VIDEO END ================= */

if (video) {

  video.addEventListener("ended", () => {

    if (flash) flash.style.opacity = "1";

    setTimeout(() => {

      if (flash) flash.style.opacity = "0";

      intro.style.display = "none";
      root.style.display = "block";

    }, 150);

  });

}


/* ================= START ================= */

startTerminal();   // terminal typing
startProgress();   // progress bar simultaneously

});
