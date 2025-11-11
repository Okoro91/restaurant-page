import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import loadContact from "./contact.js";

const setActiveButton = (button) => {
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
};

const initializeWebsite = () => {
  loadHome();
  setActiveButton(document.getElementById("home-btn"));

  document.getElementById("home-btn").addEventListener("click", (e) => {
    loadHome();
    setActiveButton(e.target);
  });

  document.getElementById("menu-btn").addEventListener("click", (e) => {
    loadMenu();
    setActiveButton(e.target);
  });

  document.getElementById("about-btn").addEventListener("click", (e) => {
    loadAbout();
    setActiveButton(e.target);
  });

  document.getElementById("contact-btn").addEventListener("click", (e) => {
    loadContact();
    setActiveButton(e.target);
  });
};

document.addEventListener("DOMContentLoaded", initializeWebsite);
