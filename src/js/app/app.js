document.addEventListener(
  "DOMContentLoaded",
  () => {
    const why = new SimpleBar(document.querySelector("aside"));

    //Menu
    const otterNav = document.querySelector("#otter-nav");
    const otterBtn = document.querySelector("#otter-btn");
    const radioBtn = document.querySelectorAll(".player-button");
    const overlay = document.querySelector(".main-overlay");
    const navItem = document.querySelectorAll(".navigation__item");
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

    // Close navigation after click item
    navItem.forEach(el => {
      el.addEventListener("click", () => {
        otterNav.classList.remove("navigation__active");
        overlay.classList.add("hidden");
      });
    });

    //Remove chat wigdet
    setTimeout(() => {
      document
        .querySelector("#web iframe")
        .contentDocument.querySelectorAll('iframe[src="about:blank"]')
        .forEach(el => {
          el.remove();
        });
    }, 5000);
  },
  false
);
