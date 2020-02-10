import React, { Component } from "react";
import Tabs from "./state/Tabs";
import RefactorTabs from "./state/RefactorTabs";
import "./styles.css";

const tabsProp = [
  {
    name: "First tab",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."
  },
  {
    name: "Second tab",
    content:
      "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    name: "Third tab",
    content:
      "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs tabs={tabsProp} />
        <RefactorTabs tabs={tabsProp} />
      </div>
    );
  }
}

export default App;

/* ========= Conditonal rendering (#3) ======== */
//Setting the scene:
//Imported Tabs component into App.js (gives us something to look at)
//Created a prop names tabs that is an array of objects (Lines: 5-18)
//added Tabs props to the Tabs component instance (Line: 24)
//App.js ===> Tabs.js
