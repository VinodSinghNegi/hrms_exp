import React from "react";
import { Grid, Header, Segment, Button } from "semantic-ui-react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import getCurrentMonthAndYear from "./utils/getCurrentMonthAndYear";
import { connect } from "react-redux";
import {
  updateKra,
  submitUpdatedKra,
  UpdatedkraValues
} from "../actions/kraRequest";
// import {UpdatedkraValues} from '../actions/viewkra';

const style = {
  h1:{
    fontFamily:"Times New Roman",
    fontWeight:"bolder"
    },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  }
};

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
                style={{float:"right"}}
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
        <Paper style={{padding:"10px"}}>
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
            <div className="container" >
              <Grid>{this.showlist()}</Grid>
            </div>
              <Button
                disabled={this.props.Status==='Approved'?true:false}
                className="ui right floated secondary button"
                onClick={e => this.props.submitUpdatedKra(this.props.kraData)}
                style={{marginTop:"15px",marginRight:"30px"}}>
                DONE
              </Button>
        
          </div>
    </Paper>
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
