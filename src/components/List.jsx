import { render } from "@testing-library/react";
import { Component } from "react";

// Functional Component Method
/*
const List = (props) => {
    return (<li className="list-group-item" id={props.id}>{props.text}</li>);
}
*/
// Class Component Method
class List extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<li className="list-group-item" id="this.props.id">{this.props.text}</li>)
    }   
}
export default List;