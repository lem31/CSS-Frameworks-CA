import { authGuard } from "../../utilities/authGuard";

alert("Auth Index Page");

authGuard();

//LOGIN FORM CODE

import { onLogin } from "../../ui/auth/login";
import { LOGIN_FORM } from "../../api/constants.js";

/**
 * Listens for the login form submission event and calls the onLogin function.
 * @function listenForLoginFormSubmission
 * @returns {void}
 * @example
 * listenForLoginFormSubmission();
 */
function listenForLoginFormSubmission() {
  LOGIN_FORM.addEventListener("submit", onLogin);
}

listenForLoginFormSubmission();

//REGISTER FORM CODE

import { onRegister } from "../../ui/auth/register";

onRegister();
