import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import DownloadButton from './DownloadButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faFile } from '@fortawesome/free-solid-svg-icons';

class PrivacyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.privateDataWatcher(); 
  }
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file);
    this.props.privacyWatcher(formData);
  }
  handleChange(event) {
    this.setState({file: event.target.files[0]});
  }
  render() {
    return (
      <div className='container text-right'>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <input
            style={{display: 'none'}}
            type="file"
            name="file"
            onChange={ this.handleChange }
            ref={fileInput => this.fileInput = fileInput}
          />
          <div className='col-md-offset-2 margin-top'>
            <button
              className='btn btn-primary'
              onClick={() => this.fileInput.click()}
            >
              <FontAwesomeIcon icon={faFile} />
              &nbsp;&nbsp;load File
            </button>
            <button
              type="submit"
              className="btn btn-default"
            >
            <FontAwesomeIcon icon={faFileUpload} />
            &nbsp;&nbsp;Upload
              </button>
          </div>
          
        </form>
        <div className="text-center">
          <h1>Private Data</h1>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>File</th>
                <th>Created Date</th>
                <th>Last Date</th>
                <th>download</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.privateData.map((item, key) => (
                  <tr key={ item.fileId }>
                    <td>{ key }</td>
                    <td>{ item.fileId }</td>
                    <td>{ item.email }</td>
                    <td>{ moment(item.createdAt).format('LLLL') }</td>
                    <td>{ moment(item.updatedAt).format('LLLL') }</td>
                    <td>
                      <DownloadButton fileId={ item.fileId }/>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

PrivacyData.propTypes = {
  token: PropTypes.string.isRequired,
  privacyWatcher: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(PrivacyData);
