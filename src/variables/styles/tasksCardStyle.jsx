// ##############################
// // // TasksCard styles
// #############################

import {
  card,
  cardHeader,
  defaultFont,
  primaryBoxShadow
} from "variables/styles";

const tasksCardStyle = theme => ({
  card,
  cardHeader: {
    flex: "none",
    ...cardHeader,
    ...defaultFont,
    padding: "9px 0px 5px 20px",
    background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
    ...primaryBoxShadow
  },
  cardTitle: {
    ...defaultFont,
    float: "left",
    lineHeight: "24px",
    fontSize: "1em",
    color: "#FFFFFF",
    marginLeft: "10px",
  },
  tabWrapper: {
    width: "auto",
    display: "inline-flex",
    alignItems: "inherit",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex"
    }
  },
  tabIcon: {
    float: "left",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-2px"
    }
  },
  displayNone: {
    display: "none"
  },
  labelIcon: {
    height: "44px",
    width: "110px",
    minWidth: "72px",
    paddingLeft: "14px",
    borderRadius: "3px"
  },
  tabsContainer: {
    marginTop: "4px",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      display: "grid"
    }
  },
  tabs: {
    width: "110px",
    minWidth: "70px",
    paddingLeft: "12px"
  },
  cardHeaderContent: {
    flex: "none",
  },
  label: {
    lineHeight: "19px",
    textTransform: "uppercase",
    fontSize: "16px",
    fontWeight: "400",
    marginLeft: "-10px"
  },
  rootInheritSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transition: "background-color .1s .2s"
  }
});

export default tasksCardStyle;
