import React from 'react';
import { withRouter } from 'react-router-dom';
import style from './style';
import { locale } from 'config/string';
import { Result } from 'antd';
import Button from 'microcomponents/button';
import { ReloadOutlined } from '@ant-design/icons';

class NotFount extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.notFoundPage}>
        <Result
          status="404"
          title="404"
          subTitle={locale['915']}
          extra={
            <Button
              type="primary"
              icon={<ReloadOutlined />}
              className={classes.btnReload}
            >
              {locale['910']}
            </Button>
          }
        />
      </div>
    );
  }
}

export default style(withRouter(NotFount));
