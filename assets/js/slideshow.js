function Slider() {
  const carouselSlides = document.querySelectorAll(".slide");
  const btnPrev = document.querySelector(".prev");
  const btnNext = document.querySelector(".nextt");
  const dotsSlide = document.querySelector(".slider");
  let currentSlide = 0;
  let startX;

  const activeDot = function (slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  };
  activeDot(currentSlide);

  const changeSlide = function (slides) {
    carouselSlides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${100 * (index - slides)}%)`)
    );
  };
  changeSlide(currentSlide);

  btnNext.addEventListener("click", function () {
    currentSlide++;
    if (carouselSlides.length - 1 < currentSlide) {
      currentSlide = 0;
    }
    changeSlide(currentSlide);
    activeDot(currentSlide);
  });
  btnPrev.addEventListener("click", function () {
    if (currentSlide === 0) {
      currentSlide = carouselSlides.length - 1;
    } else {
      currentSlide--;
    }
    changeSlide(currentSlide);
    activeDot(currentSlide);
  });

  dotsSlide.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot")) {
      const slide = e.target.dataset.slide;
      changeSlide(slide);
      activeDot(slide);
    }
  });

  // Touch event handling
  let isDragging = false;
  let touchStartX = 0;

  dotsSlide.addEventListener("touchstart", (e) => {
    isDragging = false;
    touchStartX = e.touches[0].clientX;
  });

  dotsSlide.addEventListener("touchmove", (e) => {
    const touchMoveX = e.touches[0].clientX;
    const distanceX = touchMoveX - touchStartX;
    const threshold = 50; // adjust as needed

    if (Math.abs(distanceX) > threshold) {
      isDragging = true;
      // Prevent body scrolling
      e.preventDefault();
    }
  });

  dotsSlide.addEventListener("touchend", (e) => {
    if (isDragging) {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchEndX < touchStartX) {
        // Swipe left
        currentSlide++;
        if (currentSlide >= carouselSlides.length) {
          currentSlide = 0;
        }
      } else {
        // Swipe right
        currentSlide--;
        if (currentSlide < 0) {
          currentSlide = carouselSlides.length - 1;
        }
      }
      changeSlide(currentSlide);
      activeDot(currentSlide);
    }
  });
}

Slider();

function setSliderHeight() {
  var slider = document.querySelector(".slider");
  var firstImg = slider.querySelector("img");
  var imgHeight = firstImg.clientHeight;

  slider.style.height = imgHeight + "px";
}

function setSliderHeightInitial() {
  setTimeout(function () {
    var slider = document.querySelector(".slider");
    var firstImg = slider.querySelector("img");
    var imgHeight = firstImg.clientHeight;
    slider.style.height = imgHeight + "px";
  }, 3000);
}

function adjustImageSrcForMobile() {
  if (window.innerWidth < 768) {
    var images = document.querySelectorAll(".slider img");
    images.forEach(function (image) {
      var src = image.getAttribute("src");
      if (src.endsWith(".jpg") && !src.includes("-mobile")) {
        var newSrc = src.replace(".jpg", "-mobile.jpg");
        image.setAttribute("src", newSrc);
      }
    });
  } else {
    var images = document.querySelectorAll(".slider img");
    images.forEach(function (image) {
      var src = image.getAttribute("src");

      if (src.includes("-mobile")) {
        var newSrc = src.replace("-mobile.jpg", ".jpg");
        image.setAttribute("src", newSrc);
      }
    });
  }
  setSliderHeight();
}

window.addEventListener("load", function () {
  adjustImageSrcForMobile();
  setSliderHeightInitial();
});

window.addEventListener("resize", adjustImageSrcForMobile);
window.addEventListener("resize", setSliderHeight);
