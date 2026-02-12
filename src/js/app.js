// ── Video Catalog ──────────────────────────────────────────────
// Build URL lists for each category. Videos are numbered sequentially
// on our CloudFront CDN. To add new uploads, just bump the count.

const CAT_VIDEO_COUNT = 99;
const DOG_VIDEO_COUNT = 65;

const catsOnlyVideoList = [];
for (let i = 1; i <= CAT_VIDEO_COUNT; i++) {
  catsOnlyVideoList.push(
    `https://d9m01xi7ip4je.cloudfront.net/categories/cats/${i}.mp4`
  );
}

const dogsOnlyVideoList = [];
for (let i = 1; i <= DOG_VIDEO_COUNT; i++) {
  dogsOnlyVideoList.push(
    `https://d9m01xi7ip4je.cloudfront.net/categories/dogs/${i}.mp4`
  );
}

// Static fallback shown when the user disables both categories
const tempDisablePicture = ["src/assets/images/tempDisable.jpg"];


// ── Category Helpers ───────────────────────────────────────────

// Coin-flip between cats and dogs for the "both" setting
function chooseRandomCategory() {
  return Math.random() < 0.5 ? catsOnlyVideoList : dogsOnlyVideoList;
}

// Read the user's saved preference from localStorage and return
// the matching video list. Defaults to cats-only on first visit.
function getSavedUserCategoryListPreference() {
  const category = localStorage.getItem("category");

  if (category === null) {
    // First-time visitor — show cats by default, dim the dogs icon
    document.getElementById("dogs").style.opacity = "0.4";
    return catsOnlyVideoList;
  }

  switch (category) {
    case "noneSelected":  return tempDisablePicture;
    case "catsAndDogs":   return chooseRandomCategory();
    case "catsOnly":      return catsOnlyVideoList;
    case "dogsOnly":      return dogsOnlyVideoList;
    default:              return catsOnlyVideoList;
  }
}

// Read an element's effective opacity. We set opacity via inline
// styles, but on first page load some elements haven't been touched
// yet — their style.opacity is "" (empty string). The browser
// default is 1, so we treat "" as fully visible.
function getOpacity(el) {
  const val = el.style.opacity;
  return val === "" ? 1 : parseFloat(val);
}

// Persist category selection based on current icon opacity.
// Opacity doubles as the visual indicator, so we read it directly
// to keep UI and stored state in sync without extra bookkeeping.
function updateLocalStorageWithCategorySelection() {
  const catsOn = getOpacity(document.getElementById("cats")) === 1;
  const dogsOn = getOpacity(document.getElementById("dogs")) === 1;

  if (catsOn && dogsOn)        localStorage.setItem("category", "catsAndDogs");
  else if (!catsOn && !dogsOn) localStorage.setItem("category", "noneSelected");
  else if (catsOn && !dogsOn)  localStorage.setItem("category", "catsOnly");
  else if (!catsOn && dogsOn)  localStorage.setItem("category", "dogsOnly");
}


// ── Video / Image Rendering ────────────────────────────────────

function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Build an autoplay video element — muted + looping so the tab
// feels alive without surprising the user with audio
function buildVideoHTML(videoUrl) {
  return (
    `<video class="fullscreen-video" loop muted autoplay poster="${videoUrl}">` +
    `<source src="${videoUrl}" type="video/mp4"></video>`
  );
}

// Static image for the "disabled" state
function buildDisabledHTML() {
  return '<img src="src/assets/images/tempDisable.jpg" id="tempDisable">';
}

// Bundled fallback video so there's still something to watch offline
function buildOfflineHTML() {
  const offlineVideo = "src/assets/images/offlineCat.mp4";
  return (
    `<video class="fullscreen-video" loop muted autoplay poster="${offlineVideo}">` +
    `<source src="${offlineVideo}" type="video/mp4"></video>`
  );
}


// ── Menu State ─────────────────────────────────────────────────
// Restore icon opacity to match the saved category so the menu
// always looks correct when the user opens it.

function keepStateForMenuSelection() {
  const cats = document.getElementById("cats");
  const dogs = document.getElementById("dogs");
  const category = localStorage.getItem("category");

  switch (category) {
    case "catsOnly":
      cats.style.opacity = "1";
      dogs.style.opacity = "0.4";
      break;
    case "dogsOnly":
      cats.style.opacity = "0.4";
      dogs.style.opacity = "1";
      break;
    case "noneSelected":
      cats.style.opacity = "0.4";
      dogs.style.opacity = "0.4";
      break;
    case "catsAndDogs":
      cats.style.opacity = "1";
      dogs.style.opacity = "1";
      break;
    default:
      // First visit — explicitly set both so getOpacity() always
      // has a value to read (cats on, dogs dimmed)
      cats.style.opacity = "1";
      dogs.style.opacity = "0.4";
      break;
  }
}


// ── Main ───────────────────────────────────────────────────────

function run() {
  const listToPlay = getSavedUserCategoryListPreference();
  const output = document.getElementById("arrayString");

  if (navigator.onLine && listToPlay === tempDisablePicture) {
    // Both categories disabled — show a static placeholder image
    output.innerHTML = buildDisabledHTML();
    keepStateForMenuSelection();

  } else if (navigator.onLine) {
    const videoUrl = getRandomItem(listToPlay);
    output.innerHTML = buildVideoHTML(videoUrl);
    keepStateForMenuSelection();

  } else {
    // No internet — fall back to the bundled offline cat video
    output.innerHTML = buildOfflineHTML();
  }
}

// Safety net try/catch — shouldn't be needed now that content_scripts
// is removed, but doesn't hurt to keep as a guard
try {
  run();
} catch (error) {
  // Silently ignore — nothing to render
}
