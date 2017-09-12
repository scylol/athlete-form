import React from "react";
import { connect } from "react-redux";
import {aboutNext} from '../actions/actions';
import SocialMedia from "./social-media";

export class About extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.state = {
      description: "",
      location: "",
      team: "",
      nextPage: false
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  nextSection(e) {
    e.preventDefault();
    this.props.dispatch(aboutNext(this.state));
    this.setState({ nextPage: true });
  }

  render() {
      let content = '';
      if(this.state.nextPage === false) {
          content = <div className="form-content"><form id="myForm">
          Description:<input
            required
            name="description"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
         Location: <input
            name="location"
            type="text"
            value={this.state.sports}
            onChange={this.handleChange}
          />
          Team:<input
          name="team"
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
      }
      else {
          content = <SocialMedia />;
      }
    return (
      <div className="main-content">
        {content}
      </div>
    );
  }
}


const mapStateToProps = state => ({});

export default connect(mapStateToProps)(About);