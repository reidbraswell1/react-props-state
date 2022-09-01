import "./css/App.css";
import { Component } from 'react';
import List from "./components/List.jsx";

class App extends Component {
  constructor(props) {
    super(props)

    let list = ["ready", "set", "GO"];
    let text = "";

    this.state = {
      list: list,
      text: text,
    }

    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
  }

  handleOnChangeInput(event) {
    this.setState({text:event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <label htmlFor="toDoInput">Add to do item </label>
        <input id="toDoInput" value={this.state.text} onChange={this.handleOnChangeInput}></input>
        <ul>
          {this.state.list.map((value,index, array) => {
            console.log(value);
              let listId = `List:${index}`;
              let listText = value;
              return <List key={index} id={listId} text={listText}></List>
          })}
        </ul>
      </div>
    );
  }
}
export default App;
