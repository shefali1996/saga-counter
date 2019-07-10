import React, { Component } from "react";
import Counter from "./components/Counter";
import { onAgeUp, onAgeDown } from "./actions/Action";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <Counter
          age={this.props.age}
          onAgeUp={this.props.onAgeUp}
          onAgeDown={this.props.onAgeDown}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(onAgeUp()),
    onAgeDown: () => dispatch(onAgeDown())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
