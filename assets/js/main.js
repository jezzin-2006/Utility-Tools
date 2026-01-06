const defaultConfig = {
  hero_headline: "Simple tools for everyday digital tasks",
  hero_description:
    "A lightweight collection of web-based utilities for PDF manipulation, image processing, file conversion, and more.",
};

document.getElementById("primary-btn").addEventListener("click", () => {
  document.getElementById("tools").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("secondary-btn").addEventListener("click", () => {
  window.open("https://github.com/jezzin-2006", "_blank", "noopener,noreferrer");
});
