import React from "react";
import { Grid, Header, Segment, Button } from "semantic-ui-react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import getCurrentMonthAndYear from "./utils/getCurrentMonthAndYear";
import { connect } from "react-redux";
import {
  updateKra,
  submitUpdatedKra,
  UpdatedkraValues
} from "../actions/kraRequest";
// import {UpdatedkraValues} from '../actions/viewkra';

const style = {
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  }
};
const PrettoSlider = withStyles({
  root: {
    color: "#ff0000",
    height: 8,
    width: 150,
    float: "right"
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

class ApproveKra extends React.Component {
  showlist = () => {
    return this.props.kraData.cleanValue.map(kra => {
      return (
        <Grid.Row key={kra._id}>
          <Grid.Column>
            <Segment>
              {kra.name}
              <input
              disabled={this.props.Status==='Approved'?true:false}
                type="number"
                min={0}
                max={100}
                defaultValue={kra.value}
                onChange={e => {
                  this.props.UpdatedkraValues({
                    Attributesid: kra._id,
                    value: e.target.value
                  });
                }}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      );
    });
  };
  render() {
    console.log(this.props.Status)
    if (this.props.kraData) {
      return (
        <div style={{ width: "40rem" }}>
          <div>
            <Header
              as="h3"
              content="Key Result Area"
              style={style.h1}
              textAlign="center"
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              {getCurrentMonthAndYear().month}
              {getCurrentMonthAndYear().year}
            </div>
            <div className="container">
              <Grid>{this.showlist()}</Grid>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                disabled={this.props.Status==='Approved'?true:false}
                className="ui right floated secondary button"
                onClick={e => this.props.submitUpdatedKra(this.props.kraData)}
              >
                DONE
              </Button>
            </div>
          </div>
        </div>
      );
    } else {
      return "";
    }
  }
}

const mapStateToProps = state => {
  return {
    kraData: state.kraRequest.updateKraField
    ,Status:state.kraRequest.kraRequest[0].kraSheet[0].Status
  };
};
export default connect(mapStateToProps, {
  updateKra,
  submitUpdatedKra,
  UpdatedkraValues
})(ApproveKra);
