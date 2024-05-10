// Function to toggle between light and dark mode
function toggleDarkMode() {
  var darkModeEnabled = getCookie("darkModeEnabled");

  // If dark mode is enabled, disable it
  if (darkModeEnabled === "true") {
    setCookie("darkModeEnabled", "false", 30); // Set cookie to expire in 30 days
  } else {
    // Otherwise, enable dark mode
    setCookie("darkModeEnabled", "true", 30); // Set cookie to expire in 30 days
  }

  applyDarkMode();
}

// Apply dark mode based on cookie value
function applyDarkMode() {
  var darkModeEnabled = getCookie("darkModeEnabled");

  if (darkModeEnabled === "true") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  // After applying dark mode, show the body
  document.body.style.display = "block";
}

// Function to set cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to get cookie value by name
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Apply dark mode on page load
document.addEventListener("DOMContentLoaded", function () {
  applyDarkMode();

});
