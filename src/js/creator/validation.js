let textInputs;
let imageInputs;

const validation = () => {
  textInputs = document
    .querySelector("main")
    .querySelectorAll(
      'input:not([type="file"]):not(.hidden):not([type="hidden"]):not([disabled]):not(.file-caption-name):not(.icons-search-input)'
    );

  document
    .querySelectorAll("input")
    .forEach(el => el.classList.remove("bad-validation"));
  document
    .querySelectorAll(".input-group")
    .forEach(el => el.classList.remove("bad-validation-img"));

  textInputs.forEach(el => {
    if (!el.checkValidity() || el.value.length == 0 || el.value.includes('example')) {
      el.classList.add("bad-validation");
    }
  });

  imageInputs = document.querySelectorAll(".image-input");
  imageInputs.forEach(el => {
    const parent = el.offsetParent
      ? el.offsetParent.offsetParent
      : document.createElement("div");

    if (!el.checkValidity()) {
      parent.classList.add("bad-validation-img");
    }
  });

  const textInputsLength = document.querySelectorAll(".bad-validation").length;
  const imageInputsLength = document.querySelectorAll(".bad-validation-img")
    .length;
  if (textInputsLength || imageInputsLength) {
    return false;
  } else {
    return true;
  }
};

const validationListeners = ev => {
  if (!ev.target.checkValidity() || ev.target.value === 0 || ev.target.value.includes('example')) {
    ev.target.classList.add("bad-validation");
  } else {
    ev.target.classList.remove("bad-validation");
  }
};
