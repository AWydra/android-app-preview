const addSection = ev => {
  ev.preventDefault();
  const btn = ev.target;
  const parent = btn.parentNode;
  const addBtn = document.createElement("button");
  const removeBtn = document.createElement("button");
  const ul = parent.parentNode;
  const li = document.createElement("li");
  li.classList.add("p1", "mb1", "navy", "bg-yellow", "position-relative");
  li.innerHTML = `
  <h4><input class="section-heading" type="text" value="Your section"></h4>
  <ul class="otter-sort-item js-sortable sortable list list-reset" aria-dropeffect="move">
    <li class="navigation__btn">
    </li>
  </ul>`;

  addBtn.classList.add("item-add", "button", "button-rounded", "button-small");
  addBtn.textContent = `Add More`;
  addBtn.addEventListener("click", addItem);
  li.querySelector(".navigation__btn").appendChild(addBtn);

  removeBtn.classList.add("remove");
  removeBtn.innerHTML = `<i class="icon-line-circle-cross"></i>`;
  removeBtn.addEventListener("click", removeSection);

  li.insertBefore(removeBtn, li.firstChild);
  ul.insertBefore(li, parent);

  sortable(".otter-sort-container", {
    forcePlaceholderSize: true,
    placeholderClass: "ph-class",
    hoverClass: "bg-maroon yellow"
  });

  sortable(".otter-sort-item", {
    forcePlaceholderSize: true,
    placeholderClass: "ph-class",
    hoverClass: "bg-maroon yellow",
    acceptFrom: ".otter-sort-item"
  });

  navOtter();
  parent.setAttribute("draggable", "false");
};

function removeSection(ev) {
  ev.preventDefault();
  const btn = this;
  const parent = btn.parentNode;
  parent.remove();
  navOtter();
}

const addItem = ev => {
  ev.preventDefault();
  const btn = ev.target;
  const parent = btn.parentNode;
  const removeBtn = document.createElement("button");
  const ul = parent.parentNode;
  const li = document.createElement("li");
  li.classList.add(
    "p1",
    "mb1",
    "navy",
    "bg-yellow",
    "row",
    "position-relative"
  );
  li.innerHTML = `<div class="form-group col-2 m-0">
                  <select class="iconpicker-select">
                    <option value="hidden">No icon</option>
                    <option>otterIcon-signal</option>
                    <option>otterIcon-tv</option>
                    <option>otterIcon-fb</option>
                    <option>otterIcon-tv</option>
                    <option>icon-line2-social-twitter</option>
                    <option>otterIcon-instagram</option>
                    <option>icon-line2-globe</option>
                    <option>otterIcon-wordpress</option>
                    <option>icon-line2-settings</option>
                    <option>icon-line-bell</option>
                    <option>icon-bell</option>
                    <option>icon-line2-bell</option>
                    <option>icon-line-video</option>
                    <option>icon-line-heart</option>
                    <option selected>icon-heart2</option>
                    <option>icon-line-microphone</option>
                    <option>icon-microphone</option>
                    <option>icon-microphone2</option>
                    <option>icon-line-download</option>
                    <option>icon-line-globe</option>
                    <option>icon-line-bar-graph</option>
                    <option>icon-comment</option>
                    <option>icon-location</option>
                    <option>icon-call</option>
                    <option>icon-line-star</option>
                    <option>icon-line2-star</option>
                    <option>icon-star3</option>
                    <option>icon-home2</option>
                    <option>icon-play</option>
                    <option>icon-play-sign</option>
                    <option>icon-line2-control-play</option>
                    <option>icon-googleplay</option>
                    <option>icon-line-play</option>
                    <option>icon-share</option>
                    <option>icon-line-share</option>
                    <option>icon-share2</option>
                  </select>
                </div>
                <div class="form-group col-5 m-0">
                  <label class="text-white d-block m-0">Name: </label>
                  <input class="item-name w-100" type="text" value="Your item" />
                </div>
                <div class="form-group col-5 m-0">
                  <label class="text-white d-block m-0">URL: </label>
                  <input
                    class="item-url w-100"
                    type="url"
                    placeholder="URL"
                  />
                </div>`;

  removeBtn.classList.add("remove", "remove--item");
  removeBtn.innerHTML = `<i class="icon-line-circle-cross"></i>`;
  removeBtn.addEventListener("click", removeSection);
  li.appendChild(removeBtn);
  ul.insertBefore(li, parent);

  sortable(".otter-sort-item", {
    forcePlaceholderSize: true,
    placeholderClass: "ph-class",
    hoverClass: "bg-maroon yellow",
    acceptFrom: ".otter-sort-item"
  });

  $(".iconpicker-select")
    .fontIconPicker({
      emptyIcon: false
    })
    .on("change", () => {
      navOtter();
    });
  zIndex();
  navOtter();
};
