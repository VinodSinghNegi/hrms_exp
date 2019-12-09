import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import { getKraRequest, updateKra } from "../actions/kraRequest";
import { setCurrentComponent } from "../actions/componentActions";
import ApproveKra from "../components/approveKra";

const columns = [
  { id: "_id", label: "Employee Code", minWidth: 100 },
  {
    id: "name",
    label: "Name",
    minWidth: 170,
    align: "center"
  },
  {
    id: "department_id.name",
    label: "Department",
    minWidth: 170,
    align: "center"
  },

  {
    id: "kraStatus",
    label: "Aprooved Status",
    minWidth: 170,
    align: "center"
  },
  {
    id: "View",
    label: "View",
    minWidth: 170,
    align: "center"
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

function KraRequest(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const { kraRequest } = props;
  const [flag, setFlag] = React.useState(false);
  const [component, setComponent] = React.useState(null);

  if (flag === false) {
    props.getKraRequest();
    setFlag(true);
  }
  
  const viewRequest = (Component, sheetId) => {
    props.updateKra(sheetId);
    props.setCurrentComponent(Component);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // props.viewUsers();
  if (kraRequest !== null) {
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
              {kraRequest.kraRequest.map((user, i) => (
                <TableRow key={i}>
                  <TableCell align="center">{user.userId._id}</TableCell>
                  <TableCell align="center">{user.userId.name}</TableCell>
                  <TableCell align="center">
                    {user.userId.department_id.name}
                  </TableCell>
                  <TableCell align="center">
                    {user.kraSheet[0].Status}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => {
                        viewRequest(<ApproveKra status={user.kraSheet[0].Status}/>, user.kraSheet[0]._id);
                      }}
                    >
                      Check
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={kraRequest ? kraRequest.kraRequest.length :0}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    );
  } else {
    return "";
  }
}
const mapStateToProps = state => ({
  kraRequest: state.kraRequest,
  showTab: state.showTab.comp
});

export default connect(mapStateToProps, {
  setCurrentComponent,
  getKraRequest,
  updateKra
})(KraRequest);
