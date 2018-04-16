import React from "react";
import { withStyles, Grid } from "material-ui";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import { ExpandMore } from "material-ui-icons";
import PropTypes from "prop-types";

import expansionStyle from "variables/styles/expansionStyle";

function Expansion({ ...props }) {
  const { classes, message, details, color, icon } = props;

  return (
    <ExpansionPanel
      classes={{
        root: classes.root + " " + classes[color],
        message: classes.message
      }}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMore />} className={classes.summary}>
        {message}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {details}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

Expansion.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.node.isRequired,
  details: PropTypes.node,
  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
  icon: PropTypes.func,
};

export default withStyles(expansionStyle)(Expansion);
