import React from "react";
import { connect } from "react-redux";
import { aboutNext } from "../actions/actions";
import SocialMedia from "./social-media";
import BasicInfo from "./basic-info";

export class About extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.prevSection = this.prevSection.bind(this);
    this.state = {
      description: "",
      location: "",
      team: "",
      nextPage: false,
      prevPage: false
    };
  }

  componentDidMount() {
    this.setState({
      description: this.props.description,
      location: this.props.location,
      team: this.props.team
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  nextSection(e) {
    e.preventDefault();
    this.props.dispatch(aboutNext(this.state));
    this.setState({ nextPage: true });
  }

  prevSection() {
    this.setState({ prevPage: true });
  }

  render() {
    let content = "";
    if (this.state.nextPage === false) {
      content = (
        <div className="form-content">
          <form id="myForm">
            Description:<input
              required
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            />
            Location:{" "}
            <input
              name="location"
              type="text"
              value={this.state.location}
              onChange={this.handleChange}
            />
            Team:<input
              name="team"
              type="text"
              value={this.state.team}
              onChange={this.handleChange}
            />
          </form>
          <button onClick={this.prevSection}>Go Back</button>
          <input
            className="submit-button"
            type="submit"
            value="Next"
            onClick={e => {
              this.nextSection(e);
            }}
            form="myForm"
          />
        </div>
      );
    } else {
      content = <SocialMedia />;
    }

    if (this.state.prevPage === true) {
      content = <BasicInfo />;
    }
    return <div className="main-content">{content}</div>;
  }
}

const mapStateToProps = state => ({
  description: state.description,
  location: state.location,
  team: state.team
});

export default connect(mapStateToProps)(About);
