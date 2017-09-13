import React from "react";
import { connect } from "react-redux";
import { nextPage, updateInfo } from "../actions/actions";


export class BasicInfo extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.state = {
      feedback: false
    };
  }

  handleChange(e) {
    this.props.dispatch(updateInfo(e.target.name, e.target.value));
  }

  nextSection(e) {
    if (
      this.props.name === "" ||
      this.props.sports === "" ||
      this.props.gender === "" ||
      this.props.dateOfBirth === ""
    ) {
      this.setState({ feedback: true });
    } else {
      this.props.dispatch(nextPage(e.target.id));
      this.setState({ feedback: false });
    }
  }

  render() {
    let feedback = "";
    if (this.state.feedback === true) {
      feedback = <p> All of these fields are required! </p>;
    }

    return (
      <div className="form-content">
        <form id="myForm">
          Name:<input
            name="name"
            type="text"
            value={this.props.name}
            onChange={this.handleChange}
          />
          Sports:<input
            name="sports"
            type="text"
            value={this.props.sports}
            onChange={this.handleChange}
          />
          Nationality:<input
            name="nationality"
            type="text"
            value={this.props.nationality}
            onChange={this.handleChange}
          />
          Gender:<input
            name="gender"
            type="text"
            value={this.props.gender}
            onChange={this.handleChange}
          />
          Date of Birth:<input
            name="dateOfBirth"
            type="text"
            value={this.props.dateOfBirth}
            onChange={this.handleChange}
          />
        </form>

        <button
          id="goToAbout"
          className="next-button"
          onClick={e => {
            this.nextSection(e);
          }}
        >
          Next
        </button>
        {feedback}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  sports: state.sports,
  nationality: state.nationality,
  gender: state.gender,
  dateOfBirth: state.dateOfBirth
});

export default connect(mapStateToProps)(BasicInfo);
