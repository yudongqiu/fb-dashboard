import React from "react";
import {
  withStyles,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip
} from "material-ui";
import { Edit, Close, Check } from "material-ui-icons";

import PropTypes from "prop-types";

import tasksStyle from "variables/styles/tasksStyle.jsx";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    const { checkedIndexes, tasks } = props;
    const checked = new Array(tasks.length).fill(false);
    for (const i of checkedIndexes) {
      checked[i] = true;
    }
    this.state = {
      tasks: tasks,
      checked: checked,
    };
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const newChecked = [...checked];
    newChecked[value] = !newChecked[value];
    this.setState({
      checked: newChecked
    });
  };

  handleDelete = value => () => {
    const { checked, tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(value, 1);
    const newChecked = [...checked];
    newChecked.splice(value, 1);
    this.setState({
      tasks: newTasks,
      checked: newChecked,
    });
  }

  render() {
    const { classes } = this.props;
    const { tasks } = this.state;
    const tasksIndexes = Array.from(tasks.keys());
    return (
      <Table className={classes.table}>
        <TableBody>
          {tasksIndexes.map(value => (
            <TableRow key={value} className={classes.tableRow}>
              <TableCell className={classes.tableCell}>
                <Checkbox
                  checked={this.state.checked[value]}
                  tabIndex={-1}
                  onClick={this.handleToggle(value)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked
                  }}
                />
              </TableCell>
              <TableCell className={classes.tableCell}>
                {tasks[value]}
              </TableCell>
              <TableCell className={classes.tableActions}>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    aria-label="Edit"
                    className={classes.tableActionButton}
                  >
                    <Edit
                      className={
                        classes.tableActionButtonIcon + " " + classes.edit
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  id="tooltip-top-start"
                  title="Remove"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    aria-label="Close"
                    className={classes.tableActionButton}
                    onClick={this.handleDelete(value)}
                  >
                    <Close
                      className={
                        classes.tableActionButtonIcon + " " + classes.close
                      }
                    />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

Tasks.propTypes = {
  classes: PropTypes.object.isRequired,
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node)
};

export default withStyles(tasksStyle)(Tasks);
