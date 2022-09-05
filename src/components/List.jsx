import { render } from "@testing-library/react";
import React from "react";
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
        // Destructuring
        const {id, text} = this.props;
        
        return (<li className="list-group-item" id={id}>{text}</li>)
    }   
}
export default List;