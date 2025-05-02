// Getting Elements
const navBar = document.querySelector(".nav");
const heroSection = document.querySelector(".hero-section");
const skillSection = document.querySelector(".skills-sec");
const projectSection = document.querySelector(".projects-section");
const contactSection = document.querySelector(".contact-me");
const footerSection = document.querySelector("footer");

// Dark Mode Functionality
const rootStyles = getComputedStyle(document.documentElement);
let lightGradient = rootStyles.getPropertyValue("--light-background");
let darkGradient = rootStyles.getPropertyValue("--dark-background");
let darkNav = rootStyles.getPropertyValue("--dark-nav");
let darkFont = rootStyles.getPropertyValue("--white");
let lightFont = rootStyles.getPropertyValue("--light-font");
let accentColor = rootStyles.getPropertyValue("--accent");
let footerColor = rootStyles.getPropertyValue("--light");
console.log(lightFont);

const themeSwitchBtn = document
  .getElementById("theme-switcher")
  .addEventListener("click", () => {
    if (lightFont === "#262626") {
      lightFont = darkFont;
    }
    console.log(lightFont);
  });

// Menu Bar Functionality
const menuDiv = document.querySelector(".menu-div");
let isEnable = true;
const menuBtn = document
  .querySelector("#menu")
  .addEventListener("click", () => {
    if (isEnable) {
      menuDiv.classList.add("style-class");
      isEnable = false;
    } else {
      menuDiv.classList.remove("style-class");
      isEnable = true;
    }
  });
