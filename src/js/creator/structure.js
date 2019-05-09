const createStructure = () => {
  const structure = {
    general: {
      appName: "appNameValue",
      admob: "admobValue",
      push: "pushValue",
      message: "messageValue"
    },
    navigation: JSON.parse(
      '[["Home",["ottericon_signal","FastCast4u Radio",""]],["Social Media",["ottericon_fb","Facebook","https://www.facebook.com/"],["icon_line2_social_twitter","Twitter","https://www.twitter.com/"],["ottericon_instagram","Instagram","https://www.instagram.com/"],["icon_line_heart","Best site","https://www.w3.org/"],["icon_line_globe","Example.com","https://www.example.com/"]],["Content",["icon_line2_globe","Your website","https://www.myblog.com/"],["icon_line2_globe","Custom website","https://www.custom.com/"],["ottericon_wordpress","Your wordpress blog","https://www.wordpress.com/"]],["Misc",["icon_line2_settings","Settings",""]]]'
    ),
    color: {
      slideBg: "000000",
      slideColor: "FFFFFF",
      slideHeading: "DDDDDD",
      notificationBg: "9C9C9C",
      navbarBg: "000000",
      navbarColor: "FFFFFF",
      playButton: "000000",
      playButtonIcon: "FFFFFF",
      launchScreenColor: "FFFFFF"
    },
    checkbox: {
      menuLogo: "Logo",
      coverDisplay: "Fixed Logo",
      appLogo: "Logo",
      launchScreenLogo: "Upload custom"
    },
    image: {
      menuLogoFile: "https://picsum.photos/200/300",
      appLogoFile: "https://picsum.photos/300/200",
      launchScreenLogoFile: ""
    }
  };

  return structure;
};
