function appName() {
  const appName = document.querySelector("#appName");
  appName.addEventListener("input", () => {
    iframe.querySelector(".navbar__title").innerHTML = appName.value;
  });
}

function slideBg() {
  const input = document.querySelector("#slideBg").value;

  iframe.querySelector(".navigation").style.backgroundColor = input;
}

function slideColor() {
  const input = document.querySelector("#slideColor").value;

  iframe.querySelectorAll(".navigation__item").forEach(el => {
    el.style.color = input;
  });
}

function navbarBg() {
  const input = document.querySelector("#navbarBg").value;

  iframe.querySelector(".navbar").style.backgroundColor = input;
}

function navbarColor() {
  const input = document.querySelector("#navbarColor").value;

  iframe.querySelector(".navbar__title").style.color = input;

  iframe.querySelectorAll(".navbar__hamburger-inner").forEach(el => {
    el.style.backgroundColor = input;
  });
}

function slideHeading() {
  const input = document.querySelector("#slideHeading").value;

  iframe.querySelectorAll(".navigation__heading").forEach(el => {
    el.style.color = input;
  });
}

function notificationBg() {
  const input = document.querySelector("#notificationBg").value;

  iframe.querySelectorAll(".notificationbar").forEach(el => {
    el.style.backgroundColor = input;
  });
}

function playButton() {
  const input = document.querySelector("#playButton").value;

  iframe.querySelectorAll(".player-button").forEach(el => {
    el.style.backgroundColor = input;
  });
}

function playButtonIcon() {
  const input = document.querySelector("#playButtonIcon").value;

  iframe.querySelectorAll(".player-button i").forEach(el => {
    el.style.color = input;
  });
}
