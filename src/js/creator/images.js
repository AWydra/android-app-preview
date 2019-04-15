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
        fileContainer.style.pointerEvents = "all";
        fileContainer.style.opacity = 1;
      } else {
        fileContainer.style.pointerEvents = "none";
        fileContainer.style.opacity = 0;
      }
    });
  });
};

const coverInput = () => {
  const logoCheckbox = document.querySelectorAll('[name="coverDisplay"]');
  const fileInput = document.querySelector('[name="coverDisplayFile"]');
  const fileContainer = fileInput.offsetParent.offsetParent.parentElement;

  fileContainer.style.opacity = 0;

  logoCheckbox.forEach(el => {
    el.addEventListener("change", () => {
      if (logoCheckbox[1].checked) {
        fileContainer.style.opacity = 1;
        fileContainer.style.pointerEvents = "all";
      } else if (logoCheckbox[0].checked) {
        iframe
          .querySelector("#radio")
          .classList.remove("fixed-bg", "custom-bg");
        fileContainer.style.opacity = 0;
        fileContainer.style.pointerEvents = "none";
        $('[name="coverDisplayFile"]').fileinput("clear");
      } else {
        iframe.querySelector("#radio").classList.add("fixed-bg");
        iframe.querySelector("#radio").classList.remove("custom-bg");
        fileContainer.style.opacity = 0;
        fileContainer.style.pointerEvents = "none";
        $('[name="coverDisplayFile"]').fileinput("clear");
      }
    });
  });
};
