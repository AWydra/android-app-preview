function appInit() {
  const why = new SimpleBar(document.querySelector("aside"));

  //Menu
  const otterNav = document.querySelector("#otter-nav");
  const otterBtn = document.querySelector("#otter-btn");
  const radioBtn = document.querySelectorAll(".player-button");
  const overlay = document.querySelector(".main-overlay");
  const artistContainer = document.querySelector(".radio__artist");

  // Open navigation
  otterBtn.addEventListener("click", () => {
    otterNav.classList.add("navigation__active");
    overlay.classList.remove("hidden");
  });

  // Click play button
  radioBtn.forEach(el => {
    el.addEventListener("click", function() {
      artistContainer.classList.toggle("fadeInUp");
      artistContainer.classList.toggle("fadeOutDown");
      artistContainer.classList.remove("hidden");
    });
  });

  // Clicko navigation overlay
  overlay.addEventListener("click", () => {
    otterNav.classList.remove("navigation__active");
    overlay.classList.add("hidden");
  });
}

function appNav() {
  const otterNav = document.querySelector("#otter-nav");
  const overlay = document.querySelector(".main-overlay");
  const navItem = document.querySelectorAll(".navigation__item");

  // Close navigation after click item
  navItem.forEach(el => {
    el.addEventListener("click", () => {
      otterNav.classList.remove("navigation__active");
      overlay.classList.add("hidden");
    });
  });
}
