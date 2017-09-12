import React from "react";
import BasicInfo from "./basic-info";

export default class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      nextPage: false
    };
  }

  nextSection(e) {
    e.preventDefault();
    this.setState({ nextPage: true });
  }

  render() {
    let content = "";
    if (this.state.nextPage === false) {
      content = (
        <input
          className="submit-button"
          type="submit"
          value="Start"
          form="myForm"
          onClick={e => {
            this.nextSection(e);
          }}
        />
      );
    } else {
      content = <BasicInfo />;
    }
    return <div className="main-content">{content}</div>;
  }
}
