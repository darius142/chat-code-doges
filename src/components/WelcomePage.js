import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

const WelcomePage = ({ classes }) => (
  <div className={classes.root}>Welcome</div>
);

export default withStyles(styles)(WelcomePage);
