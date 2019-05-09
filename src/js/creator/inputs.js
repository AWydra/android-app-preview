const appName = () => {
  const appName = document.querySelector("#appName");
  appName.addEventListener("input", () => {
    iframe.querySelector(".navbar__title").innerHTML = appName.value;
  });

  iframe
    ? (iframe.querySelector(".navbar__title").innerHTML = appName.value)
    : "";
};

const slideBg = () => {
  const input = document.querySelector("#slideBg").value;

  iframe.querySelector(".navigation").style.backgroundColor = input;
};

const slideColor = () => {
  const input = document.querySelector("#slideColor").value;

  iframe.querySelectorAll(".navigation__item").forEach(el => {
    el.style.color = input;
  });
};

const navbarBg = () => {
  const input = document.querySelector("#navbarBg").value;

  iframe.querySelector(".navbar").style.backgroundColor = input;
};

const navbarColor = () => {
  const input = document.querySelector("#navbarColor").value;

  iframe.querySelector(".navbar__title").style.color = input;

  iframe.querySelectorAll(".navbar__hamburger-inner").forEach(el => {
    el.style.backgroundColor = input;
  });
};

// const slideHeading = () => {
//   const input = document.querySelector("#slideHeading").value;

//   iframe.querySelectorAll(".navigation__heading").forEach(el => {
//     el.style.color = input;
//   });
// };

const notificationBg = () => {
  const input = document.querySelector("#notificationBg").value;

  iframe.querySelectorAll(".notificationbar").forEach(el => {
    el.style.backgroundColor = input;
  });
};

const playButton = () => {
  const input = document.querySelector("#playButton").value;

  iframe.querySelectorAll(".player-button").forEach(el => {
    el.style.backgroundColor = input;
  });
};

const playButtonIcon = () => {
  const input = document.querySelector("#playButtonIcon").value;

  iframe.querySelectorAll(".player-button i").forEach(el => {
    el.style.color = input;
  });
};

const liveTV = () => {
  const input = document.querySelector("#live-tv");
  const video = iframe.querySelector(".tv__video");
  input.addEventListener("input", ev => {
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(ev.target.value);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.pause();
      });
    }
  });
};
