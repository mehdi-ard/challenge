import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Layout, notification } from 'antd';

import style from './style';
import Routes from 'config/routes';
import Router from 'provider/router';
import { screen } from 'state';
import Drawer from 'component/drawer';
import AppBar from 'component/app-bar';

notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 4,
  rtl: true,
});

const responsive = window.innerWidth <= 1024;

class App extends React.Component {
  componentDidMount() {
    const { isMobile } = this.props;
    isMobile(responsive);
  }

  render() {
    const { classes, isMobile } = this.props;
    return (
      <>
        <BrowserRouter>
          <main className={classes.app}>
            {isMobile ? <Drawer /> : null}
            <Layout style={{ backgroundColor: 'transparent' }}>
              <AppBar />
              <div className={classes.wrapper}>
                <Router routes={Routes} />
              </div>
            </Layout>
          </main>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isMobile: state.screen,
});

const mapDispatchToProps = (dispatch) => ({
  isMobile: (mobile) => dispatch(screen(mobile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(style(App));
