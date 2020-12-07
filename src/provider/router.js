import React, { Suspense } from 'react';
import { withRouter, Switch } from 'react-router-dom';
import GuradRoute from './guradRoute';
import style from 'style';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 44 }} spin />;

function Router(props) {
  const { routes, classes } = props;

  return (
    <Suspense
      fallback={
        <div className={classes.loading}>
          <Spin indicator={antIcon} />
        </div>
      }
    >
      <Switch>
        {routes.map((route) => (
          <GuradRoute
            key={route.path}
            title={route.title}
            exact={route.exact}
            path={route.path}
            render={() => {
              document.title = `چالش رهنما | ${route.title}`;
              const Page = route.component();
              return <Page />;
            }}
            {...props}
            guard={route.guard}
          />
        ))}
      </Switch>
    </Suspense>
  );
}

export default withRouter(style(Router));
