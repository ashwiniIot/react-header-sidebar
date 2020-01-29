import React, { Component } from 'react';
import OrganizationForm from './OrganizationForm';
import OrganizationList from './OrganizationList';
import SideBar from './Shared/SideBar'


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="navbar">
      <h2 >Shoreline IoT</h2>
      <div className="menuIcon "><SideBar/>
      </div>
        </div>
        <OrganizationForm />
        <OrganizationList />
    </div>
    );
    }
  }
export default App;