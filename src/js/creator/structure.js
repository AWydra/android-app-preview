const createStructure = () => {
  const structure = {};

  //General
  structure.appName = "Cośtam";
  structure.admob = "";
  structure.push = "";
  structure.message = "";

  //Navigation
  structure.navigation = navStructure;

  //Color
  structure.color = {};
  structure.color.slideBg = "";
  structure.color.slideColor = "";
  structure.color.slideHeading = "";
  structure.color.notificationBg = "";
  structure.color.navbarBg = "";
  structure.color.navbarColor = "";
  structure.color.playButton = "";
  structure.color.playButtonIcon = "";
  structure.color.launchScreenColor = "";

  //Checkbox
  structure.checkbox = {};
  structure.checkbox.menuLogo = "";
  structure.checkbox.coverDisplay = "";
  structure.checkbox.appLogo = "";
  structure.checkbox.launchScreenLogo = "";

  //Image URLs
  structure.image = {};
  structure.image.menuLogoFile = "";
  structure.image.appLogoFile = "";
  structure.image.launchScreenLogoFile = "";

  return structure;
};
