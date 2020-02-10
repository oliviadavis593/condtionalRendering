import React, { Component } from "react";

class RefactorTabs extends Component {
  static defaultProps = {
    tabs: []
  };
  state = {
    currentTabIndex: 0
  };

  handleButtonClick = index => {
    console.log("button is clicked!", { index });
    this.setState({
      currentTabIndex: index
    });
  };

  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      /*<button key={index} onClick={this.handleButtonClick}>*/
      <button key={index} onClick={() => this.handleButtonClick(index)}>
        {tab.name}
      </button>
    ));
  }

  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex];
    return <div className="content">{currentTab.content}</div>;
  }
  render() {
    return (
      <div>
        {this.renderButtons()}
        {this.props.tabs.length && this.renderContent()}
      </div>
    );
  }
}

export default RefactorTabs;

//========= What we want our code to look like ========!!
/* ========= Conditonal rendering (#7) ======== */
//Quick Refactor:
// We can move the render logic into separate functions
// This makes it easier to focus on one piece of logic at a time
// And creates a cleaner render function

/* ========= Conditonal rendering (#8) ======== */
//Making the buttons work:
//Requirements:
//We need the buttons to change which content is displayed
//We need to manage state for the index number of any tab we want to display
// Right now, we're harcoding 0 (Line: 15) - we can swap this for some state (Lines: 7-9, & 18 )
//The buttons can then update the state to change this number

/* ========= Conditonal rendering (#9) ======== */
//Making the buttons work:
//No tests have broken - and we've initialized state
//We now need a click event handler on each button to update this index in state (Lines: 11-13 & 17 (onClick))
//We're logging to the console every time a button is clicked -
//.. but we need to know which button is clicked
// Use an arrow function in the JSX to pass the index of the button (Line: 18)
//Now we can update the state with the new index (Line: )
