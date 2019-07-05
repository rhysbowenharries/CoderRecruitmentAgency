import React, { Component, Fragment }from 'react';
import './App.css';
import CreatePageContainer from "./containers/CreatePageContainer";
import ProfileListContainer from './containers/ProfileListContainer';

class App extends Component {
  
  profileList(){
    
  }

  render(){
    return (
      <Fragment>
        <header>
          <h1>C0drz UnitE</h1>
        </header>
        <CreatePageContainer/>
        <ProfileListContainer/>
      </Fragment>
  )
}
}

export default App;
