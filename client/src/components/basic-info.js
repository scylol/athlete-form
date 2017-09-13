import React from "react";
import { connect } from "react-redux";
import { basicInfoNext } from "../actions/actions";
import About from "./about";

export class BasicInfo extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.state = {
      name: "",
      sports: "",
      nationality: "",
      gender: "",
      dateOfBirth: "",
      nextPage: false,
      feedback: false
    };
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      sports: this.props.sports,
      nationality: this.props.nationality,
      gender: this.props.nationality,
      dateOfBirth: this.props.dateOfBirth
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  nextSection(e) {
    e.preventDefault();
    this.props.dispatch(basicInfoNext(this.state));
    if (
      this.state.name === "" ||
      this.state.sports === "" ||
      this.state.gender === "" ||
      this.state.dateOfBirth === ""
    ) {
      this.setState({ feedback: true });
    } else {
      this.setState({ nextPage: true });
      this.setState({ feedback: false });
    }
  }

  render() {
    let feedback = "";
    if (this.state.feedback === true) {
      feedback = <p> All of these fields are required! </p>;
    }
    let content = "";
    if (this.state.nextPage === false) {
      content = (
        <div className="form-content">
          <form id="myForm">
            Name:<input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            Sports:<input
              name="sports"
              type="text"
              value={this.state.sports}
              onChange={this.handleChange}
            />
            Nationality:<input
              name="nationality"
              type="text"
              value={this.state.nationality}
              onChange={this.handleChange}
            />
            Gender:<input
              name="gender"
              type="text"
              value={this.state.gender}
              onChange={this.handleChange}
            />
            Date of Birth:<input
              name="dateOfBirth"
              type="text"
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
            />
          </form>

          <input
            className="submit-button"
            type="submit"
            value="Next"
            onClick={e => {
              this.nextSection(e);
            }}
            form="myForm"
          />
          {feedback}
        </div>
      );
    } else {
      content = <About />;
    }

    return <div className="basic-info">{content}</div>;
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
