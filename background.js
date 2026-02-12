// ── Background Service Worker ──────────────────────────────────
// Runs once when the extension is installed or updated.
// Kept minimal on purpose — the only job here is to register the
// uninstall feedback URL so Chrome opens it when a user removes
// the extension. Everything else lives in the new-tab page scripts.

chrome.runtime.onInstalled.addListener(() => {
  chrome.runtime.setUninstallURL(
    'https://docs.google.com/forms/d/e/1FAIpQLSeykxJbhQckDZ1j3WU3D8Onr06uliiABdhtc1aIW6mxjzBCfQ/viewform?usp=sf_link'
  );
});
