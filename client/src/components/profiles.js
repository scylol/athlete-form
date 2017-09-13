import React from "react";
import { connect } from "react-redux";
import LandingPage from "./landing-page";

export class Profiles extends React.Component {
    constructor() {
         super();
         this.goToHomePage = this.goToHomePage.bind(this);
         this.state = {
         returnHome: false
        };
      }

      goToHomePage() {
        this.setState({ returnHome: true });
      }


  render() {
    let athletes = this.props.athletes.map((athlete, index) => {
        return (
            <li className="profile-box" key={index}>
            <h3>{athlete.name}</h3>
            <p>{athlete.sport}</p>
            <p>{athlete.sports} | {athlete.gender}</p>
            <p>{athlete.location}</p>
            </li>
        )
    });

    let content = "";
    if(this.state.returnHome === true) {
        content = <LandingPage />
    }
    else {
        content = <div className="profiles">
        <button onClick={this.goToHomePage}>Home Page</button>
        {athletes}
        </div>
    }
    return  (
        <div className="profile-content">
        {content}
        </div>
    )
  }
}

const mapStateToProps = state => ({
  athletes: state.athletes
});

export default connect(mapStateToProps)(Profiles);
