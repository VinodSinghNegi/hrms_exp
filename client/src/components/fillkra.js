import React from "react";
import { Grid, Header, Segment, Button } from "semantic-ui-react";
import getCurrentMonthAndYear from "./utils/getCurrentMonthAndYear";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { addkra, submitkra } from "../actions/viewkra";

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

class FillKRA extends React.Component {
  // state = { arr: [] };
  // componentDidMount = async () => {
  //   const arr1 = await this.props.kraAttributes.map(ele => {
  //     ele.value = 20;
  //   });
  //   await this.setState({ arr: arr1 });
  // };

  // UNSAFE_componentWillReceiveProps(newuserAttributes) {
  //   if (newuserAttributes.auth.user.userdata.kraAttributes.value) {
  //     this.props.addkra(this.state.arr);
  //   }
  // }
  firstfunction=()=>{
    if(this.props.kraAttributes){
      const arr=this.props.kraAttributes.map((ele)=>{
        ele.value=20
      })
      console.log(arr)
      this.props.addkra(arr)
    }
  }
  showlist = () => {
    return this.props.kraAttributes.map(kra => {
      return (
        <Grid.Row key={kra._id}>
          <Grid.Column>
            <Segment>
              <label htmlFor="customRange1">{kra.name}</label>
              <label style={{ float: "right" }}>{kra.value}</label>
              <input
                type="range"
                min={0}
                max={100}
                defaultValue={20}
                className="custom-range"
                id={kra._id}
                onChange={e => {
                  this.props.addkra({
                    Attributesid: kra._id,
                    name: kra.name,
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
    this.firstfunction()
    return (
      <Paper style={{ padding: "10px" }}>
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

          <Button
            className="ui right floated secondary button"
            onClick={e => this.props.submitkra(this.props.kraData)}
            style={{ marginTop: "15px", marginRight: "30px" }}
          >
            DONE
          </Button>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    kraAttributes: state.auth.user.userdata.kraAttributes,
    kraData: state.addKra.fillKra
  };
};
export default connect(mapStateToProps, { addkra, submitkra })(FillKRA);
