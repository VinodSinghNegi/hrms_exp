import React from "react";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "semantic-ui-react";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    overflowX: "auto",
    paddingLeft: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4)
  },
  label: {
    fontFamily: "Arial"
  },
  form: {
    width: "40%"
  }
}));
const style = {
  h1: {
    fontFamily: "Times New Roman",
    fontWeight: "bolder"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  }
};
function MyProfile(props) {
  const classes = useStyles();
  const { user } = props;

  return (
    <Paper className={classes.root}>
      <Header
        as="h1"
        content="MY PROFILE"
        style={style.h1}
        textAlign="center"
      />
      <Header textAlign="center">
        <FormControl className={classes.form}>
          <h5 className={classes.label}>Employee Code</h5>
          <input
            disabled
            value={`${user.prefix}${user._id}`}
            name="firstname"
          />
          <br />
          <br />
          <h5 className={classes.label}>Name</h5>
          <input disabled value={user.name} name="firstname"></input>
          <br />
          <br />
          <h5 className={classes.label}>Gender</h5>

          <input disabled value={user.gender} name="gender"></input>
          <br />
          <br />
          <h5 className={classes.label}>Designation</h5>

          <input
            disabled
            value={user.designation_id.name}
            name="designation"
          ></input>
          <br />
          <br />
          {user.designation_id.name !== "Admin" ? (
            <div>
              <h5 className={classes.label}>Department</h5>
              <input
                disabled
                value={user.department_id.name}
                name="designation"
              ></input>
              <br /> <br />
              <h5 className={classes.label}>Reporting Manager</h5>
              <input
                disabled
                value={user.reportingManager.name}
                name="reportingmanager"
              ></input>{" "}
            </div>
          ) : null}
        </FormControl>
      </Header>
    </Paper>
  );
}

const mapStateToProps = state => {
  return { user: state.auth.user.userdata };
};

export default connect(mapStateToProps)(MyProfile);
