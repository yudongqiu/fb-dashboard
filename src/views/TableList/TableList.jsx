import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";

function TableList({ ...props }) {
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          plainCard
          cardTitle="Job Status"
          cardSubtitle="Current Iteration: 5"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Info", "Started", "Ended", "Node"]}
              tableData={[
                ["1", "Energy", "cluster1/CCSD(T)", "14:30", "15:20", "g4-2"],
                ["2", "Interaction", "cluster2/MP2", "14:30", "15:00", "g5-2"],
                ["3", "Density", "273 K, 1 atm", "14:30", "16:01", "g6-12"],
                ["5", "Density", "298 K, 1 atm", "14:30", "16:03", "g6-22"],
                ["5", "Density", "313 K, 1 atm", "14:30", "16:02", "g6-22"],
                ["6", "Surface Tension", "313 K, 1 atm", "14:30", "Running", "g7-22"],
              ]}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

export default TableList;
