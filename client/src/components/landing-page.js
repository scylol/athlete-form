import React from "react";
import { connect } from "react-redux";
import BasicInfo from "./basic-info";
import { fetchAthletes } from "../actions/actions";
import Profiles from "./profiles";

export class LandingPage extends React.Component {
  constructor() {
    super();
    this.showProfiles = this.showProfiles.bind(this);
    this.state = {
      nextPage: false,
      showProfiles: false
    };
  }

  nextSection(e) {
    e.preventDefault();
    this.setState({ nextPage: true });
  }

  showProfiles() {
    this.props.dispatch(fetchAthletes());
    this.setState({ showProfiles: true });
  }

  render() {
    let content = "";
    if (this.state.nextPage === false) {
      content = (
        <div className="button-div">
        <input
          className="submit-button"
          type="submit"
          value="Create Profile"
           onClick={e => {
            this.nextSection(e);
          }}
        />
        <button className="view-athletes" onClick={this.showProfiles}>View Profiles </button>
        </div>
      );
    } else {
      content = <BasicInfo />;
    }
    if(this.state.showProfiles === true) {
        content = <Profiles />
    }
    return <div className="main-content">{content}</div>;
  }
}

const mapStateToProps = state => ({});
  
  export default connect(mapStateToProps)(LandingPage);