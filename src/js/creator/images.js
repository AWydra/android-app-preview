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
  const fileInput = document.querySelector('[name="menuLogoFile"]');
  const fileContainer = fileInput.offsetParent.offsetParent.parentElement;

  logoCheckbox.forEach(el => {
    el.addEventListener("change", () => {
      if (logoCheckbox[0].checked) {
        iframe.querySelector(".navigation__img").style.display = "block";
        fileContainer.classList.remove("hidden");
        fileInput.setAttribute("required", "");
      } else {
        iframe.querySelector(".navigation__img").style.display = "none";
        fileContainer.classList.add("hidden");
        fileInput.removeAttribute("required", "");
      }
    });
  });
};

const coverInput = () => {
  const logoCheckbox = document.querySelectorAll('[name="coverDisplay"]');
  const fileInput = document.querySelector('[name="coverDisplayFile"]');
  const fileContainer = fileInput.offsetParent.offsetParent.parentElement;

  fileContainer.classList.add("hidden");

  logoCheckbox.forEach(el => {
    el.addEventListener("change", () => {
      if (logoCheckbox[1].checked) {
        fileContainer.classList.remove("hidden");
        fileInput.setAttribute("required", "");
      } else if (logoCheckbox[0].checked) {
        iframe
          .querySelector("#radio")
          .classList.remove("fixed-bg", "custom-bg");
        fileContainer.classList.add("hidden");
        $('[name="coverDisplayFile"]').fileinput("clear");
        fileInput.removeAttribute("required", "");
      } else {
        iframe.querySelector("#radio").classList.add("fixed-bg");
        iframe.querySelector("#radio").classList.remove("custom-bg");
        fileContainer.classList.add("hidden");
        $('[name="coverDisplayFile"]').fileinput("clear");
        fileInput.removeAttribute("required", "");
      }
    });
  });
};

const appInput = () => {
  const logoCheckbox = document.querySelectorAll('[name="appLogo"]');
  const fileInput = document.querySelector('[name="appLogoFile"]');
  const fileContainer = fileInput.offsetParent.offsetParent.parentElement;

  logoCheckbox.forEach(el => {
    el.addEventListener("change", () => {
      if (logoCheckbox[0].checked) {
        fileContainer.classList.remove("hidden");
        fileInput.setAttribute("required", "");
      } else {
        fileContainer.classList.add("hidden");
        fileInput.removeAttribute("required", "");
      }
    });
  });
};

const launchScreenLogo = () => {
  const logoCheckbox = document.querySelectorAll('[name="launchScreenLogo"]');
  const fileInput = document.querySelector('[name="launchScreenLogoFile"]');
  const fileContainer = fileInput.offsetParent.offsetParent.parentElement;

  logoCheckbox.forEach(el => {
    el.addEventListener("change", () => {
      if (logoCheckbox[0].checked) {
        fileContainer.classList.remove("hidden");
        fileInput.setAttribute("required", "");
      } else {
        fileContainer.classList.add("hidden");
        fileInput.removeAttribute("required", "");
      }
    });
  });
};
