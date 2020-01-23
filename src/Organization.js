import React, { Component } from 'react';
import { connect } from 'react-redux';

class Organization extends Component {
    render() {
        return (
            <div className="post">
                <h2 className="post_title">{this.props.org.title}</h2>
                <p className="post_message">{this.props.org.message}</p>
                <div className="control-buttons">
                    <button className="edit"
                        onClick={() => this.props.dispatch({ type: 'EDIT_ORG', id: this.props.org.id })
                        }
                    >Edit</button>
                    <button className="delete"
                        onClick={() => this.props.dispatch({ type: 'DELETE_ORG', id: this.props.org.id })}
                    >Delete</button>
                </div>
            </div>
        )
    }
}
export default connect()(Organization);