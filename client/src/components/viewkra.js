import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import getCurrentMonthAndYear from "./utils/getCurrentMonthAndYear";
import { connect } from "react-redux";
import { viewkra } from "../actions/viewkra";
import { Z_DATA_ERROR } from "zlib";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));
let i;
let years = [];
for (i = getCurrentMonthAndYear().year; i >= 2005; i--) {
  years.push({ i });
}

function CustomizedTables(props) {
  const classes = useStyles();
  const [first, setfirst] = useState(true);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  if (first === true) {
    props.viewkra();
    setfirst(false);
  }

  const showlist = () => {
    if (props.viewkradata) {
      const trowhead = props.viewkradata.map(month => {
        let d = new Date(month.date);
        return months[d.getMonth()];
      });
      return props.viewkradata.map((month, i) => {
        return (
          <StyledTableRow key={i}>
            <StyledTableCell component="th" scope="row">
              {trowhead[i]}
            </StyledTableCell>
            {month.kraAttributes.map((kra, j) => {
              return <StyledTableCell key={j}>{kra.value}</StyledTableCell>;
            })}
            <StyledTableCell >{month.Status}</StyledTableCell>;
          </StyledTableRow>
        );
      });
    }
  };
  console.log(props)
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={16} align="right">
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  native
                  className={classes.select}
                  defaultValue={getCurrentMonthAndYear().year}
                  onChange={e=>props.viewkra(e.target.value)}
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple"
                  }}
                >
                  {years.map((d, i) => (
                    <option key={i} value={d.i}>
                      {d.i}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </TableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell align="left">Key Result Area</StyledTableCell>
            {props.kraattr.map(kra => (
              <StyledTableCell align="center" key={kra._id}>
                {kra.name}
              </StyledTableCell>
            ))}
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{showlist()}</TableBody>
      </Table>
    </Paper>
  );
}

const mapStateToProps = state => {
  return {
    viewkradata: state.addKra.viewKraData.kraSheet,
    kraattr: state.auth.user.userdata.kraAttributes
  };
};
export default connect(mapStateToProps, { viewkra })(CustomizedTables);
