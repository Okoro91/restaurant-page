import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import loadContact from "./contact.js";

function initializeWebsite() {
  loadHome();

  document.getElementById("home-btn").addEventListener("click", loadHome);
  document.getElementById("menu-btn").addEventListener("click", loadMenu);
  document.getElementById("about-btn").addEventListener("click", loadAbout);
  document.getElementById("contact-btn").addEventListener("click", loadContact);
}

document.addEventListener("DOMContentLoaded", initializeWebsite);
