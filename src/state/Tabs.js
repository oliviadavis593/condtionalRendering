import React, { Component } from "react";
import "./Tabs.css";

class Tabs extends Component {
  static defaultProps = {
    tabs: []
  };

  render() {
    const buttons = this.props.tabs.map((tab, index) => (
      <button key={index}>{tab.name}</button>
    ));
    const currentTab = this.props.tabs[0];
    return (
      <div>
        {buttons}
        {this.props.tabs.length && (
          <div className="content">{currentTab.content}</div>
        )}
      </div>
    );
  }
}

export default Tabs;

/* ========= Conditonal rendering (#1) ======== */
//Objective:
// We'll build a Tabs component using both props & state together
//Tabs.js ===> Tabs.test.js

/* ========= Conditonal rendering (#4) ======== */
//Render the buttons: (Lines 6-9 & 13)
//Inside render - we should have the tabs prop array
// We can map off the tabs array to make an array of buttons
// We'll use the name in each object for the button's copy
//Error:
//Uncaught[TypeError: Cannot read property 'map' of undefined]
//This is because we're trying to use the .map method when we have no .props.tabs; (same as undefined.map())
//Solution:
//We can fix this with default props (Lines: 5-7)

/* ========= Conditonal rendering (#5) ======== */
//Render the 1st tab by default:
// Tab comp should render 1st tab by default (position 0 in the array)
//Displayed the tab content underneath the row of buttons inside a div with a className of 'content' (Lines: 14 & 18-20)
//Error:
// Uncaught[TypeError: Cannot read propert 'content' of undefined]
//Solution:
//We will only show content when there are items inside the props array
//e.g. only show content when the tabs arrray has length (Lines: 18 & 22)
//Tabs.js ===> Tabs.test.js
