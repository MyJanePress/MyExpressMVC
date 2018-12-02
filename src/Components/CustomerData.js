import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import { mapStateToProps } from '../actions/action';
import RemoveButton from './RemoveButton';

/**
 * @see mementjs.com http://mementjs.com
 * @todo undo function when remove
 */
class CustomerData extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="text-right">
          <Link
            to="/accountchange"
            className="btn btn-primary account"
          >
            <span>account</span>
          </Link>
        </div>
        <h1>Customer Management</h1>
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>UserID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Created Date</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.userData.map((item, key) => (
                  <tr key={item.id}>
                    <td>{ key }</td>
                    <td>{ item.id }</td>
                    <td>{ item.userName }</td>
                    <td>{ item.email }</td>
                    <td>{ moment(item.createdAt).format('LLLL') }</td>
                    <td>
                      <RemoveButton index={key} email={item.email} />
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
CustomerData.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps)(CustomerData);
