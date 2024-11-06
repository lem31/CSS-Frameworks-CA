// import { authGuard } from "../../utilities/authGuard";

alert("Auth Index Page");

import { onLogin } from "../../ui/auth/login";

import { onRegister } from "../../ui/auth/register";

const LOGIN_FORM = document.getElementById("login-form");

const LOGIN_BUTTON = document.getElementById("login-button");

const REGISTER_FORM = document.getElementById("register-form");

const REGISTER_BUTTON = document.getElementById("register-button");

const LOGIN_FORM_CONTAINER = document.querySelector(".login-form-container");

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

onRegister();

LOGIN_BUTTON.addEventListener("click", showLoginForm);

function showLoginForm() {
  if (LOGIN_FORM_CONTAINER.style.display === "none") {
    LOGIN_FORM_CONTAINER.style.display = "block";
  } else {
    LOGIN_FORM_CONTAINER.style.display = "none";
  }
}

REGISTER_BUTTON.addEventListener("click", showRegisterForm);

function showRegisterForm() {
  if (REGISTER_FORM.style.display === "none") {
    REGISTER_FORM.style.display = "block";
  } else {
    REGISTER_FORM.style.display = "none";
  }
}
