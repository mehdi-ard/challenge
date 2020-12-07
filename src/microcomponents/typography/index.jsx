import React from 'react';
import { Typography as CoreTypography } from 'antd';

class Typography extends React.Component {
  render() {
    const { variant, children, ...props } = this.props;
    if (variant === 'title') {
      const { Title } = CoreTypography;
      return <Title {...props}>{children}</Title>;
    } else if (variant === 'text') {
      const { Text } = CoreTypography;
      return <Text {...props}>{children}</Text>;
    } else if (variant === 'paragraph') {
      const { Paragraph } = CoreTypography;
      return <Paragraph {...props}>{children}</Paragraph>;
    }
  }
}

export default Typography;
