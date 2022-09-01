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
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
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
