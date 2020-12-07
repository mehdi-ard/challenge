import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { removeToken } from 'state';

class Logout extends React.Component {
  render() {
    const { isRemoveToken } = this.props;
    isRemoveToken('token');
    return <Redirect to={`/login`} />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  isRemoveToken: (token) => dispatch(removeToken(token)),
});

export default connect(null, mapDispatchToProps)(withRouter(Logout));
