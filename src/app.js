import "../dist/styles.css";
import "../dist/tailwind.css";

import router from "./js/router/index.js";

await router(window.location.pathname);
