import React from "react";
import { connect } from "react-redux";
import {socialMediaNext} from '../actions/actions';

export class SocialMedia extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.state = {
        instagram: "",
        twitter: "",
        facebook: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  nextSection(e) {
    e.preventDefault();
    this.props.dispatch(socialMediaNext(this.state));
    console.log('hello world')
  }

  render() {
    return (
      <div className="main-content">
        <form id="myForm">
          Instagram:<input
            required
            name="instagram"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          Twitter:<input
            name="twiter"
            type="text"
            value={this.state.sports}
            onChange={this.handleChange}
          />
          Facebook:<input
          name="facebook"
          type="text"
          value={this.state.sports}
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
      </div>
    );
  }
}


const mapStateToProps = state => ({});

export default connect(mapStateToProps)(SocialMedia);