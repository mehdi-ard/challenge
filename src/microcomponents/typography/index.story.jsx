import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from './';

storiesOf('Typography', module)
  .add('h1', () => <Typography variant="title">Hello Button</Typography>)
  .add('h2', () => (
    <Typography variant="title" level={2}>
      Hello Button
    </Typography>
  ))
  .add('h3', () => (
    <Typography variant="title" level={3}>
      Hello Button
    </Typography>
  ))
  .add('h4', () => (
    <Typography variant="title" level={4}>
      Hello Button
    </Typography>
  ))
  .add('text', () => <Typography variant="text">Hello Button</Typography>)
  .add('text secondary', () => (
    <Typography variant="text" type="secondary">
      Hello Button
    </Typography>
  ))
  .add('text warning', () => (
    <Typography variant="text" type="warning">
      Hello Button
    </Typography>
  ))
  .add('Paragraph', () => (
    <Typography variant="paragraph">Hello Button</Typography>
  ))
  .add('Paragraph copyable', () => (
    <Typography variant="paragraph" copyable>
      Hello Button
    </Typography>
  ))
  .add('Paragraph ellipsis', () => (
    <Typography variant="paragraph" ellipsis>
      Ant Design, a design language for background applications, is refined by
      Ant UED Team. Ant Design, a design language for background applications,
      is refined by Ant UED Team. Ant Design, a design language for background
      applications, is refined by Ant UED Team. Ant Design, a design language
      for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team.
      Ant Design, a design language for background applications, is refined by
      Ant UED Team.
    </Typography>
  ))
  .add('Paragraph show', () => (
    <Typography variant="paragraph" ellipsis={{ rows: 3, expandable: true }}>
      Ant Design, a design language for background applications, is refined by
      Ant UED Team. Ant Design, a design language for background applications,
      is refined by Ant UED Team. Ant Design, a design language for background
      applications, is refined by Ant UED Team. Ant Design, a design language
      for background applications, is refined by Ant UED Team. Ant Design, a
      design language for background applications, is refined by Ant UED Team.
      Ant Design, a design language for background applications, is refined by
      Ant UED Team.
    </Typography>
  ));
