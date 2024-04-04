window.onload = function () {
  var listItems = document.querySelectorAll(".download-list li");
  var previewItem = document.querySelector(".preview-item");

  // Display the image of the first item initially
  if (listItems.length > 0) {
    var firstImgSrc = listItems[0].querySelector("img").getAttribute("src");
    var firstFullImg = document.createElement("img");
    firstFullImg.setAttribute("src", firstImgSrc);
    previewItem.appendChild(firstFullImg);
  }

  listItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      var imgSrc = this.querySelector("img").getAttribute("src");
      var fullImg = document.createElement("img");
      fullImg.setAttribute("src", imgSrc);
      previewItem.innerHTML = "";
      previewItem.appendChild(fullImg);
    });
  });
};
function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
}

function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName.trim() === name) {
      return cookieValue;
    }
  }
  return null;
}

// Function to display modal
function openModal() {
  var modal = document.getElementById("custom-modal");
  if (modal) {
    modal.style.display = "block";
    modal.classList.remove("fadeOut");
    modal.classList.add("fadeIn");
  }
}

function closeModal() {
  var modal = document.getElementById("custom-modal");
  if (modal) {
    modal.classList.remove("fadeIn");
    modal.classList.add("fadeOut");
    setTimeout(function () {
      modal.style.display = "none";
    }, 500);
  }
}

// Check if cookie exists
const formSubmitted = getCookie("formSubmitted");

// If cookie does not exist, prevent default action and show modal
const downloadLinks = document.querySelectorAll(".downloadLink");
downloadLinks.forEach(function (link) {
  link.onclick = function (event) {
    if (!formSubmitted || formSubmitted !== "true") {
      setCookieDownload("itemForDownload", this.id, 14);
      event.preventDefault(); // Prevent default action (file download)
      openModal(); // Open modal instead
    }
  };
});
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function setCookieDownload(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
// Event listener for form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
  // Set the cookie to true
  setCookie("formSubmitted", "true", 14);
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to check if a cookie exists
  function getCookieForDownload(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  // Check if the cookie "itemForDownload" exists
  const itemForDownload = getCookieForDownload("itemForDownload");
  if (itemForDownload) {
    // Find the element with the ID equal to the cookie value
    const element = document.getElementById(itemForDownload);
    if (element) {
      // Simulate a click event on the element
      element.click();
    }
    // Remove the cookie
    document.cookie =
      "itemForDownload=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
});
