// import { authGuard } from "../../utilities/authGuard";

alert("Auth Index Page");

import { onLogin } from "../../ui/auth/login";

import { onRegister } from "../../ui/auth/register";

/**
 * Listens for the login form submission event and calls the onLogin function.
 * @function listenForLoginFormSubmission
 * @returns {void}
 * @example
 * listenForLoginFormSubmission();
 */
function listenForLoginFormSubmission() {
  const LOGIN_FORM = document.getElementById("login-form");
  LOGIN_FORM.addEventListener("submit", onLogin);
}

listenForLoginFormSubmission();

//REGISTER FORM CODE

onRegister();
