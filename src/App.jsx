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
    console.log(`This.state.list=${this.state.list}`);
    console.log(`---End onSubmit()---`);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <label htmlFor="toDoInput">Add to do item </label>
        <form onSubmit={this.onSubmit}>
          <input id="toDoInput" value={this.state.text} onChange={this.handleOnChangeInput}></input>
          <button type="submit">Add</button>
        </form>
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
