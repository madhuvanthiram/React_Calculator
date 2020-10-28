import React, { Component } from "react";
import "./App.css";

class ResultCmp extends Component {
  state = {};

  render() {
    const { btnvalue } = this.props;

    //basic calculation

    if (btnvalue.includes("=")) {
      var newbtnvalue = btnvalue;
      newbtnvalue = newbtnvalue.replace("=", "");
      var finalresult = eval(newbtnvalue);
    }

    return (
      <div className="result">
        <p>
          {btnvalue}
          {finalresult}
        </p>
      </div>
    );
  }
}

export default ResultCmp;
