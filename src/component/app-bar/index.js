import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined, HomeOutlined, EditOutlined } from '@ant-design/icons';
import styles from './style';
import { openDrawer } from 'state';
import { v4 as uuidv4 } from 'uuid';

const { Header } = Layout;
const { SubMenu } = Menu;

class AppBar extends React.Component {
  state = {
    route: [
      {
        id: uuidv4(),
        title: 'صفحه اصلی',
        icon: <HomeOutlined />,
        isSubmenu: false,
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
    const { classes, isMobile, isDrawer } = this.props;
    const { route } = this.state;
    return (
      <Header className={classes.header} style={{ padding: '0 10px' }}>
        {isMobile ? (
          <div onClick={() => isDrawer(true)}>
            <MenuOutlined style={{ fontSize: 20, color: '#fff' }} />
          </div>
        ) : (
          <Menu
            // theme="#263f55"
            mode="horizontal"
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
        )}
      </Header>
    );
  }
}

const mapStateToProps = (state) => ({
  isMobile: state.screen,
});

const mapDispatchToProps = (dispatch) => ({
  isDrawer: (show) => dispatch(openDrawer(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(styles(AppBar));
