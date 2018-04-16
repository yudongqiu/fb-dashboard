import React from "react";
import PropTypes from 'prop-types';
import { Grid } from "material-ui";
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText, FormLabel } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { FileUpload } from "material-ui-icons";

import {
  ProfileCard,
  RegularCard,
  Button,
  IconButton,
  CustomInput,
  ItemGrid
} from "components";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    display: 'none',
  },
  formControl: {
    margin: 10,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: 10 * 2,
  },
});

class JobInput extends React.Component {
  state = {
    jobtype: 'optimize',
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  render () {
    const { classes } = this.props;
    const inputForm = (
      <div>
        <Grid container>
            <ItemGrid xs={12} sm={12} md={5}>
              <CustomInput
                labelText="Input Force Field File"
                id="force-field-file"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Job Type"
                id="job-type"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: "Optimize"
                }}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Max Step"
                id="max-step"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: 100
                }}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Penalty Type"
                id="penalty-type"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: "L2"
                }}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Convergence Objective"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: 0.0001
                }}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Convergence Step"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: 0.0001
                }}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Convergence Gradient"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: 0.0001
                }}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Trust Radius"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: 0.15
                }}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Finite Difference h"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: 0.001
                }}
              />
            </ItemGrid>
        </Grid>
      </div>
    )
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={8}>
            <RegularCard
              cardTitle="Job Input"
              cardSubtitle="Water Surface Tension"
              content={inputForm}
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

JobInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobInput);
