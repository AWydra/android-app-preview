const makeImg = (input, destination, bg) => {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(ev) {
      if (bg) {
        iframe.querySelector(destination).style.backgroundImage = `url(${
          ev.target.result
        })`;
        iframe
          .querySelector(destination)
          .classList.add("fixed-bg", "custom-bg");
      } else {
        iframe.querySelector(destination).setAttribute("src", ev.target.result);
      }
    };

    reader.readAsDataURL(input.files[0]);
  }
};

const logoInput = () => {
  const logoCheckbox = document.querySelectorAll('[name="menuLogo"]');
  const logoUrlInput = document.querySelector(
    'input[type="url"][name="menuLogoFile"]'
  );
  const fileInput = document.querySelector(
    'input[type="file"][name="menuLogoFile"]'
  );
  const fileContainer = fileInput.offsetParent
    ? fileInput.offsetParent.offsetParent.parentElement
    : document.createElement("div");

  logoCheckbox.forEach(el => {
    el.addEventListener("change", () => {
      if (logoCheckbox[0].checked) {
        iframe.querySelector(".navigation__img").style.display = "block";
        iframe.querySelector(".navigation__img img").src = "";
        $('[type="file"][name="menuLogoFile"]').fileinput("clear");
        fileContainer.classList.remove("hidden");
        logoUrlInput.classList.add("hidden");
        fileInput.setAttribute("required", "");
        fileInput.removeAttribute("disabled");
        logoUrlInput.setAttribute("disabled", "");
      } else if (logoCheckbox[1].checked) {
        iframe.querySelector(".navigation__img").style.display = "block";
        iframe.querySelector(".navigation__img img").src = "";
        fileContainer.classList.add("hidden");
        fileInput.removeAttribute("required", "");
        logoUrlInput.classList.remove("hidden");
        logoUrlInput.value = "";
        logoUrlInput.setAttribute("required", "");
        logoUrlInput.removeAttribute("disabled");
        fileInput.setAttribute("disabled", "");
      } else {
        iframe.querySelector(".navigation__img").style.display = "none";
        fileContainer.classList.add("hidden");
        logoUrlInput.classList.add("hidden");
        logoUrlInput.setAttribute("disabled", "");
        logoUrlInput.removeAttribute("required");
        fileInput.removeAttribute("required");
        fileInput.setAttribute("disabled", "");
      }
    });
  });
};

const coverInput = () => {
  const logoCheckbox = document.querySelectorAll('[name="coverDisplay"]');
  const logoUrlInput = document.querySelector(
    'input[type="url"][name="coverDisplayFile"]'
  );
  const fileInput = document.querySelector(
    'input[type="file"][name="coverDisplayFile"]'
  );
  const fileContainer = fileInput.offsetParent
    ? fileInput.offsetParent.offsetParent.parentElement
    : document.createElement("div");

  fileContainer.classList.add("hidden");

  logoCheckbox.forEach(el => {
    el.addEventListener("change", () => {
      if (logoCheckbox[1].checked) {
        fileContainer.classList.remove("hidden");
        fileInput.setAttribute("required", "");
        fileInput.removeAttribute("disabled");
        logoUrlInput.classList.add("hidden");
        logoUrlInput.setAttribute("disabled", "");
      } else if (logoCheckbox[0].checked) {
        iframe
          .querySelector("#radio")
          .classList.remove("fixed-bg", "custom-bg");
        fileContainer.classList.add("hidden");
        $('[type="file"][name="coverDisplayFile"]').fileinput("clear");
        fileInput.removeAttribute("required");
        fileInput.setAttribute("disabled", "");
        logoUrlInput.classList.add("hidden");
        logoUrlInput.setAttribute("disabled", "");
      } else if (logoCheckbox[2].checked) {
        iframe.querySelector("#radio").classList.add("fixed-bg", "custom-bg");
        fileContainer.classList.add("hidden");
        $('[type="file"][name="coverDisplayFile"]').fileinput("clear");
        fileInput.removeAttribute("required");
        fileInput.setAttribute("disabled", "");
        logoUrlInput.classList.remove("hidden");
        logoUrlInput.setAttribute("required", "");
        logoUrlInput.removeAttribute("disabled");
      } else {
        iframe.querySelector("#radio").classList.add("fixed-bg");
        iframe.querySelector("#radio").classList.remove("custom-bg");
        fileContainer.classList.add("hidden");
        $('[type="file"][name="coverDisplayFile"]').fileinput("clear");
        fileInput.removeAttribute("required");
        fileInput.setAttribute("disabled", "");
        logoUrlInput.classList.add("hidden");
        logoUrlInput.setAttribute("disabled", "");
        logoUrlInput.removeAttribute("required");
      }
    });
  });
};

const appInput = () => {
  const logoCheckbox = document.querySelectorAll('[name="appLogo"]');
  const logoUrlInput = document.querySelector(
    'input[type="url"][name="appLogoFile"]'
  );
  const fileInput = document.querySelector(
    'input[type="file"][name="appLogoFile"]'
  );
  const fileContainer = fileInput.offsetParent
    ? fileInput.offsetParent.offsetParent.parentElement
    : document.createElement("div");

  logoCheckbox.forEach(el => {
    el.addEventListener("change", () => {
      if (logoCheckbox[0].checked) {
        fileContainer.classList.remove("hidden");
        fileInput.setAttribute("required", "");
        fileInput.removeAttribute("disabled");
        logoUrlInput.classList.add("hidden");
        logoUrlInput.setAttribute("disabled", "");
      } else if (logoCheckbox[1].checked) {
        fileContainer.classList.add("hidden");
        fileInput.removeAttribute("required");
        fileInput.setAttribute("disabled", "");
        logoUrlInput.classList.remove("hidden");
        logoUrlInput.setAttribute("required", "");
        logoUrlInput.removeAttribute("disabled");
      } else {
        fileContainer.classList.add("hidden");
        fileInput.removeAttribute("required");
        fileInput.setAttribute("disabled", "");
        logoUrlInput.classList.add("hidden");
        logoUrlInput.setAttribute("disabled", "");
        logoUrlInput.removeAttribute("required");
      }
    });
  });
};

const launchScreenLogo = () => {
  const logoCheckbox = document.querySelectorAll('[name="launchScreenLogo"]');
  const logoUrlInput = document.querySelector(
    'input[type="url"][name="launchScreenLogoFile"]'
  );
  const fileInput = document.querySelector(
    'input[type="file"][name="launchScreenLogoFile"]'
  );
  const fileContainer = fileInput.offsetParent
    ? fileInput.offsetParent.offsetParent.parentElement
    : document.createElement("div");

  logoCheckbox.forEach(el => {
    el.addEventListener("change", () => {
      if (logoCheckbox[0].checked) {
        fileContainer.classList.remove("hidden");
        fileInput.setAttribute("required", "");
        fileInput.removeAttribute("disabled");
        logoUrlInput.classList.add("hidden");
        logoUrlInput.setAttribute("disabled", "");
      } else if (logoCheckbox[1].checked) {
        fileContainer.classList.add("hidden");
        fileInput.removeAttribute("required");
        fileInput.setAttribute("disabled", "");
        logoUrlInput.classList.remove("hidden");
        logoUrlInput.setAttribute("required", "");
        logoUrlInput.removeAttribute("disabled");
      } else {
        fileContainer.classList.add("hidden");
        fileInput.removeAttribute("required");
        fileInput.setAttribute("disabled", "");
        logoUrlInput.classList.add("hidden");
        logoUrlInput.setAttribute("disabled", "");
        logoUrlInput.removeAttribute("required");
      }
    });
  });
};
