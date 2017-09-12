import React from "react";
import { connect } from "react-redux";
import SocialMedia from "./social-media";

export class Summary extends React.Component {
    constructor() {
        super();
        this.submitData = this.submitData.bind(this);
        this.prevSection = this.prevSection.bind(this);
        this.state = {
            prevPage: false
        };
      }

      submitData(e) {
        e.preventDefault();
        
      }
    
      prevSection() {
        this.setState({ prevPage: true });
      }

    render() {
        let content = "";
        if(this.state.prevPage === false) {
            content = <div className="athlete-info"><p>Name:{ this.props.name}</p>
            <p>Sports:{ this.props.sports}</p>
            <p>Nationality:{ this.props.nationality}</p>
            <p>Gender:{ this.props.gender}</p>
            <p>Date of Birth:{ this.props.dateofBirth}</p>
            <p>Location:{ this.props.location}</p>
            <p>Team:{ this.props.team}</p>
            <p>Instagram:{ this.props.instagram}</p>
            <p>Twitter:{ this.props.twitter}</p>
            <p>Facebook:{ this.props.facebook}</p>
            <button onClick={this.prevSection}>Go Back</button>
            <input
            className="submit-button"
            type="submit"
            value="Submit"
            onClick={e => {
              this.nextSection(e);
            }}
            form="myForm"
          />
          </div>
        }
        else {
            content = <SocialMedia />
        }

        return (
            <div className="main-content">
            {content}
            </div>
        )
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