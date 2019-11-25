import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// internal dependencies
//
import Header from 'components/header';
import Footer from 'components/footer';

import Homepage from './homepage';

const Layout = (props) => {
  return (
    <div className="content">
      <Header />

      <div className="content-body">
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
        </Switch>
      </div>

      <div className="content-footer">
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(Layout);
