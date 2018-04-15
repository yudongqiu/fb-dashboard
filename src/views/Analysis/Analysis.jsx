import React from "react";
import { Grid } from "material-ui";
import ChartistGraph from "react-chartist";
import { ChartCard } from "components";
import { AccessTime } from "material-ui-icons";

import { sensitivityAnalysisChart } from "variables/charts";

function Analysis({ ...props }) {
  return (
    <Grid container>
      <ChartCard
        chart={
          <ChartistGraph
            className="ct-chart"
            data={sensitivityAnalysisChart.data}
            type="Bar"
            options={sensitivityAnalysisChart.options}
            responsiveOptions={sensitivityAnalysisChart.responsiveOptions}
            listener={sensitivityAnalysisChart.animation}
          />
        }
        chartColor="green"
        title="Sensitivity Analysis"
        text="Project: Water Surface Tension"
        statIcon={AccessTime}
        statText="Analyzed from 5 previous optimizations"
      />
    </Grid>
  );
}

export default Analysis;
