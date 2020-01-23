import React, {Component} from 'react';
import {connect} from 'react-redux';

class OrganizationForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id:new Date(),
            title,
            message,
            editing:false
        }
        console.log(data)
        this.props.dispatch({
            type:'ADD_ORG',
            data});
            this.getTitle.value = '';
            this.getMessage.value = '';
    }
    render() {
    return (
        <div className="post-container">
        <h1 className="post_heading">Create Organization</h1>
        <form className="form" onSubmit={this.handleSubmit} >
         <input required type="text" ref={(input) => this.getTitle = input}
         placeholder="Enter Organization Name" /><br /><br />
         <textarea required rows="5" ref={(input) => this.getMessage = input}
         cols="28" placeholder="Enter Organization Details" /><br /><br />
         <button>Create</button>
        </form>
      </div>
    );
    }
    }
    export default connect()(OrganizationForm);