import React from "react";
import { connect } from "react-redux";
import { socialMediaNext } from "../actions/actions";
import Summary from "./summary";
import About from "./about";

export class SocialMedia extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.prevSection = this.prevSection.bind(this);
    this.state = {
      instagram: "",
      twitter: "",
      facebook: "",
      nextPage: false,
      prevPage: false
    };
  }

  componentDidMount() {
    this.setState({
      instagram: this.props.instagram,
      twitter: this.props.twitter,
      facebook: this.props.facebook
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  nextSection(e) {
    e.preventDefault();
    this.props.dispatch(socialMediaNext(this.state));
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
            Instagram:<input
              required
              name="instagram"
              type="text"
              value={this.state.instagram}
              onChange={this.handleChange}
            />
            Twitter:<input
              name="twitter"
              type="text"
              value={this.state.twitter}
              onChange={this.handleChange}
            />
            Facebook:<input
              name="facebook"
              type="text"
              value={this.state.facebook}
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
      content = <Summary />;
    }

    if (this.state.prevPage === true) {
      content = <About />;
    }
    return <div className="main-content">{content}</div>;
  }
}

const mapStateToProps = state => ({
    instagram: state.instagram,
    twitter: state.twitter,
    facebook: state.facebook
});

export default connect(mapStateToProps)(SocialMedia);
