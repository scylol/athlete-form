import React from "react";
import { connect } from "react-redux";

export class Profiles extends React.Component {
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
    return  (
        <div className="main-content">{athletes} Hello World</div>
    )
  }
}

const mapStateToProps = state => ({
  athletes: state.athletes
});

export default connect(mapStateToProps)(Profiles);
