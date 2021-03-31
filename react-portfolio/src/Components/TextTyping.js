import React, { Component } from "react";
import { init } from "ityped";

export default class Hello extends Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: ["Développeuse Web", "Développeuse Mobile", "Développeuse Logiciel", "Développeuse Front", "Développeuse ReactJs"]
    });
  }
  render() {
    return <div id="myElement"></div>;
  }
}