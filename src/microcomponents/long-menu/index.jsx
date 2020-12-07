import React from 'react';
import { Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import Button from 'microcomponents/button';

function LongMenu({ data, title, ...props }) {
  const menu = (
    <Menu>
      {data.map((item, index) => (
        <>
          <Menu.Item key={index}>
            <a target="_blank" rel="noopener noreferrer" href={item.link}>
              {item.title}
            </a>
          </Menu.Item>
          <Menu.Divider />
        </>
      ))}
    </Menu>
  );
  return (
    <Dropdown overlay={menu} {...props}>
      <Button onClick={(e) => e.preventDefault()}>{title}</Button>
    </Dropdown>
  );
}

export default LongMenu;
