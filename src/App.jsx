import "./css/App.css";
import { Component } from "react";
import React from "react";
import ReactDOM  from "react-dom/client";
import List from "./components/List.jsx";

class App extends Component {
  constructor(props) {
    super(props)

    const list = ["ready", "set", "GO"];
    const text = "";

    this.state = {
      list: list,
      text: text,
    }

    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleOnChangeInput(event) {
    console.log(`---Begin handleOnChangeInput()---`);
    this.setState({text:event.target.value});
    console.log(`---End handleOnChangeInput()---`)
  }

  onSubmit(event) {
    console.log(`---Begin onSubmit()---`);
    event.preventDefault();
    console.log(`This.text=${this.state.text}`);
    let newList = this.state.list.slice(0);
    newList.push(this.state.text)
    this.setState({list:newList})
    this.setState({text:""});
    console.log(`This.state.list=${this.state.list}`);
    console.log(`---End onSubmit()---`);
  }

  render() {
    return (
      <div className="row">
        <div className="col text-center">
          <h1>React State and Props To Do List</h1>
        </div>
        <div className="row">
          <div className="col-3" style={{ marginLeft: 'auto', marginRight: 'auto'}}>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="toDoInput">Add to do item </label>
                <input id="toDoInput" className="form-control" value={this.state.text} onChange={this.handleOnChangeInput}></input>
                <button className="mt-2" type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-3" style={{ marginLeft: 'auto', marginRight: 'auto'}}>
            <ul className="list-group mt-4">
              {this.state.list.map((value,index, array) => {
                console.log(value);
                let listId = `List:${index}`;
                let listText = value;
                return <List key={index} id={listId} text={listText}></List>
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
