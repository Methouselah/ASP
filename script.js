const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Сохранение состояния переключателя
window.addEventListener("load", () => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  if (isDarkMode) {
    darkModeToggle.checked = true;
    document.body.classList.add("dark-mode");
  }
});

darkModeToggle.addEventListener("change", () => {
  const isDarkMode = darkModeToggle.checked;
  localStorage.setItem("darkMode", isDarkMode);
});

// ----------------------------------------- ScrollReveal ------------------------------
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal("header", { delay: 100 });
sr.reveal(".baner__img", { delay: 100 });
sr.reveal(".baner__text", { delay: 500, interval: 100, origin: "bottom" });
sr.reveal(".block", { delay: 100 });
sr.reveal(".block__list", { delay: 200 });
sr.reveal(".section", { delay: 200, interval: 100 });
sr.reveal(".block__item", { delay: 100 });
