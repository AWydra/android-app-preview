const initConfig = () => {
  appName();
  slideBg();
  slideColor();
  navbarBg();
  navbarColor();
  //slideHeading();
  notificationBg();
  playButton();
  playButtonIcon();
  menuLogoUrl();
  coverDisplayUrl();
};

const loadConfig = config => {
  //Remove navigation
  document
    .querySelectorAll(".otter-sort-container > .navy")
    .forEach(el => el.remove());

  //General
  for (const key in config.general) {
    const selector = document.querySelector(`[name="${key}"]`);
    selector ? (selector.value = config.general[key]) : "";
  }

  //Color
  for (const key in config.color) {
    document
      .querySelector(`[name="${key}"]`)
      .jscolor.fromString(config.color[key]);
    slideBg();
  }

  //Checkbox
  for (const key in config.checkbox) {
    if (config.checkbox[key].includes("upload")) {
      const input = config.checkbox[key].replace("upload", "url");
      document.querySelector(`[value="${input}"]`).click();
    } else {
      document.querySelector(`[value="${config.checkbox[key]}"]`).click();
    }
  }

  //Image
  for (const key in config.image) {
    document.querySelector(`[type="url"][name="${key}"]`).value =
      config.image[key];
  }

  //Navigation
  config.navigation = JSON.parse(config.navigation);
  const navContainer = document.querySelector(".otter-sort-container");
  const navContainerBtn = document.querySelector(
    ".otter-sort-container > .navigation__btn"
  );
  config.navigation.forEach(el => {
    const addBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    const li = document.createElement("li");
    li.classList.add("p1", "mb1", "navy", "bg-yellow", "position-relative");
    li.innerHTML = `
  <h4><input class="section-heading" type="text" value="${
    el[0]
  }" required /></h4>
  <ul class="otter-sort-item js-sortable sortable list list-reset" aria-dropeffect="move">
    <li class="navigation__btn">
    </li>
  </ul>`;

    addBtn.classList.add(
      "item-add",
      "button",
      "button-rounded",
      "button-small"
    );
    addBtn.textContent = `Add More`;
    addBtn.addEventListener("click", addItem);
    li.querySelector(".navigation__btn").appendChild(addBtn);

    removeBtn.classList.add("remove");
    removeBtn.innerHTML = `<i class="icon-line-circle-cross"></i>`;
    removeBtn.addEventListener("click", removeSection);

    li.insertBefore(removeBtn, li.firstChild);
    navContainer.insertBefore(li, navContainerBtn);

    sortable(".otter-sort-container", {
      forcePlaceholderSize: true,
      placeholderClass: "ph-class",
      hoverClass: "bg-maroon yellow",
      items: ":not(.navigation__btn)"
    });

    sortable(".otter-sort-item", {
      forcePlaceholderSize: true,
      placeholderClass: "ph-class",
      hoverClass: "bg-maroon yellow",
      acceptFrom: ".otter-sort-item",
      items: ":not(.navigation__btn)"
    });

    const navItemContainer = li.querySelector(".otter-sort-item");
    const navItemContainerBtn = li.querySelector(
      ".otter-sort-item > .navigation__btn"
    );

    el.forEach((el, i) => {
      if (i === 0) return;
      const removeBtn = document.createElement("button");
      const li = document.createElement("li");
      li.classList.add(
        "p1",
        "mb1",
        "navy",
        "bg-yellow",
        "row",
        "position-relative"
      );
      li.setAttribute("data-tabs", el[3]);
      li.innerHTML = `<div class="form-group col-2 m-0">
                  <select class="iconpicker-select">
                    <option data-value="hidden" value="hidden">No icon</option>
                    <option data-value="ottericon_signal">otterIcon-signal</option>
                    <option data-value="ottericon_tv">otterIcon-tv</option>
                    <option data-value="ottericon_fb">otterIcon-fb</option>
                    <option data-value="icon_line2_social_twitter">icon-line2-social-twitter</option>
                    <option data-value="ottericon_instagram">otterIcon-instagram</option>
                    <option data-value="icon_line2_globe">icon-line2-globe</option>
                    <option data-value="ottericon_wordpress">otterIcon-wordpress</option>
                    <option data-value="icon_line2_settings">icon-line2-settings</option>
                    <option data-value="icon_line_bell">icon-line-bell</option>
                    <option data-value="icon_bell">icon-bell</option>
                    <option data-value="icon_line2_bell">icon-line2-bell</option>
                    <option data-value="icon_line_video">icon-line-video</option>
                    <option data-value="icon_line_heart">icon-line-heart</option>
                    <option data-value="icon_heart2">icon-heart2</option>
                    <option data-value="icon_line_microphone">icon-line-microphone</option>
                    <option data-value="icon_microphone">icon-microphone</option>
                    <option data-value="icon_microphone2">icon-microphone2</option>
                    <option data-value="icon_line_download">icon-line-download</option>
                    <option data-value="icon_line_globe">icon-line-globe</option>
                    <option data-value="icon_line_bar_graph">icon-line-bar-graph</option>
                    <option data-value="icon_comment">icon-comment</option>
                    <option data-value="icon_location">icon-location</option>
                    <option data-value="icon_call">icon-call</option>
                    <option data-value="icon_line_star">icon-line-star</option>
                    <option data-value="icon_line2_star">icon-line2-star</option>
                    <option data-value="icon_star3">icon-star3</option>
                    <option data-value="icon_home2">icon-home2</option>
                    <option data-value="icon_play">icon-play</option>
                    <option data-value="icon_play_sign">icon-play-sign</option>
                    <option data-value="icon_line2_control_play">icon-line2-control-play</option>
                    <option data-value="icon_googleplay">icon-googleplay</option>
                    <option data-value="icon_line_play">icon-line-play</option>
                    <option data-value="icon_share">icon-share</option>
                    <option data-value="icon_line_share">icon-line-share</option>
                    <option data-value="icon_share2">icon-share2</option>
                  </select>
                </div>
                <div class="form-group col-12 col-sm-5 mt-3 m-sm-0">
                  <label class="text-white d-block m-0">Name: </label>
                  <input class="item-name w-100" type="text" value="${
                    el[1]
                  }" required />
                </div>
                <div class="form-group col-12 col-sm-5 mt-3 m-sm-0">
                  <label class="text-white d-block m-0">URL </label>
                  <input
                    class="item-url w-100"
                    type="url"
                    placeholder="http://www.example.com"
                    value="${
                      el[2] === "Settings" || el[2] === "Your radio"
                        ? el[2]
                        : "http://www.example.com"
                    }"
                    ${
                      el[2] === "Settings" || el[2] === "Your radio"
                        ? "readonly"
                        : "required"
                    }
                  />
                </div>`;
      li.querySelector(`option[data-value="${el[0]}"]`).setAttribute(
        "selected",
        ""
      );

      removeBtn.classList.add("remove", "remove--item");
      removeBtn.innerHTML = `<i class="icon-line-circle-cross"></i>`;
      removeBtn.addEventListener("click", removeSection);
      li.appendChild(removeBtn);
      navItemContainer.insertBefore(li, navItemContainerBtn);

      sortable(".otter-sort-item", {
        forcePlaceholderSize: true,
        placeholderClass: "ph-class",
        hoverClass: "bg-maroon yellow",
        acceptFrom: ".otter-sort-item",
        items: ":not(.navigation__btn)"
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
    });
    zIndex();
    navOtter();
  });

  initConfig();
};

const sendConfig = ev => {
  ev.preventDefault();

  const form = document.querySelector("#preview-form");
  const data = new FormData(form);
  data.append("saveOnly", "true");

  $.ajax({
    url: "server.php",
    type: "POST",
    data: data,
    processData: false,
    contentType: false,
    beforeSend: function() {
      $("#save-config").attr("disabled", true);
      $("#save-config").css("background-color", "#6aa5cc");
    },
    success: function() {
      $("#save-config").removeAttr("disabled", "");
      $("#save-config").css("background-color", "#2e8ece");
    }
  }).done(function(res) {
    const content = `<div class=\"alert alert-secondary mb-2\">${res.replace(
      /['"]/g,
      ""
    )}</div>You may use the Token to load your App project after you leave the Creator`;

    Swal.fire({
      title: "Copy & Save your App Project Token",
      html: content,
      type: "info",
      showCancelButton: true,
      confirmButtonText: "Send token via mail",
      cancelButtonText: "Close"
    }).then(result => {
      if (result.value) {
        const email = showCookie("customer_email");
        const token = showCookie("app_creator_token");

        $.get("//fastcast4u.com/app-creator/api/sendTokenViaEmail.php", {
          email: email,
          token: token
        })
          .done(function() {
            Swal.fire({
              title: "Email Sent",
              html: `Unique Token of your App Creator Project has been sent to: <b>${email}</b>. <br> You will be able to load your App Project using the token from the email`,
              type: "success"
            });
          })
          .fail(function(error) {
            Swal.fire({
              title: "Email has not been sent",
              type: "error"
            });
            Swal.showValidationMessage(`Request failed: ${error.responseText}`);
          });
      }
    });
  });
};
