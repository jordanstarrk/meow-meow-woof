// ── New Tab Page — Menu & Button Handlers ──────────────────────
// All interaction logic for the bottom-bar buttons and the
// category-selection popup. Pure vanilla DOM — no jQuery needed
// since the interactions here are simple toggles and navigations.


// ── Helpers ────────────────────────────────────────────────────

// Adds a hover effect by toggling a CSS class on mouseenter/leave.
// We handle hover in JS (instead of :hover) so we can reuse the
// same highlight style across buttons, icons, and category items.
function addHoverToggle(element, className) {
  element.addEventListener("mouseenter", () => element.classList.add(className));
  element.addEventListener("mouseleave", () => element.classList.remove(className));
}


// ── Bottom-Bar Buttons ─────────────────────────────────────────

// Home button — navigates the active tab to Google
const homeButton = document.querySelector(".homeButton");
addHoverToggle(homeButton, "forum_hover");

homeButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.update(tabs[0].id, { url: "https://www.google.com" });
  });
});

// "Meow?" button — toggles the category menu open/closed
const menuButton = document.querySelector(".menuButton");
addHoverToggle(menuButton, "forum_hover");

menuButton.addEventListener("click", () => {
  keepStateForMenuSelection();
  const menu = document.querySelector(".menu");
  // Toggle visibility — menu starts hidden via CSS (display: none)
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});


// ── Category Menu ──────────────────────────────────────────────

// Category icons get a pointer cursor on hover
document.querySelectorAll(".category").forEach((el) => {
  addHoverToggle(el, "close_hover");
});

// Clicking a category icon toggles it between selected (opacity 1)
// and deselected (opacity 0.4), then saves the new preference.
// Uses getOpacity() from app.js so "" (unset) is treated as 1.
document.getElementById("dogs").addEventListener("click", function () {
  this.style.opacity = getOpacity(this) === 0.4 ? "1" : "0.4";
  updateLocalStorageWithCategorySelection();
});

document.getElementById("cats").addEventListener("click", function () {
  this.style.opacity = getOpacity(this) === 0.4 ? "1" : "0.4";
  updateLocalStorageWithCategorySelection();
});

// Share button — opens the Chrome Web Store listing so users can share it
const shareButton = document.getElementById("share-button");
addHoverToggle(shareButton, "forum_hover");

shareButton.addEventListener("click", () => {
  window.open("https://chrome.google.com/webstore/detail/lcpipfmjdfelofldlehfiogoogpkjiea");
});

// Feedback button — opens a Google Form for bug reports / suggestions
const feedbackButton = document.getElementById("feedback-button");
addHoverToggle(feedbackButton, "forum_hover");

feedbackButton.addEventListener("click", () => {
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSe5MW0-fM7FNtu3LgnYvhgDJUaMjmLUSNZsipVoUCKgtqfvRA/viewform?usp=sf_link");
});

// Support / donate — Buy Me a Coffee page
const supportButton = document.getElementById("support-button");
addHoverToggle(supportButton, "forum_hover");

supportButton.addEventListener("click", () => {
  window.open("https://www.buymeacoffee.com/meow.meow.woof");
});

// Close button — saves the current category selection and hides the menu
const closeIcon = document.getElementById("closeIcon");
addHoverToggle(closeIcon, "close_hover");

closeIcon.addEventListener("click", () => {
  updateLocalStorageWithCategorySelection();
  document.querySelector(".menu").style.display = "none";
});
