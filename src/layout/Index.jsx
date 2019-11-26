import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// external dependencies
//
const classNames = require('classnames');

// internal dependencies
//
import Header from 'components/header';
import Footer from 'components/footer';
import ContactModal from './contact-modal';

import Homepage from './homepage';

const Layout = (props) => {
  // modal
  const [contactModal, setContactModal] = useState(false);

  // content class names
  const contentClassNames = classNames({
    content: true,
    'modal-open': contactModal,
  });

  return (
    <>
      <div className={contentClassNames}>
        <Header setContactModal={setContactModal} />

        <div className="content-body">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Homepage setContactModal={setContactModal} />}
            />
          </Switch>
        </div>

        <div className="content-footer">
          <Footer />
        </div>
      </div>

      {contactModal && (
        <ContactModal closeModal={() => setContactModal(false)} />
      )}
    </>
  );
};

export default withRouter(Layout);
