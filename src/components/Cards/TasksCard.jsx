import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Tabs,
  Tab
} from "material-ui";
import { BugReport, Create, Assignment } from "material-ui-icons";

import { Tasks } from "components";

import { issues, conclusions, todos } from "variables/general";

import tasksCardStyle from "variables/styles/tasksCardStyle";

class TasksCard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.cardTitle,
            content: classes.cardHeaderContent
          }}
          title="Notes:"
          action={
            <Tabs
              classes={{
                flexContainer: classes.tabsContainer
              }}
              value={this.state.value}
              onChange={this.handleChange}
              indicatorClassName={classes.displayNone}
              textColor="inherit"
            >
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  rootLabelIcon: classes.labelIcon,
                  label: classes.label,
                  rootInheritSelected: classes.rootInheritSelected
                }}
                icon={<BugReport className={classes.tabIcon} />}
                label={"Issues"}
              />
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  rootLabelIcon: classes.labelIcon,
                  label: classes.label,
                  rootInheritSelected: classes.rootInheritSelected
                }}
                icon={<Create className={classes.tabIcon} />}
                label={"Conclusions"}
              />
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  rootLabelIcon: classes.labelIcon,
                  label: classes.label,
                  rootInheritSelected: classes.rootInheritSelected
                }}
                icon={<Assignment className={classes.tabIcon} />}
                label={"To-dos"}
              />
            </Tabs>
          }
        />
        <CardContent>
          {this.state.value === 0 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={[0, 3]}
                tasks={issues}
              />
            </Typography>
          )}
          {this.state.value === 1 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={[0]}
                tasks={conclusions}
              />
            </Typography>
          )}
          {this.state.value === 2 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={[1]}
                tasks={todos}
              />
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  }
}

TasksCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(tasksCardStyle)(TasksCard);
