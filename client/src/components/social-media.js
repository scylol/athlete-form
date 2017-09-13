import React from "react";
import { connect } from "react-redux";
import { nextPage, updateInfo } from "../actions/actions";

export class SocialMedia extends React.Component {
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
          Instagram:<input
            required
            name="instagram"
            type="text"
            value={this.props.instagram}
            onChange={this.handleChange}
          />
          Twitter:<input
            name="twitter"
            type="text"
            value={this.props.twitter}
            onChange={this.handleChange}
          />
          Facebook:<input
            name="facebook"
            type="text"
            value={this.props.facebook}
            onChange={this.handleChange}
          />
        </form>
        <div className="form-buttons">
          <button
            id="goToAbout"
            className="next-button"
            onClick={e => {
              this.nextSection(e);
            }}
          >
            Prev
          </button>
          <button
            form="myForm"
            id="goToSummary"
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
  instagram: state.instagram,
  twitter: state.twitter,
  facebook: state.facebook
});

export default connect(mapStateToProps)(SocialMedia);
