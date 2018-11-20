import React, { Component } from 'react';
import { mapStateToProps } from '../actions/action';
import { Table, Button, Input } from 'reactstrap';
import { connect } from 'react-redux';
class CustomerData extends Component {
    // state = {  }
    constructor(props) {
        super(props);
    }
    render() { 
    let i = 0;
      return (
        <div className="container text-center">
          <h1>User Management</h1>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>UserID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Created Date</th>
                <th><Button type='button' color='primary'>Delete</Button></th>
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
                    <td><Input type='checkbox' /></td>
                  </tr>
                )
              })
            }
            </tbody>
          </Table>
        </div>
      )
    }
}
 
export default connect(mapStateToProps)(CustomerData);