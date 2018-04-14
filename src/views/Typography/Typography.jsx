import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";

function TypographyPage({ ...props }) {
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          plainCard
          cardTitle="Objection Function Breakdown"
          cardSubtitle="Current Iteration: 5"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Residual", "Weight", "Contribution", "Change"]}
              tableData={[
                ["1", "Energy", "0.8", "1.0", "0.8", "-0.2"],
                ["2", "Interaction", "0.5", "2.0", "1.0", "-0.1"],
                ["3", "Liquid", "5.7", "1.0", "5.7", "+0.4"],
                ["3.1", "Density", "1.2", "1.0", "1.2", "+0.3"],
                ["3.2", "Enthalpy of Valporization", "3.6", "0.0", "0.0", "0.0"],
                ["3.3", "Thermal Expansion Coefficient", "0.8", "1.0", "0.8", "+0.2"],
                ["3.4", "Dielectric Constant", "1.3", "1.0", "1.3", "-0.1"],
                ["3.5", "Surface Tension", "0.7", "1.0", "0.7", "0.0"],
                ["", "Total", "", "", "7.5", "+0.1"],
              ]}
            />
          }
        />
      </ItemGrid>
   </Grid>
  );
}

export default TypographyPage;
