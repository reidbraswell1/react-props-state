import { Component } from "react";

const List = (props) => {
    return (<li id={props.id}>{props.text}</li>);
}
export default List;