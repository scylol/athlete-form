import React from "react";
import { connect } from "react-redux";
import { nextPage, createProfile, fetchAthletes } from "../actions/actions";
import "./summary.css";

export class Summary extends React.Component {
  constructor() {
    super();
    this.submitData = this.submitData.bind(this);
    this.prevSection = this.prevSection.bind(this);
    this.showProfiles = this.showProfiles.bind(this);
    this.state = { submittedData: false };
  }

  submitData(e) {
    e.preventDefault();
    this.props.dispatch(createProfile());
    this.setState({ submittedData: true });
  }

  prevSection(e) {
    this.props.dispatch(nextPage(e.target.id));
  }

  showProfiles(e) {
    this.props.dispatch(fetchAthletes());
    this.props.dispatch(nextPage(e.target.id));
  }

  render() {
    let content = "";
    if (this.state.submittedData === true) {
      content = (
        <div className="submit-text">
          <p>
            {" "}
            Your information has been successfully sumbitted! Click below to
            view all of our athlete profiles!{" "}
          </p>
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
      );
    } else {
      content = (
        <div className="athlete-info">
          <h1>Make sure everything is correct!</h1>
          <p>Name:{this.props.name}</p>
          <p>Sports:{this.props.sports}</p>
          <p>Nationality:{this.props.nationality}</p>
          <p>Gender:{this.props.gender}</p>
          <p>Date of Birth:{this.props.dateofBirth}</p>
          <p>Location:{this.props.location}</p>
          <p>Team:{this.props.team}</p>
          <p>Instagram:{this.props.instagram}</p>
          <p>Twitter:{this.props.twitter}</p>
          <p>Facebook:{this.props.facebook}</p>
          <div className="form-buttons">
            <button
              id="goToSocialMedia"
              className="next-button"
              onClick={e => {
                this.prevSection(e);
              }}
            >
              Go Back
            </button>
            <button
              id="submit"
              className="view-athletes"
              onClick={e => {
                this.submitData(e);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      );
    }

    return <div className="athlete-content">{content}</div>;
  }
}

const mapStateToProps = state => ({
  name: state.name,
  sports: state.sports,
  nationality: state.nationality,
  gender: state.gender,
  dateOfBirth: state.dateOfBirth,
  description: state.description,
  location: state.location,
  team: state.team,
  instagram: state.instagram,
  twitter: state.twitter,
  facebook: state.facebook
});

export default connect(mapStateToProps)(Summary);
