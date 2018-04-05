import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowDownward,
  AccessTime,
  Accessibility,
  Toc,
  Error,
  Description,
  People,
} from "material-ui-icons";
import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  ItemGrid
} from "components";

import {
  objectiveValueChart,
  objectiveItemsChart,
  parameterChangesChart
} from "variables/charts";

import dashboardStyle from "variables/styles/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Toc}
              iconColor="orange"
              title="Job Status"
              description="34/50"
              small="finished"
              statIcon={Description}
              statIconColor="blue"
              statLink={{ text: "View Finished Jobs...", href: "#pablo" }}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={People}
              iconColor="green"
              title="Workers"
              description="20/30"
              statIcon={DateRange}
              statLink={{ text: "View Queue Status...", href: "#pablo" }}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={InfoOutline}
              iconColor="red"
              title="Failed Jobs"
              description="12"
              statIcon={Error}
              statLink={{ text: "Error Log...", href: "#pablo" }}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={AccessTime}
              iconColor="blue"
              title="Up Time"
              description="12"
              small="hours"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={objectiveValueChart.data}
                  type="Line"
                  options={objectiveValueChart.options}
                  listener={objectiveValueChart.animation}
                />
              }
              chartColor="green"
              title="Objective Values"
              text={
                <span>
                  <span className={this.props.classes.successText}>
                    <ArrowDownward
                      className={this.props.classes.upArrowCardCategory}
                    />{" "}
                    81%
                  </span>{" "}
                  decrease from initial state.
                </span>
              }
              statIcon={AccessTime}
              statText="updated 4 minutes ago"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={objectiveItemsChart.data}
                  type="Bar"
                  options={objectiveItemsChart.options}
                  responsiveOptions={objectiveItemsChart.responsiveOptions}
                  listener={objectiveItemsChart.animation}
                />
              }
              chartColor="orange"
              title="Objective Breakdown"
              text="Lastest Iteration"
              statIcon={AccessTime}
              statText="evaluated 4 minitues ago"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={parameterChangesChart.data}
                  type="Bar"
                  options={parameterChangesChart.options}
                  listener={parameterChangesChart.animation}
                />
              }
              chartColor="red"
              title="Parameter Changes"
              text="Relative to prior width"
              statIcon={AccessTime}
              statText="evaluated 4 minitues ago"
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={6}>
            <TasksCard />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <RegularCard
              headerColor="orange"
              cardTitle="Optimization Stats"
              cardSubtitle="Iteration 5 finished at 17:00, Apr. 1st"
              content={
                <Table
                  tableHeaderColor="warning"
                  tableHead={["Iter", "X2", "Change", "Grad", "Step Qual"]}
                  tableData={[
                    ["1", "38.7", "", "8.4e+03", "0.0"],
                    ["2", "17.4", "-21.3", "4.9e+02", "1.0"],
                    ["3", "8.1", "-9.3", "1.4e+02", "0.1"],
                    ["4", "7.4", "-0.7", "1.0e+02", "2.1"],
                    ["5", "7.5", "+0.1", "2.7e+01", "-3.4"],
                  ]}
                />
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
