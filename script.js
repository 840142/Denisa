document.addEventListener("DOMContentLoaded", () => {

  /* SLIDER */
  let current = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
  }

  window.nextSlide = function () {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  window.prevSlide = function () {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  /* TABS */
  window.showTab = function (tabId, event) {

    document.querySelectorAll(".tab-content").forEach(el => {
      el.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("active");

    document.querySelectorAll(".menu-item").forEach(el => {
      el.classList.remove("active");
    });

    if (event && event.currentTarget) {
      event.currentTarget.classList.add("active");
    }

  };

});
