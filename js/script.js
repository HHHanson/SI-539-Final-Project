const timelineScrollButton = document.querySelector(
  '.decade-nav__item[data-target="decade-1950s"]'
);
const firstDecade = document.getElementById("decade-1950s");
const header = document.querySelector(".site-header");

if (timelineScrollButton && firstDecade && header) {
  timelineScrollButton.addEventListener("click", () => {
    const rect = firstDecade.getBoundingClientRect();
    const offset = header.offsetHeight + 16;

    window.scrollTo({
      top: window.scrollY + rect.top - offset,
      behavior: "smooth",
    });
  });
}

const backToTopButton = document.querySelector(".back-to-top");

function updateBackToTop() {
  if (!backToTopButton) return;
  backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
}

window.addEventListener("scroll", updateBackToTop);

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  updateBackToTop();
}

document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("current-year");
    yearSpan.textContent = new Date().getFullYear();
});
