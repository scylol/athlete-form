import React from 'react';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }



  render() {
    return (
        <div className="App">
          <div className="App-header">
            
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>Hello World</code> and save to reload.
          </p>
        </div>
      );
  }
}

export default App;
