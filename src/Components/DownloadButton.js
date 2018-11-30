import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

class DownloadButton extends Component {
  constructor(props) {
    super(props);
    this.handleDownload = this.handleDownload.bind(this);
  }

  handleDownload() {
    const { fileId } = this.props;
    this.props.downloadWatcher(fileId);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-default btn-color"
          onClick={this.handleDownload}
        >
          <FontAwesomeIcon icon={faFileDownload} />
                    &nbsp;&nbsp;DOWNLOAD
        </button>
      </div>
    );
  }
}

DownloadButton.propTypes = {
  downloadWatcher: PropTypes.func.isRequired,
  fileId: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(DownloadButton);
