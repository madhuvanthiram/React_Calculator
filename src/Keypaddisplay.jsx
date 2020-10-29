import React, { Component } from "react";
import "./App.css";
import ResultCmp from "./ResultCmp";

class Keypaddisplay extends Component {
  state = {
    isclicked: false,
    myval:"",
  };

  handleClick(valuebtn) {
    this.setState({ isclicked: true });
    this.setState((state) => {//here state refer to prev state
      return { myval: state.myval + valuebtn };//concate prev value of state +new value from function
    });
  }

  handleClickDelete(valuebtn) {
    this.setState({ isclicked: true });
    this.setState((state) => {
      return { myval:"" };
    });
  }
  handleClickBackspace(valuebtn) {
    this.setState({ isclicked: true });
    this.setState((state) => {
      return { myval:state.myval.slice(0, -1) };
    });
  }

  render() {
    const passresultcmp = <ResultCmp btnvalue={this.state.myval} />;

    return (
     
      <div className="keypad">
      
      <h1> <b>Calculator using React</b></h1>
      {passresultcmp}
  
        <div>

       
       
          <button onClick={this.handleClick.bind(this, 7)} button>
            7
          </button>
          <button onClick={this.handleClick.bind(this, 8)} button>
            8
          </button>
          <button onClick={this.handleClick.bind(this, 9)} button>
            9
          </button>
          <button onClick={this.handleClick.bind(this,'/')} button>
           /
          </button>
        </div>
        <div>
          <button onClick={this.handleClick.bind(this, 4)} button>
            4
          </button>
          <button onClick={this.handleClick.bind(this, 5)} button>
            5
          </button>
          <button onClick={this.handleClick.bind(this, 6)} button>
            6
          </button>
          <button onClick={this.handleClick.bind(this, "*")} button>
            *
          </button>
        </div>
        <div>
          <button onClick={this.handleClick.bind(this, 1)} button>
            1
          </button>
          <button onClick={this.handleClick.bind(this, 2)} button>
            2
          </button>
          <button onClick={this.handleClick.bind(this, 3)} button>
            3
          </button>
          <button onClick={this.handleClick.bind(this, "-")} button>
            -
          </button>
        </div>

        <div>
          <button onClick={this.handleClick.bind(this, 0)} button>
            0
          </button>
          <button onClick={this.handleClick.bind(this, ".")} button>
            .
          </button>
          <button onClick={this.handleClick.bind(this, "=")} button>
            =
          </button>
          <button onClick={this.handleClick.bind(this, "+")} button>
            +
          </button>
        </div>

        <div>
       
          <button onClick={this.handleClickDelete.bind(this, "C")} button>
            C
          </button>
          <button onClick={this.handleClickBackspace.bind(this, "CE")} button>
          CE
          </button>
        </div>
     
     
      </div>
    );
  }
}
export default Keypaddisplay;
