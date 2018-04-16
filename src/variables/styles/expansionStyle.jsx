// ##############################
// // // ExpansionPanel styles
// #############################

import {
  container,
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  defaultBoxShadow,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow
} from "variables/styles.jsx";

const expansionStyle = {
  root: {
    ...defaultFont,
    position: "relative",
    padding: "0px",
    lineHeight: "20px",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "3px",
    boxShadow:
      "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
  },
  summary: {
    fontSize: "16px",
  },
  info: {
    backgroundColor: infoColor,
    color: "#ffffff",
    ...infoBoxShadow
  },
  success: {
    backgroundColor: successColor,
    color: "#ffffff",
    ...successBoxShadow
  },
  warning: {
    backgroundColor: warningColor,
    color: "#ffffff",
    ...warningBoxShadow
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#ffffff",
    ...dangerBoxShadow
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#ffffff",
    ...primaryBoxShadow
  },
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%"
  },
  close: {
    width: "14px",
    height: "14px"
  },
  iconButton: {
    width: "24px",
    height: "24px"
  },
  icon: {
    display: "block",
    left: "15px",
    position: "absolute",
    top: "50%",
    marginTop: "-15px",
    width: "30px",
    height: "30px"
  },
  iconMessage: {
    paddingLeft: "65px",
    display: "block"
  }
};

export default expansionStyle;