import React from "react";
import PropTypes from "prop-types";
import { ItemGrid, Expansion } from "components";
import { Grid } from "material-ui";
import { FormLabel, FormControlLabel } from 'material-ui/Form';

function Logs({ ...props }) {
  const { classes } = props;
  const messages = [
    'Worker c6-42 connected',
    'Stability analyses finished for "Nonbonded Cutoff"',
  ];
  const warnings = [
    'Optimization "SurfTen" has finished',
    'The weight of "density" target might be too low',
    'Objective value increased at iteration 5',
    'Job failed on worker "c5-64"',
  ];
  const errors = [
    'Job 13 failed on worker c5-64',
    'Job 14 failed on worker c5-64',
    'Job 15 failed on worker c5-64',
    'Job 16 failed on worker c5-64',
  ]
  const messageItems = [];
  messages.forEach((msg) => {
    messageItems.push(
      <Expansion
        message={msg}
        details={"Message details..."}
        color="success"
      />
    );
  });
  const warningItems = [];
  warnings.forEach((msg) => {
    warningItems.push(
      <Expansion
        message={msg}
        details={"Warning details..."}
        color="warning"
      />
    );
  });
  const errorItems = [];
  errors.forEach((msg) => {
    errorItems.push(
      <Expansion
        message={msg}
        details={"Error details..."}
        color="danger"
      />
    );
  });
  return (
    <Grid container>
      <ItemGrid xs={12}>
        Messages
        {messageItems}
      </ItemGrid>
      <ItemGrid xs={12}>
        Warnings
        {warningItems}
      </ItemGrid>
      <ItemGrid xs={12}>
        Errors
        {errorItems}
      </ItemGrid>
    </Grid>
  );
}

Logs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Logs;
