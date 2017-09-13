import React from "react";
import { connect } from "react-redux";
import { nextPage } from "../actions/actions";
import "./profiles.css";

export class Profiles extends React.Component {
  constructor() {
    super();
    this.goToHomePage = this.goToHomePage.bind(this);
  }

  goToHomePage(e) {
    this.props.dispatch(nextPage(e.target.id));
  }

  render() {
    let athletes = this.props.athletes.map((athlete, index) => {
      return (
        <li className="profile-box" key={index}>
          <h3>{athlete.name}</h3>
          <p>{athlete.sport}</p>
          <p>
            {athlete.sports} | {athlete.gender}
          </p>
          <p>{athlete.location}</p>
        </li>
      );
    });

    return (
      <div className="profile-content">
      <div className='header'><h1>Athlete List</h1></div>
        <button
        id="goToLanding"
         onClick={e => {
            this.goToHomePage(e);
          }}>Home Page</button>
          <div className="profile-container">
        {athletes}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  athletes: state.athletes
});

export default connect(mapStateToProps)(Profiles);
