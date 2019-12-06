import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "_id", label: "Employee Code", minWidth: 100 },
  {
    id: "name",
    label: "Name",
    minWidth: 170,
    align: "left"
  },
  {
    id: "department_id.name",
    label: "Department",
    minWidth: 170,
    align: "left"
  },
  {
    id: "designation_id.name",
    label: "Designation",
    minWidth: 170,
    align: "left"
  },
  {
    id: "jobStatus",
    label: "Status",
    minWidth: 170,
    align: "right"
  }
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: "auto"
  }
});

function ViewUsers(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const { allusers } = props;
  console.log("viewusers", allusers);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // props.viewUsers();
  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {allusers &&
              allusers.map((user, i) => (
                <TableRow key={i}>
                  <TableCell>{`${user.prefix}${user._id}`}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.department_id.name}</TableCell>
                  <TableCell>{user.designation_id.name}</TableCell>
                  <TableCell align="right">{user.jobStatus}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={allusers ? allusers.length : ""}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default ViewUsers;
