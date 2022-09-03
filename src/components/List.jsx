import { Component } from "react";

const List = (props) => {
    return (<li className="list-group-item" id={props.id}>{props.text}</li>);
}
export default List;