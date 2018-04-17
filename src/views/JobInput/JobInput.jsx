import React from "react";
import PropTypes from 'prop-types';
import { Grid } from "material-ui";
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText, FormLabel } from 'material-ui/Form';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import { FileUpload } from "material-ui-icons";
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';

import {
  ProfileCard,
  RegularCard,
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
    paddingBottom: "10px",
    margin: "27px 0 0 0",
    position: "relative"
  },
  labelRoot: {
    color: "#999999",
    fontWeight: "400",
    fontSize: "16px",
    whiteSpace: "nowrap",
    lineHeight: "1.42857"
  },
});

class JobInput extends React.Component {
  state = {
    filename: '',
    jobType: 'optimize',
    maxStep: 100,
    penType: 'L2',
    convO: 0.0001,
    convS: 0.0001,
    convG: 0.0001,
    trustR: 0.15,
    finiteH: 0.001,
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  selectFile = event => {
    const file = event.target.files[0];
    if (file) {
      this.setState({
        filename: file.name,
      });
    }
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
                inputProps={{
                  value: this.state.filename,
                  placeholder: "Click Upload Button",
                  endAdornment: (
                    <InputAdornment position="end">
                      <input type="file" id="file-upload" className={classes.input} onChange={this.selectFile} />
                      <label htmlFor="file-upload">
                        <IconButton component="span">
                          <FileUpload />
                        </IconButton>
                      </label>
                    </InputAdornment>
                  ),
                  error: !this.state.filename
                }}

              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={4}>
              <FormControl fullWidth={true} className={classes.formControl} >
                <InputLabel htmlFor="job-type" className={classes.labelRoot} >Job Type</InputLabel>
                <Select
                  value={this.state.jobType}
                  onChange={this.handleChange}
                  input={<Input name="jobType" id="job-type" />}
                >
                  <MenuItem value={"optimize"}>Optimize</MenuItem>
                  <MenuItem value={"single"}>Single</MenuItem>
                  <MenuItem value={"gradient"}>Gradient</MenuItem>
                </Select>
              </FormControl>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Max Steps"
                id="max-step"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: this.state.maxStep,
                  name: 'maxStep',
                  onChange: this.handleChange,
                  type: "number",
                  inputProps: {
                    min: 1,
                    step: 1,
                  },
                  error: !(this.state.maxStep > 0)
                }}
                error={!(this.state.maxStep > 0)}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={3}>
              <FormControl fullWidth={true} className={classes.formControl} >
                <InputLabel htmlFor="penalty-type" className={classes.labelRoot} >Penalty Type</InputLabel>
                <Select
                  value={this.state.penType}
                  onChange={this.handleChange}
                  input={<Input name="penType" id="penalty-type" />}
                >
                  <MenuItem value={"L1"}>L1</MenuItem>
                  <MenuItem value={"L2"}>L2</MenuItem>
                </Select>
              </FormControl>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Convergence Objective"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: this.state.convO,
                  name: 'convO',
                  onChange: this.handleChange,
                  type: "number",
                  inputProps: {
                    min: 0,
                    max: 0.01,
                    step: 0.0001,
                  },
                  error: !(this.state.convO > 0)
                }}
                error={!(this.state.convO > 0)}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Convergence Step"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: this.state.convS,
                  name: 'convS',
                  onChange: this.handleChange,
                  type: "number",
                  inputProps: {
                    min: 0,
                    max: 0.01,
                    step: 0.0001,
                  },
                  error: !(this.state.convS > 0)
                }}
                error={!(this.state.convS > 0)}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Convergence Gradient"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: this.state.convG,
                  name: 'convG',
                  onChange: this.handleChange,
                  type: "number",
                  inputProps: {
                    min: 0,
                    max: 0.01,
                    step: 0.0001,
                  },
                  error: !(this.state.convG > 0)
                }}
                error={!(this.state.convG > 0)}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Trust Radius"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: this.state.trustR,
                  name: 'trustR',
                  onChange: this.handleChange,
                  type: "number",
                  inputProps: {
                    min: 0,
                    step: 0.01,
                  },
                  error: !(this.state.trustR > 0)
                }}
                error={!(this.state.trustR > 0)}
                success={(this.state.trustR > 0.1) && (this.state.trustR < 0.2)}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={3}>
              <CustomInput
                labelText="Finite Difference h"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: this.state.finiteH,
                  name: "finiteH",
                  onChange: this.handleChange,
                  type: "number",
                  inputProps: {
                    step: 0.001,
                  },
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
