import React from "react";
import { Component } from "react";

// Class Component Method
class Footer extends Component {
    constructor(props) {
        super(props)
console.log("here");
        this.state = { footerTxt: "React State and Props To Do List 09/22" }
    }

    render() {
        return (
        <div className="row mt-3">
            <footer className="col-3 footer" style={{ marginLeft: "auto", marginRight: "auto" }}>{this.state.footerTxt}</footer>
        </div>)
    }   
}
export default Footer;