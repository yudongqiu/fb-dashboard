import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid, Hidden } from "material-ui";

import { RegularCard, P, A, ItemGrid } from "components";

import iconsStyle from "variables/styles/iconsStyle";

function ProjectsPage({ ...props }) {
  return (
    <Grid container>
      Page under construction.
    </Grid>
  );
}

ProjectsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(ProjectsPage);
