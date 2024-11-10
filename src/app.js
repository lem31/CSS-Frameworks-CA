import "../dist/styles.scss";
import "../dist/tailwind.css";
// import "tailwindcss/tailwind.css";

await router(window.location.pathname);

import router from "./js/router/index.js";

const toggleButton = document.querySelector(".dark-mode-toggle");
toggleButton.addEventListener("click", () => {
  console.log("Toggle button clicked");
  document.documentElement.classList.toggle("dark");
});
