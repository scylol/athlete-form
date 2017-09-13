import React from "react";
import { connect } from "react-redux";
import { nextPage, updateInfo } from "../actions/actions";

export class About extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.nextSection = this.nextSection.bind(this);
  }

  handleChange(e) {
    this.props.dispatch(updateInfo(e.target.name, e.target.value));
  }

  nextSection(e) {
    e.preventDefault();
    this.props.dispatch(nextPage(e.target.id));
  }

  render() {
    return (
      <div className="main-content">
        <h1>Athlete Form</h1>
        <form id="myForm">
          Description<textarea rows="4" cols="50"
            name="description"
            type="text"
            value={this.props.description}
            onChange={this.handleChange}
          />
          Location{" "}
          <input
            name="location"
            type="text"
            value={this.props.location}
            onChange={this.handleChange}
          />
          Team<input
            name="team"
            type="text"
            value={this.props.team}
            onChange={this.handleChange}
          />
        </form>
        <div className="form-buttons">
          <button
            id="goToBasic"
            className="next-button"
            onClick={e => {
              this.nextSection(e);
            }}
          >
            Prev
          </button>
          <button
            form="myForm"
            id="goToSocialMedia"
            className="next-button"
            onClick={e => {
              this.nextSection(e);
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  description: state.description,
  location: state.location,
  team: state.team
});

export default connect(mapStateToProps)(About);
