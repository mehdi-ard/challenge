import React from 'react';
import './assest/style.css';

function Icon({ className, name }) {
  return <i className={(className, `icon-${name}`)}></i>;
}

export default Icon;
