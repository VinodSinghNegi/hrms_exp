import React from "react";
import { Grid, Header, Segment, Button } from "semantic-ui-react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import getCurrentMonthAndYear from "./utils/getCurrentMonthAndYear";
import { connect } from "react-redux";
import { editkra, updatekra } from "../actions/viewkra";

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
  componentDidMount() {
      this.props.editkra('hfajsdhfhjsdahfh')
  }
  showlist = () => {
    return this.props.kraAttributes.map(kra => {
      return (
        <Grid.Row key={kra._id}>
          <Grid.Column>
            <Segment>
              {kra.name}
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
                onChange={e => {
                  this.props.addkra({
                    Attributesid: kra._id,
                    name: kra.name,
                    value: e.target.innerText
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
              className="ui right floated secondary button"
              onClick={e => this.props.submitkra(this.props.kraData)}
            >
              DONE
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    kraAttributes: state.auth.user.userdata.kraAttributes,
    kraData: state.addKra.fillKra
  };
};
export default connect(mapStateToProps, { editkra, updatekra })(ApproveKra);
