import React from "react";
import { connect } from "react-redux";
import LandingPage from "./landing-page";
import BasicInfo from "./basic-info";
import About from "./about";
import SocialMedia from "./social-media";
import Summary from "./summary";
import Profiles from "./profiles";
import "./app.css";

class App extends React.Component {
  render() {
    let content = "";
    if (this.props.currentPage === "goToLanding") {
      console.log();
      content = <LandingPage />;
    } else if (this.props.currentPage === "goToBasic") {
      content = <BasicInfo />;
    } else if (this.props.currentPage === "goToProfiles") {
      content = <Profiles />;
    } else if (this.props.currentPage === "goToAbout") {
      content = <About />;
    } else if (this.props.currentPage === "goToSocialMedia") {
      content = <SocialMedia />;
    } else if (this.props.currentPage === "goToSummary") {
      content = <Summary />;
    }
    return <div className="App">{content}</div>;
  }
}

const mapStateToProps = state => ({
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(App);
