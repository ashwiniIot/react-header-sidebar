import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {updateUser, apiRequest} from './action/user-action';
import {bindActionCreators} from 'redux';
import {createSelector} from 'reselect';
 
class App extends Component{
  constructor(props){
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         Welcome to React
        </h1>
        </header>
        <p className = "App-intro"> Hello</p>
        <input onChange={this.onUpdateUser}></input>
        {this.props.user}
     
    </div>
  );
}
}

const productsSelector = createSelector(
  state=>state.products,
  products=>products
  );

  const userSelector = createSelector(
    state=>state.user,
    user=>user
    );

const mapStateToProps = createSelector(
 productsSelector,
 userSelector,
  (products,user)=>({
    products,
    user
  })
);;

const mapActionsToProps={
  onUpdateUser:updateUser,
  onApiRequest:apiRequest
}



export default connect(mapStateToProps,mapActionsToProps)(App);
 