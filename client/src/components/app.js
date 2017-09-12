import React from "react";
import BasicInfo from "./basic-info";
import About from "./about";
import SocialMedia from "./social-media";
import LandingPage from "./landing-page";

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
     
        <div className="App">
        <LandingPage />
        </div>
      
    );
  }
}

export default App;
