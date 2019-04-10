function tabs() {
  const tabLinks = document.querySelectorAll(".tabs");

  tabLinks.forEach(el => {
    el.onclick = function() {
      const target = this.getAttribute("href").replace("#", "");
      const sections = document.querySelectorAll(".tab-content");

      sections.forEach(el => {
        el.style.display = "none";
      });

      document.getElementById(target).style.display = "flex";

      tabLinks.forEach(el => {
        el.classList.remove("is-active");
      });

      this.classList.add("is-active");

      return false;
    };
  });
}
