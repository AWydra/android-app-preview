function navOtter() {
  iframe.querySelectorAll(".navigation__category").forEach(child => {
    child.remove();
  });

  document.querySelectorAll(".otter-sort-container > .navy").forEach(el => {
    const section = document.createElement("section");
    const hr = document.createElement("hr");
    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");
    const heading = el.querySelector(".section-heading").value;
    const children = el.querySelectorAll(".otter-sort-item > .navy");

    h2.classList.add("navigation__heading");
    h2.innerHTML = heading;

    section.classList.add("navigation__category");
    section.appendChild(hr);
    section.appendChild(h2);

    children.forEach(el => {
      const li = document.createElement("li");
      const anchor = document.createElement("a");
      const icon = document.createElement("i");
      const h3 = document.createElement("h3");
      const iconClass = el.querySelector(".iconpicker-select").value;
      const name = el.querySelector(".item-name").value;
      const url = el.querySelector(".item-url").value;
      const tabs = el.getAttribute("data-tabs");

      icon.classList.add("navigation__icon", iconClass);

      h3.innerHTML = name;
      h3.classList.add("navigation__item-heading");
      anchor.classList.add("navigation__item", "tabs");
      anchor.setAttribute("href", tabs);

      anchor.appendChild(icon);
      anchor.appendChild(h3);
      li.appendChild(anchor);
      ul.appendChild(li);
    });
    section.appendChild(ul);
    iframe.querySelector(".navigation__menu").appendChild(section);
  });

  //Event listeners

  const sortList = document.querySelectorAll(".navy");
  const sortInput = document.querySelectorAll(".otter-sort-container input");

  sortList.forEach(el => {
    el.addEventListener("dragend", navOtter);
    slideColor();
    slideHeading();
    iframeWindow.appNav();
    iframeWindow.tabs();
  });

  sortInput.forEach(el => {
    el.addEventListener("keyup", navOtter);
  });
}
