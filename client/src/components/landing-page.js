import React from "react";
import { connect } from "react-redux";
import { fetchAthletes, nextPage } from "../actions/actions";
import Profiles from "./profiles";
import "./landing-page.css";

export class LandingPage extends React.Component {
  constructor() {
    super();
    this.showProfiles = this.showProfiles.bind(this);
  }

  nextSection(e) {
    e.preventDefault();
    this.props.dispatch(nextPage(e.target.id));
  }

  showProfiles(e) {
    this.props.dispatch(fetchAthletes());
    this.props.dispatch(nextPage(e.target.id));
  }

  render() {
    return (
      <div className="landing-page-content">
        <div className="header">
          <h1>OpenSponsorship Athlete Form</h1>
        </div>
        <div className="button-section">
          <button
            id="goToBasic"
            className="next-button"
            onClick={e => {
              this.nextSection(e);
            }}
          >
            Create Profile
          </button>
          <button
            id="goToProfiles"
            className="view-athletes"
            onClick={e => {
              this.showProfiles(e);
            }}
          >
            View Profiles
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(LandingPage);
