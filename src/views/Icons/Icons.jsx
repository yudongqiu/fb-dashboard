import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, Hidden } from "material-ui";

import { RegularCard, P, A, ItemGrid } from "components";

import iconsStyle from "variables/styles/iconsStyle";

function Icons({ ...props }) {
  return (
    <Grid container>
      Page under construction.
    </Grid>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
