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
sr.reveal(".baner__img", { delay: 300 });
sr.reveal(".baner__text", { delay: 300 });
sr.reveal(".block", { delay: 100 });
sr.reveal(".block__list", { delay: 200 });
sr.reveal(".section", { delay: 200, interval: 100 });
sr.reveal(".block__item", { delay: 100 });
sr.reveal(".text-title", { delay: 300, interval: 100 });
sr.reveal(".text-item", { delay: 300, interval: 200 });
sr.reveal(".text-item-i", { delay: 300 });
sr.reveal(".footer-content", { delay: 300 });

// ----------------------------------------- Test ------------------------------
console.log(NaN === NaN);
