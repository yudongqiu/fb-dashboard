import React from "react";
import { Grid, InputLabel } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

import avatar from "assets/img/faces/marc.jpg";

function JobInput({ ...props }) {
  return (
    <div>
      <ProfileCard
        title="Job Input"
        subtitle="Project Water Surface Tension"
        description="Input parameters"
      >

      </ProfileCard>
    </div>
  );
}

export default JobInput;
