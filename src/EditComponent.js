import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.org.id, data: data })
    }
    render() {
        return (
            <div key={this.props.org.id} className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                        defaultValue={this.props.org.title} placeholder="Enter Organization Name" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                        defaultValue={this.props.org.message} cols="28" placeholder="Enter Organization Details" /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);