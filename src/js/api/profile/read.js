import { headers } from "../headers.js";
import { API_PROFILE } from "../constants.js";

/**
 * Fetches the user profile from the API
 * and displays it on the page.
 *
 * @async
 * @function getUserProfile
 * @returns {Promise<void>} A promise that resolves when the
 * user profile is fetched and displayed on the page
 * or rejects the request if an error occurs.
 * @throws Will throw an error if the fetch request fails.
 *
 *
 * @example
 * // Example of how to call the getUserProfile function
 * import { getUserProfile }
 * from "./path/to/api/profile/read.js";
 *
 * getUserProfile();
 */
export async function getUserProfile() {
  try {
    const USER = JSON.parse(localStorage.getItem("user"));
    const NAME = USER ? USER.name : null;
    if (!NAME) {
      throw new Error("User name not found in local storage.");
    }
    const RESPONSE = await fetch(`${API_PROFILE}${NAME}`, {
      method: "GET",
      headers: headers(),
    });

    if (!RESPONSE.ok) {
      console.error("HTTP error response:", RESPONSE);
      throw new Error(`HTTP error! status: ${RESPONSE.status || "unknown"}`);
    }

    const data = await RESPONSE.json();

    const PROFILE = data.data || {};

    displayUserProfile(PROFILE);
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}

/**
 * Displays the user profile on the page by dynamically creating
 * the necessary HTML elements and setting the innerHTML to the
 * user profile data from the API.
 *
 * @function displayUserProfile
 * @param {object} PROFILE The user profile data from the API
 *
 * @returns {void}
 *
 * @example
 * // Example of how to call the displayUserProfile function
 * import { displayUserProfile }
 * from "./path/to/api/profile/read.js";
 *
 * const data = await RESPONSE.json();
 * const PROFILE = data.data || {};
 *
 * //OR
 *
 * const PROFILE = {
 * name: "John Doe",
 * email: "JohnDoe@stud.noroff.no",
 * bio: "I am a student at Noroff",
 * banner: {
 * url: "path/to/banner.jpg"
 * },
 * avatar: {
 * url: "path/to/avatar.jpg"
 * };
 *
 * displayUserProfile(PROFILE);
 */

function displayUserProfile(PROFILE) {
  const USER_PROFILE = document.getElementById("my-profile");
  const PROFILE_BOX = document.getElementById("profile-box");
  const USER_NAME = document.createElement("h2");
  const USER_EMAIL = document.createElement("p");
  const BIO = document.createElement("p");
  const BANNER = document.createElement("img");
  const AVATAR = document.createElement("img");
  const NUMBER_OF_POSTS = document.createElement("p");
  const NUMBER_OF_FOLLOWERS = document.createElement("span");
  const NUMBER_FOLLOWING = document.createElement("span");
  const FOLLOW_COUNT_CONTAINER = document.createElement("div");
  const AVATAR_CONTAINER = document.querySelector(".avatar-container");
  const FOLLOWING_LABEL = document.createElement("span");
  FOLLOWING_LABEL.innerHTML = "Following: ";
  const FOLLOW_BUTTON = document.createElement("button");
  const FOLLOW_BUTTON_BOX = document.createElement("div");
  FOLLOW_BUTTON.innerHTML = "Follow";
  const FOLLOWERS_LABEL = document.createElement("span");
  FOLLOWERS_LABEL.innerHTML = "Followers: ";
  const USER_NAME_BOX = document.createElement("div");

  FOLLOW_COUNT_CONTAINER.classList.add("follower-layout");
  USER_NAME.classList.add("username-mobile");
  USER_NAME.classList.add("username-desktop");
  USER_EMAIL.classList.add("dark:text-white");
  USER_PROFILE.classList.add("flex-col-center-layout");
  AVATAR.classList.add("profile-image-box");
  AVATAR.classList.add("dark:border-2");
  AVATAR.classList.add("dark:border-solid");
  AVATAR.classList.add("dark:border-white");
  BANNER.classList.add("profile-banner");
  AVATAR.classList.add("profile-avatar");
  USER_NAME.classList.add("dark:text-white");
  FOLLOWING_LABEL.classList.add("dark:text-white");
  FOLLOWERS_LABEL.classList.add("dark:text-white");
  NUMBER_FOLLOWING.classList.add("dark:text-white");
  NUMBER_OF_FOLLOWERS.classList.add("dark:text-white");
  FOLLOW_BUTTON.classList.add("button-desktop");
  FOLLOW_BUTTON.classList.add("button-mobile");
  FOLLOW_BUTTON.classList.add("px-4");
  FOLLOW_BUTTON.classList.add("dark:dark-mode-style");
  FOLLOW_BUTTON.classList.add("mt-2");
  FOLLOW_BUTTON_BOX.classList.add("flex-center-layout");
  USER_NAME_BOX.classList.add("flex-center-layout");
  PROFILE_BOX.classList.add("dark:dark-mode-style-profile-box");

  PROFILE_BOX.appendChild(AVATAR_CONTAINER);
  PROFILE_BOX.appendChild(USER_NAME_BOX);
  PROFILE_BOX.appendChild(FOLLOW_COUNT_CONTAINER);
  PROFILE_BOX.appendChild(FOLLOW_BUTTON_BOX);
  AVATAR_CONTAINER.appendChild(AVATAR);
  FOLLOW_COUNT_CONTAINER.appendChild(FOLLOWERS_LABEL);
  FOLLOW_COUNT_CONTAINER.appendChild(NUMBER_OF_FOLLOWERS);
  FOLLOW_COUNT_CONTAINER.appendChild(FOLLOWING_LABEL);
  FOLLOW_COUNT_CONTAINER.appendChild(NUMBER_FOLLOWING);
  PROFILE_BOX.appendChild(FOLLOW_COUNT_CONTAINER);
  FOLLOWING_LABEL.appendChild(NUMBER_FOLLOWING);
  PROFILE_BOX.appendChild(FOLLOW_BUTTON);
  FOLLOW_BUTTON_BOX.appendChild(FOLLOW_BUTTON);
  USER_NAME_BOX.appendChild(USER_NAME);

  USER_NAME.innerHTML = PROFILE.name || "N/A";
  USER_EMAIL.innerHTML = PROFILE.email || "N/A";
  BIO.innerHTML = PROFILE.bio || "N/A";
  BANNER.src =
    PROFILE.banner && PROFILE.banner.url
      ? PROFILE.banner.url
      : "../../../ui/images/default-banner.jpg";

  if (PROFILE.avatar && PROFILE.avatar.url) {
    AVATAR.src = PROFILE.avatar.url;
  } else {
    AVATAR.src = "../../../ui/images/default-avatar.jpg";
  }
  NUMBER_OF_POSTS.innerHTML = PROFILE.posts ? PROFILE.posts.length : 0;

  NUMBER_OF_FOLLOWERS.innerHTML = PROFILE.followers
    ? PROFILE.followers.length
    : 0;
  NUMBER_FOLLOWING.innerHTML = PROFILE.following ? PROFILE.following.length : 0;
}
