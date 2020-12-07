import React from 'react';
import { connect } from 'react-redux';
import styles from './style';
import { withRouter, Link } from 'react-router-dom';
import { Drawer, Menu } from 'antd';
import { EditOutlined, HomeOutlined } from '@ant-design/icons';
import { openDrawer } from 'state';
import { v4 as uuidv4 } from 'uuid';

const { SubMenu } = Menu;

class DrawerMenu extends React.Component {
  state = {
    route: [
      {
        id: uuidv4(),
        title: 'صفحه اصلی',
        icon: <HomeOutlined />,
        path: '/',
      },
      {
        id: uuidv4(),
        title: 'ایجاد پست',
        icon: <EditOutlined />,
        path: '/create-post',
      },
    ],
  };

  render() {
    const { classes, isMobile, isDrawer, openDrawer } = this.props;
    const { route } = this.state;
    const menu = (
      <>
        <Menu
          // theme="#263f55"
          mode="inline"
          defaultSelectedKeys={['0']}
          className={classes.menuDrawer}
          theme="dark"
        >
          {route !== '' &&
            route.map((item, index) =>
              item.isSubmenu ? (
                <SubMenu key={index} icon={item.icon} title={item.title}>
                  {item.dataSubMenu.map((sub) => (
                    <Menu.Item
                      key={sub.id}
                      to={sub.path}
                      onClick={() => isDrawer(false)}
                    >
                      <Link to={sub.path}>{sub.title}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item
                  key={index}
                  icon={item.icon}
                  onClick={() => isDrawer(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
              )
            )}
        </Menu>
      </>
    );
    return isMobile ? (
      <Drawer
        placement="right"
        closable={false}
        onClose={() => isDrawer(false)}
        visible={openDrawer}
      >
        {menu}
      </Drawer>
    ) : null;
  }
}

const mapDispatchToProps = (dispatch) => ({
  isDrawer: (show) => dispatch(openDrawer(show)),
});

const mapStateToProps = (state) => ({
  isMobile: state.screen,
  openDrawer: state.drawer,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styles(withRouter(DrawerMenu)));
