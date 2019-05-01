const createStructure = () => {
  const structure = {};

  //General
  structure.general = {};
  structure.general.appName = "appNameValue";
  structure.general.admob = "admobValue";
  structure.general.push = "pushValue";
  structure.general.message = "messageValue";

  //Navigation
  structure.navigation = navStructure;

  //Color
  structure.color = {};
  structure.color.slideBg = "000000";
  structure.color.slideColor = "FFFFFF";
  structure.color.slideHeading = "DDDDDD";
  structure.color.notificationBg = "9C9C9C";
  structure.color.navbarBg = "000000";
  structure.color.navbarColor = "FFFFFF";
  structure.color.playButton = "000000";
  structure.color.playButtonIcon = "FFFFFF";
  structure.color.launchScreenColor = "FFFFFF";

  //Checkbox
  structure.checkbox = {};
  structure.checkbox.menuLogo = "Logo";
  structure.checkbox.coverDisplay = "Fixed Logo";
  structure.checkbox.appLogo = "Logo";
  structure.checkbox.launchScreenLogo = "Upload custom";

  //Image URLs
  structure.image = {};
  structure.image.menuLogoFile = "https://picsum.photos/200/300";
  structure.image.appLogoFile = "https://picsum.photos/300/200";
  structure.image.launchScreenLogoFile = "https://picsum.photos/200/300";

  return structure;
};
