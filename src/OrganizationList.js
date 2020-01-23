import React, { Component } from 'react';
import { connect } from 'react-redux'
import Organization from './Organization';
import EditComponent from './EditComponent';

class OrganizationList extends Component {
    render() {
        return (
            <div>
                <h1 className="post_heading">All Organization</h1>
                {this.props.posts.map((org) => (
                    <div key={org.id}>
                        {org.editing ? <EditComponent org={org} key={org.id} /> : <Organization org={org}
                            key={org.id} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(OrganizationList);