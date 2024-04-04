$(document).ready(function () {
  AOS.init();
});
window.addEventListener("scroll", function () {
  var heroPreview = document.getElementById("heroPreview");
  var pageWrapper = document.getElementById("page-wrapper");
  var heroBackground = document.getElementById("heroBackground");
  var body = document.getElementsByTagName("body")[0]; // Select the first body element

  function toggleDarkModeClass() {
    var darkContainer = document.querySelector(".dark-container");
    if (!darkContainer) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            body.classList.add("dark-scroll");
          }
          if (!entry.isIntersecting && entry.intersectionRatio <= 0) {
            body.classList.remove("dark-scroll");
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(darkContainer);
  }
  toggleDarkModeClass();

  if (window.scrollY > 50) {
    heroPreview.classList.add("scrolled");
    pageWrapper.classList.remove("preview");
    if (heroBackground) {
      heroBackground.remove();
    }
    body.classList.remove("dark-bg");
  } else {
    pageWrapper.classList.add("preview");
    heroPreview.classList.remove("scrolled");
    body.classList.add("dark-bg");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var closeButton = document.getElementById("heroPreview");

  closeButton.addEventListener("click", function () {
    var heroPreview = document.getElementById("heroPreview");
    heroPreview.classList.add("scrolled");

    var pageWrapper = document.getElementById("page-wrapper");
    pageWrapper.classList.remove("preview");

    closeButton.classList.add("hidden");
    if (heroBackground) {
      heroBackground.remove();
    }
  });
});

var collapsibleButtons = document.querySelectorAll(".collapsible");
collapsibleButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

  function disableBodyScroll() {
    document.body.classList.add('disable-scroll');

    setTimeout(function() {
      document.body.classList.remove('disable-scroll');
      document.getElementById('heroPreview').style.pointerEvents = 'initial';
    }, 3000); 
  }

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  window.onload = function() {
    disableBodyScroll(); 
  };

  window.addEventListener('load', function () {
    document.getElementById('page-wrapper').style.display = 'block';
    document.getElementById('loader-wrapper').style.display = 'none';
});
