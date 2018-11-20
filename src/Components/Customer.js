import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../actions/action';
import { Table, Button } from 'reactstrap';

class Customer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let i = 0;
    if (this.props.userAdmin === 'root') {
      return (
        <div className="container text-center">
          <h1>User Management</h1>
          <div className='text-right'>
            <Button type='button' color='primary'>Delete</Button>
          </div>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>UserID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Created Date</th>
              </tr>
            </thead>
            <tbody>{
              this.props.userData.map(function (item, key) {
                return (
                  <tr key={ key }>
                    <td>{ i++ }</td>
                    <td>{ item.id }</td>
                    <td>{ item.userName }</td>
                    <td>{ item.email }</td>
                    <td>{ item.createdAt }</td>
                  </tr>
                )
              })
            }
            </tbody>
          </Table>
        </div>
      )
    }
    else {
      return (
        <div className="text-center">
          <h1>User not Proper</h1>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps)(Customer);
