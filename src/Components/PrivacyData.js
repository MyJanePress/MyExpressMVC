import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

class PrivacyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      <div className='container text-right m-5'>
        <form onSubmit={this.handleSubmit}>
          <input
            style={{display: 'none'}}
            type="file"
            name="file"
            onChange={ this.handleChange }
            ref={fileInput => this.fileInput = fileInput}
          />
          <button
            className='btn btn-primary'
            onClick={() => this.fileInput.click()}
          >load File</button>
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

PrivacyData.propTypes = {
  token: PropTypes.string.isRequired,
  privacyWatcher: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(PrivacyData);
