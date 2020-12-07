import { Result } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'microcomponents/button';
import { connect } from 'react-redux';
import { loading } from 'state';

class ErrorPage extends React.PureComponent {
  componentDidMount() {
    this.props.isLoading(false);
  }
  render() {
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Button type="primary" onClick={() => this.props.history.push('/')}>
            برگشت به خانه
          </Button>
        }
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  isLoading: (show) => dispatch(loading(show)),
});

export default connect(null, mapDispatchToProps)(withRouter(ErrorPage));
