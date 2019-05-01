const initConfig = () => {
  appName();
  slideBg();
  slideColor();
  navbarBg();
  navbarColor();
  slideHeading();
  notificationBg();
  playButton();
  playButtonIcon();
};

const loadConfig = config => {
  //General
  for (const key in config.general) {
    document.querySelector(`[name="${key}"]`)
      ? (document.querySelector(`[name="${key}"]`).value = config.general[key])
      : "";
  }

  //Color
  for (const key in config.color) {
    document
      .querySelector(`[name="${key}"]`)
      .jscolor.fromString(config.color[key]);
    slideBg();
  }

  initConfig();
};

const sendConfig = () => {
  const form = document.querySelector("#preview-form");
  const data = new FormData(form);
  data.append("saveOnly", "true");

  jQuery.ajax({
    url: "server.php",
    type: "POST",
    data: data,
    processData: false,
    contentType: false,
    success: function() {
      console.log("Sent");
    }
  });
};
