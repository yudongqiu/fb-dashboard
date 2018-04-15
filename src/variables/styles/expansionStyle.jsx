// ##############################
// // // ExpansionPanel styles
// #############################

import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "variables/styles";

const expansionStyle = {
  panel: {
    margin: "10px",
    width: "98%",
  },
  message: {
    color: successColor
  },
  error: {
    color: dangerColor
  },
  warning: {
    color: warningColor
  },
  upArrowCardCategory: {
    width: 14,
    height: 14
  }
};

export default expansionStyle;