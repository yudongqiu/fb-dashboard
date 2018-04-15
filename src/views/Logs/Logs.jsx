import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "material-ui";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import { ExpandMore } from "material-ui-icons";
import { ItemGrid } from "components";
import { FormLabel, FormControlLabel } from 'material-ui/Form';

import expansionStyle from "variables/styles/expansionStyle";

function Logs({ ...props }) {
  const { classes } = props;
  const messages = [
    'Stability analyses finished for "Nonbonded Cutoff"',
  ];
  const warnings = [
    'Optimization "SurfTen" has finished',
    'The weight of "density" target might be too low',
    'Objective value increased at iteration 5',
    'Job failed on worker "c5-64"',
  ];
  const errors = [
    'Job 13 failed on c5-64',
    'Job 14 failed on c5-64',
    'Job 15 failed on c5-64',
    'Job 16 failed on c5-64',
  ]
  const messageItems = [];
  messages.forEach((msg) => {
    messageItems.push(
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.message} >{msg}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Details for message...
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  });
  const warningItems = [];
  warnings.forEach((msg) => {
    warningItems.push(
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.warning} >{msg}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Details for warning...
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  });
  const errorItems = [];
  errors.forEach((msg) => {
    errorItems.push(
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.error} >{msg}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Details for error...
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  });
  return (
    <Grid container>
      <Grid item className={classes.panel}>
        <FormLabel>Messages</FormLabel>
        {messageItems}
      </Grid>
      <Grid item className={classes.panel}>
        <FormLabel>Warnings</FormLabel>
        {warningItems}
      </Grid>
      <Grid item className={classes.panel}>
        <FormLabel>Errors</FormLabel>
        {errorItems}
      </Grid>
    </Grid>
  );
}

Logs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(expansionStyle)(Logs);
